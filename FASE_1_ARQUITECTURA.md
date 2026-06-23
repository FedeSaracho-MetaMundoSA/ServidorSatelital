# ARQUITECTURA DE INFORMACIÓN Y MODELO DE DATOS SEMÁNTICO (FASE 1)
## Empresa: SERVIDOR SATELITAL (Titular: Jorge Alberto Sarapura)
### Enfoque: Soluciones de Conectividad e Infraestructura Crítica de Alta Disponibilidad para Entornos Extremos (Norte de Argentina)

---

## 1. DISEÑO DEL ESQUEMA DE ENTIDADES (BASE DE DATOS RELACIONAL / NO-SQL CONCEPTUAL)

El objetivo de este modelo es dar soporte dinámico a todo el catálogo, sectores objetivo, modelos de precios y divisiones de servicio técnico que ofrece la compañía. Este esquema está optimizado tanto para despliegues relacionales (PostgreSQL/SQL Server) como para colecciones documentales (Firebase Firestore / MongoDB) debido a la modularidad semántica.

### 1.1 Esquema Relacional en SQL (PostgreSQL - DDL Deteil)

```sql
-- Habilitar extensión para identificación robusta UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Colección / Tabla de Sectores de Destino (TargetSectors)
-- Define a qué mercados o verticales industriales apuntamos
CREATE TABLE target_sectors (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(150) NOT NULL,
    short_description VARCHAR(255) NOT NULL,
    full_description TEXT NOT NULL,
    demanded_pain_points JSONB NOT NULL, -- Puntos de dolor (ej. "pérdida de trazabilidad", "aislamiento de cuadrillas")
    hero_image_url VARCHAR(255),
    seo_title VARCHAR(150),
    seo_description VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Colección / Tabla de Categorías de Negocio (Categories)
-- Ej: "Internet Satelital", "Video Vigilancia", "Enlaces Híbridos"
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(150) NOT NULL,
    technical_spec_overview TEXT NOT NULL,
    icon_identifier VARCHAR(50) NOT NULL, -- Identificador de Lucide Icon o SVG
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Colección / Tabla de Servicios Técnicos e Infraestructura (Services)
CREATE TABLE services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
    slug VARCHAR(100) UNIQUE NOT NULL,
    title VARCHAR(150) NOT NULL,
    commercial_pitch TEXT NOT NULL,
    technical_details JSONB NOT NULL, -- Lista de ventajas de ingeniería (ej: ["failover 4G", "mástil homologado"])
    installation_timeframe VARCHAR(100) NOT NULL, -- Tiempo promedio de instalación
    warranty_months INTEGER DEFAULT 12,
    is_critical_business BOOLEAN DEFAULT FALSE, -- Si aplica para servicios esenciales de minería con SLA contractual
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Colección / Tabla de Catálogo de Productos y Soluciones (HardwareProducts)
CREATE TABLE hardware_products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id UUID REFERENCES categories(id) ON DELETE RESTRICT,
    sku VARCHAR(100) UNIQUE NOT NULL,
    model_name VARCHAR(150) NOT NULL,
    brand VARCHAR(100) NOT NULL, -- "Starlink Authorized", "YEDRO Representative", "VERTEX"
    origin VARCHAR(100) DEFAULT 'Importado',
    brief_description TEXT NOT NULL,
    technical_sheets JSONB NOT NULL, -- Key-value de ingeniería (ej:{"frecuencias": "136-174 MHz", "voltaje": "12V-30V"})
    weight_kg NUMERIC(6, 2),
    is_mobile_ready BOOLEAN DEFAULT FALSE, -- Optimizado para movilidad 4x4 / transporte pesado
    power_supply_specification VARCHAR(255), -- Detalle de alimentación (ej. "Custom 12-24V a 30V encendedor")
    mounting_type VARCHAR(150) DEFAULT 'Soporte magnético alta resistencia',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Colección / Tabla de Modelos de Comercialización (PricingModels)
-- Vincula productos, abonos mensuales de servicio satelital u opciones de financiación B2B
CREATE TABLE pricing_models (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID REFERENCES hardware_products(id) ON DELETE CASCADE,
    tier_name VARCHAR(100) NOT NULL, -- Ej: "Adquisición Corporativa Directa", "Arrendamiento Mensual", "Financiación Agro"
    hardware_cost NUMERIC(12, 2) NOT NULL, -- Costo del equipo en USD / ARS
    monthly_subscription VARCHAR(100), -- Abono satelital estimado / costo recurrente de tráfico
    payment_terms_narrative TEXT NOT NULL, -- Detalle de las cuotas / opciones financieras (ej. "Cheques de Pago Diferido 0-30-60 días")
    sla_percentage NUMERIC(4, 2) DEFAULT 99.5, -- Compromiso de disponibilidad en enlaces satelitales corporativos
    is_custom_quote_required BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. Tabla Intermedia de Mapeo Relacional - Productos a Sectores de Destino
-- Permite vistas cruzadas: "Ver productos sugeridos para Minería"
CREATE TABLE product_sector_mapping (
    product_id UUID REFERENCES hardware_products(id) ON DELETE CASCADE,
    sector_id UUID REFERENCES target_sectors(id) ON DELETE CASCADE,
    PRIMARY KEY (product_id, sector_id)
);
```

### 1.2 Estructura JSON Semantizada del Esquema de Datos (Colecciones Firestore / MongoDB)

Este esquema conceptual JSON documenta cómo estructurar las propiedades clave para un frontend React dinámico de alto nivel.

#### Documento en la Colección `TargetSectors`:
```json
{
  "_id": "sec_mineria_extrema",
  "slug": "mineria-extrema-noa",
  "name": "Minería a Gran Escala y Alta Montaña",
  "short_description": "Enlaces críticos e infraestructura homologada de radiotransmisión para campamentos y flotas en altura superior a los 3500 msnm.",
  "full_description": "Diseñamos e implementamos enlaces satelitales e híbridos blindados contra condiciones climáticas extremas. Cubrimos requerimientos de trazabilidad exigidos por regulaciones de seguridad minera en Salta, Jujuy y Catamarca.",
  "demanded_pain_points": [
    "Pérdida de comunicaciones críticas por tormentas y heladas.",
    "Falta de trazabilidad vehicular en zonas de silencio radioeléctrico.",
    "Demora de soporte en sitio ante caída de enlaces satelitales estándar."
  ],
  "associated_services": [
    "ser_enlaces_hibridos",
    "ser_obras_misiones_criticas"
  ],
  "seo": {
    "title": "Internet Satelital e Infraestructura de Radiocomunicación para Minería | NOA",
    "meta_description": "Soluciones de alta montaña para campamentos mineros en Salta, Jujuy y Catamarca. Enlaces híbridos satélite-radio a prueba de fallas con soporte técnico inmediato."
  }
}
```

#### Documento en la Colección `HardwareProducts` (Ejemplo Kit Starlink Mini Customizado):
```json
{
  "_id": "prod_starlink_mini_movil_ss",
  "sku": "SKU-SL-MINI-MOB-12V",
  "brand": "Starlink & Servidor Satelital Custom Engineering",
  "model_name": "Kit Starlink Mini Móvil Optimizado B2B",
  "category_ref": "cat_internet_satelital",
  "brief_description": "Kit de internet satelital en movimiento optimizado por nuestro equipo de ingeniería. Preparado para alimentación directa sin inversores ineficientes.",
  "technical_sheet": {
    "voltaje_entrada": "12V-24V DC nativo (Rango operable hasta 30V)",
    "conector_alimentacion": "Adaptador reforzado para encendedor de camiones, pick-ups 4x4 o colectivos",
    "soporte_fijacion": "Base magnética industrial con imanes de neodimio de alta atracción (soporta velocidades de viento superiores a 130 km/h)",
    "antena_tecnologia": "Arreglo plano orientado electrónicamente (fase phaser activa)",
    "consuno_promedio": "25W - 40W en operación pico",
    "peso_antena_kg": "1.10 kg (fácil de trasladar)"
  },
  "commercial_advantages": {
    "ventaja_energetica": "Ahorra un 35% de energía del alternador al evitar el uso de conversores de 220V AC estándar.",
    "montaje_rapido": "Se instala sobre el techo del vehículo en menos de 2 minutos sin necesidad de perforación de carrocería."
  },
  "is_mobile_ready": true,
  "sectors_applied": [
    "sec_mineria_extrema",
    "sec_logistica_pesada",
    "sec_turismo_expedicion"
  ],
  "pricing": {
    "purchase_cost": "Consultar cotización B2B según volumen de flota",
    "subscription_tier": "Abono Starlink Itinerante / Global bajo licencia de operador autorizada",
    "financing": "Aceptamos CPD, financiación directa a pymes certificadas, tarjetas agropecuarias internacionales"
  }
}
```

---

## 2. MAPEO SEO ON-PAGE: ESTRUCTURA CORE Y ARQUITECTURA DE CONTENIDO SEMÁNTICO

Plan de posicionamiento orgánico geo-localizado orientado a tomadores de decisiones de la industria (CEOs, Directores de Operaciones, Jefes de Logística y Administradores Agropecuarios) en el Norte de la República Argentina y zonas de frontera.

### 2.1 Mapeo de URLs, Títulos y Metatags del Sitio Core

#### 📁 Página de Inicio (Home / Landing Principal)
*   **Segmentación del Canal**: Corporativo e Industrial.
*   **Estructura de URL**: `/` (Raíz)
*   **Title Tag**: `Servidor Satelital | Enlaces de Alta Disponibilidad e Infraestructura Crítica`
*   **Meta Description**: `Instalación y provisión oficial de Internet Satelital. Especialistas en optimización de Starlink Móvil (12V-30V), sistemas de video vigilancia híbridos y radiotransmisores Yedro para campamentos mineros, agro y transporte en el norte argentino.`
*   **Jerarquía de Encabezados (Header Nesting)**:
    *   `[H1]` `CONECTIVIDAD CRÍTICA Y COMUNICACIONES DE ALTA DISPONIBILIDAD DONDE LA SEÑAL TRADICIONAL MUERE`
    *   `[H2]` `Soluciones Tecnológicas e Infraestructura Satelital Certificada`
    *   `[H2]` `Unidades de Negocio Diseñadas para Entornos de Operación Extrema`
        *   `[H3]` `Internet Satelital en Movimiento: Kit Starlink Mini (12-24V)`
        *   `[H3]` `Video Vigilancia Móvil y CCTV Inteligente para Flotas de Carga`
        *   `[H3]` `GPS Satelital Híbrido: Geolocalización con Failover Inteligente`
    *   `[H2]` `Ingeniería de Campo con Respaldo de Jorge Alberto Sarapura`
    *   `[H2]` `Sectores del NOA que Impulsamos con Tecnología Robusta`

#### 📁 División Internet Satelital (Starlink B2B & Móvil)
*   **Estructura de URL**: `/servicios/internet-satelital-starlink`
*   **Title Tag**: `Internet Satelital Starlink Móvil 12V-24V B2B | Servidor Satelital`
*   **Meta Description**: `Soluciones Starlink personalizadas para camionetas de exploración, camiones y campamentos. Alimentación directa a 12/24 Volts y soportes magnéticos homologados de alta tracción para minería y turismo en Salta y Jujuy.`
*   **Jerarquía de Encabezados (Header Nesting)**:
    *   `[H1]` `INTERNET SATELITAL EN MOVIMIENTO: CONEXIÓN ROBUSTA DE BANDA ANCHA EN RUTA Y ALTA MONTAÑA`
    *   `[H2]` `¿Por qué elegir nuestro Kit Custom Starlink Mini de 12V/24V?`
        *   `[H3]` `Eficiencia Energética Optimizada sin Pérdidas Directas`
        *   `[H3]` `Sujeción Magnética de Neodimio Grado Militar`
    *   `[H2]` `Sectores de Aplicación Inmediata de Starlink Itinerante`
        *   `[H3]` `Flotas Mineras y Vehículos de Misión de Exploración Geográfica`
        *   `[H3]` `Transporte de Pasajeros de Larga Distancia y Minibuses de Turismo de Aventura`

#### 📁 División Video Vigilancia y DVRs Móviles (Seguridad Patrimonial)
*   **Estructura de URL**: `/servicios/video-vigilancia-satelital`
*   **Title Tag**: `Cámaras de Seguridad y DVRs Móviles para Flotas | Servidor Satelital`
*   **Meta Description**: `Sistemas de video vigilancia con grabación persistente local y transmisión vía enlace Starlink. Especialistas en flotas logísticas, maquinarias pesadas y monitoreo remoto corporativo.`
*   **Jerarquía de Encabezados (Header Nesting)**:
    *   `[H1]` `VIDEO VIGILANCIA COMPLEJA Y MONITOREO DE ACTIVOS BAJO CONDICIONES EXTREMAS`
    *   `[H2]` `CCTV Fijo para Campas e Inmuebles Industriales con Enlace Satelital`
    *   `[H2]` `DVRs de Grado Industrial con Conectividad Móvil Antivibraciones`
        *   `[H3]` `Grabación Ininterrumpida en Discos de Estado Sólido (SSD)`
        *   `[H3]` `Transmisión Inteligente en Tiempo Real vía Red del Vehículo`

#### 📁 División Geoposicionador Satelital Híbrido (GPS Híbrido)
*   **Estructura de URL**: `/servicios/gps-satelital-hibrido`
*   **Title Tag**: `GPS Híbrido para Minería y Logística de Silencio de Señal`
*   **Meta Description**: `Localización vehicular dual ininterrumpida. Transmisión nativa por 4G con failover automático a enlace Wi-Fi Starlink cuando el vehículo ingresa a cañadones, minas o desiertos.`
*   **Jerarquía de Encabezados (Header Nesting)**:
    *   `[H1]` `SISTEMA DE GEOLOCALIZACIÓN HÍBRIDA SIN BANDERAS EN BLANCO EN EL MAPA`
    *   `[H2]` `La Tecnología Detrás del Failover Automático de Señal`
        *   `[H3]` `Transmisión Base Celular en Rutas Principales (4G/LTE)`
        *   `[H3]` `Conmutación IP Automática a Wi-Fi Satelital Starlink en Áreas de Silencio`
    *   `[H2]` `Optimización de Tiempos y Seguridad de Cuadrillas Operativas`

---

## 3. FLUJO SEMÁNTICO Y SISTEMA DE ENLACES INTERNOS (CROSS-LINKING)

Para robustecer la legibilidad de Google Bot y la navegación de clientes corporativos, definimos un grafo de hipervínculos estructurado:
1. **Flujo de Navegación Vertical**: Los detalles de Hero se vinculan con las páginas específicas de servicios mediante slugs semánticos para guiar al usuario que ingresa por búsquedas de Starlink 12V.
2. **Flujo de Conversión Horizontal**: Cada sección técnica de producto (Starlink Mini, GPS Híbrido) mapea enlaces a la sección de consulta `/contacto#cotizacion-especifica` con parámetros dinámicos sobre el tipo de hardware, asegurando que la fuerza de ventas liderada por Jorge Alberto Sarapura cuente con información pre-clasificada del cliente (presupuesto estimado, sector, cantidad de vehículos).
3. **Validación Geo-localizada**: Las menciones geográficas de operaciones en el NOA vinculan explícitamente a las secciones de "Obras Civiles", dando la credibilidad necesaria respecto a las capacidades técnicas de cimentación física de mástiles e instalación de soportes según especificaciones de ingeniería hidráulica y meteorológica del norte argentino.

---
### [LISTO PARA CONFIRMACIÓN DE LA FASE 2: COPYWRITING DE ALTA CONVERSIÓN EN LANDING PRINCIPAL]
