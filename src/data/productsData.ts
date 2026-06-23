import { ProductSpec } from '../types';

export const CATALOG_PRODUCTS: ProductSpec[] = [
  {
    id: "starlink-plan-residencial",
    sku: "ST-PLAN-RES",
    title: "Plan Starlink Residencial",
    tagline: "Internet satelital de alta velocidad e ilimitado para hogares y oficinas rurales",
    category: "Planes de Internet",
    origin: "Equipos de Conectividad",
    industries: ["Residencial", "Turismo"],
    description: "Suscripción mensual de datos satelitales ilimitados de alta velocidad con mínima latencia. Diseñado para hogares, oficinas fijas o emprendimientos locales de turismo y agricultura en todo el NOA sin conexión de fibra óptica.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop",
    bulletPoints: [
      "Tráfico de datos verdaderamente ilimitado sin límites de consumo mensual ni penalizaciones.",
      "Velocidades promedio de descarga de 100 Mbps a 220 Mbps con latencias óptimas (25-45ms).",
      "Ideal para teletrabajo, streaming HD/4K simultáneo, videollamadas fluidas y domótica integral.",
      "Autoinstalable y autogestionado con la app oficial de Starlink para total autonomía."
    ],
    techSpecs: [
      { label: "Latencia Promedio", value: "25 - 45 ms en el NOA" },
      { label: "Velocidad de Descarga", value: "Hasta 220 Mbps (Datos ilimitados)" },
      { label: "Velocidad de Subida", value: "Hasta 25 Mbps" },
      { label: "Compatibilidad de Equipos", value: "Antena Starlink Estándar V4 y Actuados" },
      { label: "Cobertura Nacional", value: "100% de cobertura en cualquier rincón de la República Argentina" }
    ],
    operatividad: [
      "Viviendas y puestos rurales en parajes andinos.",
      "Oficinas comerciales aisladas, campos agrícolas y obradores viales.",
      "Cabañas y hosterías en zonas turísticas fuera del mapa de fibra óptica."
    ],
    powerRequirement: "Dependiente de la antena emisora",
    price: "Consultar Facturación",
    availability: "in_stock",
    condition: "new",
    brand: "Starlink",
    googleProductCategory: "Electronics > Communications > Telephony > Satellite Phones & Communicators",
    mpn: "ST-PLAN-RES"
  },
  {
    id: "starlink-plan-mini-movil",
    sku: "ST-PLAN-MINIMAL",
    title: "Plan Starlink Mini Viajero (Móvil)",
    tagline: "Datos satelitales ultraportátiles de alta velocidad para campistas y camioneros en movimiento",
    category: "Planes de Internet",
    origin: "Equipos de Conectividad",
    industries: ["Logística", "Turismo", "Rural"],
    description: "Planes flexibles diseñados exclusivamente para la antena portátil Starlink Mini. Permite llevar internet a cualquier destino y pausar o activar el servicio según necesidad, ideal para caravanas, pickups y profesionales itinerantes.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    bulletPoints: [
      "Esquema flexible de facturación mensual: Puedes pausar y reanudar el plan en cualquier momento.",
      "Consumo integrado ultraeficiente de baja corriente directa (nativa de 12V-24V).",
      "Tráfico de datos móviles de alta velocidad para navegación ágil en bordes de caminos cordilleranos.",
      "Uso permitido en movimiento hasta 160 km/h con soportes adaptados homologados."
    ],
    techSpecs: [
      { label: "Consumo Promedio", value: "Bajo perfil energético ideal para vehículos en marcha (22W)" },
      { label: "Flexibilidad Financiera", value: "Facturación fraccionada por mes de uso activo (sin contratos anuales)" },
      { label: "Rendimiento Estable", value: "De 50 a 150 Mbps fluidos en marcha" },
      { label: "Conector Eléctrico", value: "Compatible con plugs encendedores directos 12V/24V" },
      { label: "Rastreo Redundante", value: "Perfecta compatibilidad con soportes magnéticos Servidor Satelital" }
    ],
    operatividad: [
      "Usuarios que realizan travesías off-road o recreativas en zonas sin cobertura.",
      "Camiones de larga distancia y camionetas de exploración minera itinerantes.",
      "Puestos ambulantes de control veterinario, sanitario o vial provincial."
    ],
    powerRequirement: "12V-24V DC en campo",
    price: "Consultar Facturación",
    availability: "in_stock",
    condition: "new",
    brand: "Starlink",
    googleProductCategory: "Electronics > Communications > Telephony > Satellite Phones & Communicators",
    mpn: "ST-PLAN-MINIMAL"
  },
  {
    id: "starlink-plan-prioridad",
    sku: "ST-PLAN-PRIORITY",
    title: "Plan Starlink Prioridad Comercial",
    tagline: "Máxima prioridad de red y ancho de banda optimizado para comercios y logística",
    category: "Planes de Internet",
    origin: "Equipos de Conectividad",
    industries: ["Logística", "Turismo"],
    description: "Suscripción premium para empresas, bodegas, cooperativas y flotas de transporte con asignación prioritaria de ancho de banda. Garantiza conectividad ininterrumpida incluso en horas de alta saturación de satélites.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
    bulletPoints: [
      "Asignación de datos priorizados con acuerdos de nivel de servicio comerciales.",
      "Soporte multi-usuario de alta densidad capaz de conectar simultáneamente a más de 80 puestos de trabajo.",
      "IP Pública direccionada para fácil configuración de VPNs seguras de bases comerciales.",
      "Consola centralizada de administración remota para telemetría multicanal de flotas de transporte."
    ],
    techSpecs: [
      { label: "Nivel de Prioridad de Red", value: "Prioritaria Comercial (Gold Service Tier)" },
      { label: "Ancho de Banda de Subida", value: "Hasta 45 Mbps estables con baja oscilación" },
      { label: "Soporte Corporativo", value: "Soporte priorizado contra caídas 24/7/365 en Salta" },
      { label: "Direccionamiento Técnico", value: "IP pública configurable para túneles VPN" },
      { label: "Capacidad de Concurrencia", value: "Optimizado para voz IP HD, CCTV constante y administración remota" }
    ],
    operatividad: [
      "Cooperativas de servicios locales y oficinas comerciales en el NOA.",
      "Sistemas de monitoreo remoto de cámaras y telemetría de plantas distribuidoras.",
      "Oficinas comerciales fijas o unidades habitacionales en parajes aislados."
    ],
    powerRequirement: "Asociado a antenas Starlink Enterprise / Alto Rendimiento",
    price: "Consultar Facturación",
    availability: "in_stock",
    condition: "new",
    brand: "Starlink",
    googleProductCategory: "Electronics > Communications > Telephony > Satellite Phones & Communicators",
    mpn: "ST-PLAN-PRIORITY"
  },
  {
    id: "starlink-mini-movil",
    sku: "SK-ST-MINI-01",
    title: "Kit Starlink Mini Móvil",
    tagline: "Internet de Alta Disponibilidad para el terreno más exigente",
    category: "Conectividad",
    origin: "Equipos de Conectividad",
    industries: ["Logística", "Turismo", "Residencial"],
    description: "Kit Starlink Mini adaptado profesionalmente para operar bajo regímenes de movimiento, vibración y alimentación directa. Cuenta con una electrónica de conversión altamente eficiente y cables blindados para operar a la intemperie.",
    image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?q=80&w=800&auto=format&fit=crop",
    bulletPoints: [
      "Conversión directa DC-DC de alta eficiencia (elimina inversores de corriente ineficientes).",
      "Kit de cables blindados UV-grade con sellado hermético contra partículas finas y polvo andino.",
      "Optimización de consumo energético para preservar las baterías alternadoras de vehículos en campo.",
      "Portabilidad compacta extrema: Guardado o despliegue en campo en menos de 3 minutos."
    ],
    techSpecs: [
      { label: "Tensión de Operación", value: "12V-24V DC Nativo (Soporta transitorios de hasta 30V DC)" },
      { label: "Consumo Energético", value: "18W - 32W promedio (Eficiencia optimizada para baterías críticas)" },
      { label: "Cables Incluidos", value: "RJ45 Blindado de 8m + Cable de alimentación Direct-Fuse" },
      { label: "Frecuencia de Banda", value: "2.4 GHz y 5 GHz Dual-Band integrado" },
      { label: "Rendimiento Satelital", value: "+150 a 220 Mbps de bajada, 15-25 Mbps de subida en el NOA" },
      { label: "Hermeticidad", value: "Clasificación IP67 en todos los conectores expuestos" }
    ],
    operatividad: [
      "Camionetas 4x4 de turismo y travesía recorriendo la mítica Ruta 40.",
      "Equipos de emergencias, ambulancias y misiones aisladas en alta montaña.",
      "Colectivos de pasajeros de larga distancia y camionetas de apoyo logístico."
    ],
    powerRequirement: "12V-24V DC direct alignment (Up to 30V tolerance)",
    price: "1500 USD",
    availability: "in_stock",
    condition: "new",
    brand: "Starlink",
    googleProductCategory: "Electronics > Communications > Telephony > Satellite Phones & Communicators",
    gtin: "0816752023533",
    mpn: "SK-ST-MINI-01"
  },
  {
    id: "soporte-magnetico-premium",
    sku: "SUP-MAG-NOA",
    title: "Soporte Magnético Premium \"Made in Salta\"",
    tagline: "Ingeniería metalmecánica robusta diseñada y fabricada en el norte argentino",
    category: "Ingeniería Local",
    origin: "Fabricación Propia / Soportes Salta",
    industries: ["Rural", "Logística", "Turismo"],
    description: "La joya de nuestra fábrica en Salta CAPITAL. Soporte aerodinámico de ingeniería local ultra rígido fabricado en acero inoxidable SAE-316 y duraluminio. Sostiene antenas de forma segura en camionetas a velocidades de ruta sin perforar el techo o alterar la pintura original del vehículo.",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?q=80&w=800&auto=format&fit=crop",
    bulletPoints: [
      "Equipado con 4 imanes de neodimio de grado militar con fuerza de tracción neta superior a 120 kg.",
      "Recubrimiento de poliuretano vulcanizado elastómero que previene rayas en la pintura de carrocerías.",
      "Geometría deflectora de viento ensayada frente a ráfagas de viento blanco andino de más de 140 km/h.",
      "Fijación universal compatible con las camionetas de exploración más frecuentes en Argentina (pickups 4x4)."
    ],
    techSpecs: [
      { label: "Material del Sello", value: "Acero Inoxidable SAE-316 cortado por láser CNC militar" },
      { label: "Sujección Magnética", value: "4 Núcleos de Neodimio N52 recubiertos contra óxidos" },
      { label: "Resistencia de Carga", value: "Tracción vertical certificada hasta 125 kg por ensamble" },
      { label: "Coeficiente de Arrastre", value: "Especialmente optimizado para aerodinámica de vehículos 4x4" },
      { label: "Compatibilidad", value: "Toyota Hilux, Ford Ranger, VW Amarok, Nissan Frontier y Pesados" },
      { label: "Fabricación y Testeo", value: "Diseño y manufactura local en Salta Capital con garantía perpetua" }
    ],
    operatividad: [
      "Unidades de turismo de aventura y exploración geográfica que enfrentan ráfagas heladas en La Puna.",
      "Empresas de logística y transportes de pasajeros que necesitan conmutación ágil de antena entre unidades.",
      "Vehículos de rescate y seguridad vial provincial en terrenos sinuosos de montaña."
    ],
    powerRequirement: "Pasivo Mecánico (No consume energía)",
    price: "350 USD",
    availability: "in_stock",
    condition: "new",
    brand: "Servidor Satelital",
    googleProductCategory: "Hardware > Structural Brackets",
    mpn: "SUP-MAG-NOA"
  },
  {
    id: "dvr-gps-militar-hybrid",
    sku: "SYS-DVR-HYBRID",
    title: "Sistema DVR Móvil + GPS Híbrido",
    tagline: "Seguridad, CCTV activo y geolocalización redundante sin zonas muertas",
    category: "Seguridad",
    origin: "Fabricación Propia / Soportes Salta",
    industries: ["Rural", "Logística", "Turismo"],
    description: "Central inteligente de videoseguridad para flotas que unifica el monitoreo perimetral DVR móvil con posicionamiento satelital de precisión. Ante la pérdida de señal telefónica móvil 4G, el conector satelital inteligente conmuta el envío de video en vivo directamente a través del Wi-Fi / Satélite Starlink en milisegundos.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop",
    bulletPoints: [
      "Conmutación Failover inteligente: Cambios en milisegundos de enlaces celulares 4G a satelital Starlink.",
      "Almacenamiento de estado sólido (SSD) blindado contra vibraciones, baches de calzadas y rumbos de tierra.",
      "Transmisión perimetral nocturna con lentes infrarrojos para prevenir robos o incidentes en descampados.",
      "Grabador de voz y telemetría de chofer para auditoría frente al cumplimiento de normas de seguridad minera."
    ],
    techSpecs: [
      { label: "Canales de Grabación", value: "4 Canales de video FullHD 1080P simultáneos en vivo" },
      { label: "Conectividad Primaria", value: "Módulo Multi-Sim 4G LTE con antenas de gran ganancia" },
      { label: "Conectividad Failover", value: "Lector Gateway con bypass automático por puerto LAN/Wi-Fi Starlink" },
      { label: "Tipo de Almacenamiento", value: "SSD Industrial Antishock de 1TB (Resiste impactos de hasta 5G)" },
      { label: "Sensores Incorporados", value: "Acelerómetro y giroscopio calibrado de 3 ejes, sensor de desvío de carril" },
      { label: "Trazabilidad de Cabina", value: "Cámaras con IA para fatiga del conductor y advertencia de microsueños" }
    ],
    operatividad: [
      "Flotas de colectivos turísticos de noche cruzando las Yungas y valles de Salta.",
      "Camiones Scania pesados transportando mineral, sustancias químicas o maquinaria crítica.",
      "Vehículos blindados de caudales y logística de alto valor corporativo."
    ],
    powerRequirement: "8V-36V DC de rango amplio con cortes retardados inteligentes",
    price: "890 USD",
    availability: "in_stock",
    condition: "new",
    brand: "Servidor Satelital",
    googleProductCategory: "Electronics > GPS Navigation Systems > GPS Tracking Devices",
    mpn: "SYS-DVR-HYBRID"
  },
  {
    id: "mastil-perfilado-litio",
    sku: "MAS-AUTOP-6M",
    title: "Mástil Autoportante Cimentado 6M",
    tagline: "Anclaje de torre fija resistente a tormentas para bases operativas",
    category: "Ingeniería Local",
    origin: "Fabricación Propia / Soportes Salta",
    industries: ["Rural", "Logística"],
    description: "Estructura metalmecánica de 6 metros de altura diseñada para el soporte de antenas satelitales en campamentos base. Fabricado bajo normas estructurales severas contra vientos de montaña, cuenta con una robusta base de anclaje rápido de cimentación civil.",
    image: "https://images.unsplash.com/photo-1473163928189-394b2222904e?q=80&w=800&auto=format&fit=crop",
    bulletPoints: [
      "Rigidez total ensayada para soportar rachas de vientos de hasta 160 km/h en la pre-cordillera de Salta.",
      "Acabado de pintura epoxídica horneada que previene la corrosión salina de los salares andinos.",
      "Montaje modular que reduce significativamente el uso de grúas complejas en locaciones remotas.",
      "Incluye bandeja protectora de alimentación y gabinetes antihumedad NEMA para equipos conversores."
    ],
    techSpecs: [
      { label: "Altura Nominal", value: "6.0 Metros lineales (2 tramos encastrables reforzados)" },
      { label: "Espesor de Tubo", value: "Chapa de acero al carbono de 3.2mm de espesor estructural" },
      { label: "Tratamiento de Superficie", value: "Galvanizado electrolítico + Recubrimiento Epoxi horneado reforzado" },
      { label: "Base de Anclaje", value: "Placa base de 400x400mm con espárragos de anclaje de 3/4\" de alta resistencia" },
      { label: "Peso Total", value: "58 kg (De fácil manipulación manual por cuadrilla)" },
      { label: "Origen", value: "Planos y soldadura calificada en taller de Salta Capital" }
    ],
    operatividad: [
      "Módulos habitacionales y enfermerías en parajes rurales transitorios.",
      "Monitoreo perimetral y antenas de telemetría en canteras de áridos y represas.",
      "Nodos repetidores en cooperativas rurales de caminos aislados de los Valles."
    ],
    powerRequirement: "Pasivo Mecánico",
    price: "1200 USD",
    availability: "in_stock",
    condition: "new",
    brand: "Servidor Satelital",
    googleProductCategory: "Hardware > Structural Brackets",
    mpn: "MAS-AUTOP-6M"
  },
  {
    id: "handy-yedro-profesional",
    sku: "RAD-YED-888",
    title: "Handy Profesional Yedro YC-888",
    tagline: "Radiocomunicación de alta potencia de recepción para cuadrillas",
    category: "Conectividad",
    origin: "Equipos de Conectividad",
    industries: ["Rural", "Logística", "Turismo"],
    description: "Equipo portátil Handy comercializado de forma oficial con reprogramación de tonos y de repetidores habilitados en Salta. El preferido para la coordinación local inmediata donde no hay red telefónica celular y se requiere durabilidad por caídas continuas.",
    image: "https://images.unsplash.com/photo-1590055531615-f16d36fed8a4?q=80&w=800&auto=format&fit=crop",
    bulletPoints: [
      "Reprogramación a medida de frecuencias con subtonos de seguridad blindados.",
      "Autonomía de batería de larga duración diseñada para turnos ininterrumpidos en campo.",
      "Chasis robusto de aleación de aluminio inyectado de alta tolerancia a impactos.",
      "Soporte físico, repuestos y laboratorio de calibración directo por Jorge Alberto Sarapura."
    ],
    techSpecs: [
      { label: "Frecuencias Operativas", value: "UHF 400-470 MHz / VHF 136-174 MHz reprogramables" },
      { label: "Potencia Real de RF", value: "5W (Vatios reales) para excelente cobertura en valles profundos" },
      { label: "Canales Modulables", value: "128 Canales con agrupamiento táctico manual" },
      { label: "Batería Incluida", value: "Ion-Litio de 2200 mAh recargable con base de carga inteligente" },
      { label: "Certificación de Caída", value: "Ensayo militar contra caídas sobre piedra de hasta 1.8m" },
      { label: "Dimensiones de Handy", value: "115mm (alto) x 58mm (ancho) x 32mm (espesor) sin antena" }
    ],
    operatividad: [
      "Coordinación de maniobras pesadas de carga de áridos y logística de camiones en ruta.",
      "Vigilancia interna de predios rurales, bodegas y establecimiento de alta montaña.",
      "Guías y turismo aventura en excursiones por la Quebrada y Salinas."
    ],
    powerRequirement: "Batería Li-Ion recargable de 7.4V",
    price: "180 USD",
    availability: "in_stock",
    condition: "new",
    brand: "Yedro",
    googleProductCategory: "Electronics > Communications > Telephony > Two-Way Radios",
    mpn: "RAD-YED-888"
  },
  {
    id: "mototrbo-r2",
    sku: "MOT-PORT-R2-DMR",
    title: "Motorola MOTOTRBO R2",
    tagline: "Durabilidad de próximo nivel y ergonomía superior para jornadas ininterrumpidas",
    category: "Conectividad",
    origin: "Equipos de Conectividad",
    industries: ["Rural", "Logística", "Turismo"],
    description: "Un potente equipo de próximo nivel que combina durabilidad extrema y ergonomía avanzada para garantizar un manejo seguro y fácil en los ambientes más duros del NOA. El MOTOTRBO R2 es el aliado definitivo y resistente para soportar polvo grueso, llovizna y golpes severos en la montaña.",
    image: "/assets/images/mototrbo_r2.png",
    bulletPoints: [
      "Alcance superior de comunicación en valles andinos y quebradas.",
      "Audio totalmente configurable con perfiles acústicos refinados.",
      "Diseño resistente y ergonómico que facilita el uso aun vistiendo guantes pesados.",
      "Integración perfecta y directa con sus sistemas y flotas de radio analógicas/digitales existentes."
    ],
    techSpecs: [
      { label: "Modo de Operación", value: "DMR Digital y Analógico Convencional Híbrido" },
      { label: "Rango de Frecuencia", value: "VHF (136-174 MHz) / UHF (400-480 MHz)" },
      { label: "Protección Climática", value: "Clasificación certificada IP55 contra polvo y chorros de agua" },
      { label: "Estándar de Resistencia", value: "Aprobación militar MIL-STD 810G contra golpes e impactos severos" },
      { label: "Baterías Compatibles", value: "Ion-Litio de alta capacidad con autonomía extendida" },
      { label: "Cancelación de Sonido", value: "S-Noise suppression avanzado para ruidos industriales" }
    ],
    operatividad: [
      "Cuadrillas mineras operando en canteras abiertas bajo tormentas o viento de Puna.",
      "Operarios logísticos de carga pesada en depósitos de gran escala.",
      "Personal de operaciones turísticas en valles calchaquíes remotos."
    ],
    powerRequirement: "Batería Li-Ion recargable de alta duración con base inteligente 220V",
    price: "490 USD",
    availability: "in_stock",
    condition: "new",
    brand: "Motorola Solutions",
    googleProductCategory: "Electronics > Communications > Telephony > Two-Way Radios",
    mpn: "MOT-PORT-R2-DMR",
    badgeText: "SÚPER BUSCADO",
    isHighlighted: true
  },
  {
    id: "mototrbo-dep250",
    sku: "MOT-PORT-DEP250",
    title: "Motorola MOTOTRBO DEP 250",
    tagline: "La nueva gama digital asequible y altamente práctica para su equipo",
    category: "Conectividad",
    origin: "Equipos de Conectividad",
    industries: ["Rural", "Logística", "Turismo", "Residencial"],
    description: "La gama de radios digitales portátiles de nivel básico altamente prácticas para profesionales que buscan comunicarse de forma óptima y sin pagar de más. El DEP 250 ofrece todas las ventajas críticas de la tecnología digital DMR: voz clara, mayor alcance y privacidad integrada a un costo sumamente asequible.",
    image: "/assets/images/mototrbo_dep_250.png",
    bulletPoints: [
      "Hasta un 40% más de tiempo de conversación para evitar recargas a mitad de jornada.",
      "Doble capacidad de voz: transmite simultáneamente gracias a ranuras de tiempo de 12.5 kHz.",
      "Cobertura extendida con calidad de audio digital cristalino libre de ruidos molestos.",
      "Supresión inteligente de estática y zumbidos de fondo en modo puramente digital."
    ],
    techSpecs: [
      { label: "Canales Totales", value: "16 canales configurables por software de precisión" },
      { label: "Espaciamiento de Canal", value: "12.5 kHz / 25 kHz alternable" },
      { label: "Tecnología de Transmisión", value: "Ranuras de tiempo dual TDMA (Doble comunicación por canal)" },
      { label: "Peso con Batería", value: "Solo 270g - Chasis ultrafino de alta maniobrabilidad" },
      { label: "Anuncios de Voz", value: "Confirmación auditiva automática al cambiar de canal operado" },
      { label: "Tipo de Batería", value: "Litio Premium libre de efecto memoria" }
    ],
    operatividad: [
      "Seguridad comercial y control de acceso en hoteles, predios e industrias del NOA.",
      "Coordinación de eventos corporativos, logística de bodegas y depósito.",
      "Comunicación inmediata de cuadrillas agrícolas en fincas tabacaleras de Salta."
    ],
    powerRequirement: "Batería recargable Slim Li-Ion con base de cuna rápida",
    price: "320 USD",
    availability: "in_stock",
    condition: "new",
    brand: "Motorola Solutions",
    googleProductCategory: "Electronics > Communications > Telephony > Two-Way Radios",
    mpn: "MOT-PORT-DEP250"
  },
  {
    id: "vx-80",
    sku: "MOT-PORT-VX80",
    title: "Motorola Vertex VX 80",
    tagline: "Herramienta de communication rentable, compacta y extremadamente discreta",
    category: "Conectividad",
    origin: "Equipos de Conectividad",
    industries: ["Turismo", "Logística", "Residencial"],
    description: "Una herramienta de comunicación sumamente rentable, compacta y discreta diseñada para usuarios que requieren facilidad de aprendizaje y operatividad inmediata. Su tamaño reducido permite integrarla con gran comodidad a cualquier chaleco, cinturón o bolsillo empresarial.",
    image: "/assets/images/vx_80.png",
    bulletPoints: [
      "Autonomía ejemplar de hasta 10 horas continuas de conversación activa.",
      "Anuncio de canal por voz: cambia canales de forma segura sin tener que mirar el frente del radio.",
      "Búsqueda normal y prioritaria de canales para interceptar comunicaciones críticas de inmediato.",
      "Instalación de frecuencias y encriptación simple configurable directamente vía PC software."
    ],
    techSpecs: [
      { label: "Capacidad de Frecuencias", value: "16 Canales analógicos de largo alcance" },
      { label: "Squelch Silenciador", value: "Control automático de ruido para evitar chasquidos molestos" },
      { label: "Autonomía Promedio", value: "Ciclo 5/5/90 de hasta 10 horas con batería provista" },
      { label: "Señalización", value: "CTCSS / DCS subtonos analógicos silenciosos" },
      { label: "Clonación Directa", value: "Copia rápida de programación entre múltiples equipos del mismo modelo" }
    ],
    operatividad: [
      "Hotelería, gastronomía y guiado de contingentes turísticos urbanos.",
      "Guardias de prevención y mantenimiento edilicio comercial.",
      "Operación en canteras de menor envergadura y logística de carga ligera."
    ],
    powerRequirement: "Batería NiMH / Li-Ion recargable",
    price: "195 USD",
    availability: "in_stock",
    condition: "new",
    brand: "Motorola Solutions",
    googleProductCategory: "Electronics > Communications > Telephony > Two-Way Radios",
    mpn: "MOT-PORT-VX80"
  },
  {
    id: "mototrbo-r7",
    sku: "MOT-PORT-R7-PREMIUM",
    title: "Motorola MOTOTRBO R7",
    tagline: "El radio del futuro: Audio revolucionario y robustez impenetrable para entornos hostiles",
    category: "Conectividad",
    origin: "Equipos de Conectividad",
    industries: ["Rural", "Logística"],
    description: "El MOTOTRBO R7 represents la cúspide de la tecnología en radios portátiles de dos vías. Diseñado con capacidades acústicas revolucionarias, proporciona una cancelación de ruido de dos micrófonos de vanguardia que asegura la recepción de mensajes claros aun parado junto al motor de un camión minero de gran porte.",
    image: "/assets/images/mototrbo_r7.png",
    bulletPoints: [
      "Supresión de Ruido de Micrófono Dual Adaptable líder en telecomunicaciones.",
      "Supresión Automática de Retroalimentación Acústica molesta al acercarse a otros radios.",
      "Audio Inteligente: Ajuste en tiempo real del volumen del parlante según el ruido ambiente.",
      "Carcasa hermética sumergible con certificación militar de grado extremo."
    ],
    techSpecs: [
      { label: "Grado de Hermeticidad", value: "IP68 (Sumergible hasta 2 metros por 2 horas continuas) e IP66" },
      { label: "Conectividad Integrada", value: "Wi-Fi 2.4/5 GHz, Bluetooth 5.2 de bajo consumo, GPS/GLONASS" },
      { label: "Duración de Batería", value: "Tecnología Impres de Litio inteligente con hasta 28 horas de duración" },
      { label: "Audio de Salida", value: "Parlante frontal con potencia sónica de 102 phons (claridad superior)" },
      { label: "Seguridad Digital", value: "Encriptación de datos por aire provista nativamente" },
      { label: "Teclado y Pantalla", value: "Modelos disponibles con pantalla LCD transflectiva a color y teclado completo" }
    ],
    operatividad: [
      "Flotas de logística y exploración de suelos cordilleranos de Salta.",
      "Supervisores de producción industrial y petroquímicas con alta polución acústica.",
      "Esquemas de rescate de alta montaña y control de operaciones de seguridad de frontera."
    ],
    powerRequirement: "Batería Impres Inteligente de Litio con cargador de análisis dinámico",
    price: "1150 USD",
    availability: "in_stock",
    condition: "new",
    brand: "Motorola Solutions",
    googleProductCategory: "Electronics > Communications > Telephony > Two-Way Radios",
    mpn: "MOT-PORT-R7-PREMIUM"
  },
  {
    id: "mototrbo-dem300-400",
    sku: "MOT-BASE-DEM3400",
    title: "Motorola MOTOTRBO DEM 300 - 400",
    tagline: "Comunicaciones vehiculares robustas con potencia y claridad de transmisión",
    category: "Conectividad",
    origin: "Equipos de Conectividad",
    industries: ["Rural", "Logística", "Turismo"],
    description: "Equipos móviles vehiculares versátiles y sumamente potentes diseñados para operar de forma fija en flotas. Combinan de manera excelente lo mejor de las tecnologías analógicas y digitales, proporcionando llamadas nítidas en movimiento con una potencia de salida inigualable para quebradas andinas.",
    image: "/assets/images/mototrbo_dem_300_400.png",
    bulletPoints: [
      "Mayor cobertura de señal satelital/terrestre integrada en cabinas de camiones.",
      "Compatibilidad total con las funciones profesionales avanzadas del ecosistema MOTOTRBO.",
      "Capacidad de interrupción de transmisión activa para priorizar alertas y comunicaciones críticas.",
      "Parlante frontal extra fuerte de alta fidelidad que sobrepasa el ruido del motor vehicular."
    ],
    techSpecs: [
      { label: "Rango de Potencia", value: "1W - 25W - 45W ajustable de alta potencia constante" },
      { label: "Variantes de Display", value: "DEM 300 (Numérico de 2 dígitos) / DEM 400 (Alfanumérico claro)" },
      { label: "Cantidad de Canales", value: "Hasta 64 canales para segmentación por cuadrillas" },
      { label: "Chasis Metálico", value: "Gabinete blindado de aluminio inyectado de alta densidad" },
      { label: "Micrófono Provisto", value: "Micrófono de mano ergonómico con enganche vehicular" },
      { label: "Alimentación Nativa", value: "13.8V DC directa del sistema eléctrico de camioneta o base" }
    ],
    operatividad: [
      "Instalado en tablero de camionetas de servicio 4x4 circulando por el NOA.",
      "Camiones de transporte internacional cruzando el Paso de Sico y Jama.",
      "Estaciones repetidoras fijas en bases de obra transitorias y campamentos."
    ],
    powerRequirement: "13.8V DC (Soporta transitorios del alternador de vehículo)",
    price: "560 USD",
    availability: "in_stock",
    condition: "new",
    brand: "Motorola Solutions",
    googleProductCategory: "Electronics > Communications > Telephony > Two-Way Radios",
    mpn: "MOT-BASE-DEM3400"
  },
  {
    id: "serie-dgm-8000-5000",
    sku: "MOT-BASE-DGM8500",
    title: "Motorola Serie DGM 8000 - 5000",
    tagline: "Central móvil inteligente de voz y datos sin límites para flotas de alto valor",
    category: "Conectividad",
    origin: "Equipos de Conectividad",
    industries: ["Rural", "Logística"],
    description: "Estaciones móviles base de última tecnología que unifican de forma transparente voz, datos y comandos inalámbricos. Creadas para transformar drásticamente la seguridad, coordinación y eficiencia operacional de transportes logísticos pesados, choferes de logística valiosa y cuadrillas operativas críticas.",
    image: "/assets/images/serie_dgm_8000_5000.png",
    bulletPoints: [
      "Conectividad Bluetooth integrada para operar con auriculares de cabo inalámbricos cómodamente.",
      "Audio Inteligente vehicular: ajusta automáticamente el nivel del parlante compensando el motor térmico.",
      "Funciones avanzadas de datos que incluyen telemetría, mensajes de texto y posicionamiento satelital.",
      "Pantalla amplia a color con modo noche ideal para evitar cansancio ocular del chofer."
    ],
    techSpecs: [
      { label: "GPS Satelital", value: "Receptor de localización satelital de alta sensibilidad integrado" },
      { label: "Sincronización Inalámbrica", value: "Módulo Wi-Fi embebido para actualizaciones rápidas de firmware" },
      { label: "Pantalla del Radio", value: "LCD TFT a todo color de 4 líneas y alto brillo dinámico" },
      { label: "Protección Climática", value: "Hermeticidad IP54 contra polvo pesado y salpicaduras" },
      { label: "Audio Vehicular", value: "Tecnología de ganancia de audio adaptativa con reducción acústica" },
      { label: "Capacidad de Trabajo", value: "Hasta 1000 canales de almacenamiento de frecuencias" }
    ],
    operatividad: [
      "Unidades de caudales terrestres, camiones cisternas de combustible y químicos de litio.",
      "Consolas de despacho fijo en centros de monitoreo corporativo en Salta.",
      "Maquinaría pesada vial de apertura de rumbos cordilleranos."
    ],
    powerRequirement: "13.8V DC nominal en cable conector de fusibles",
    price: "855 USD",
    availability: "in_stock",
    condition: "new",
    brand: "Motorola Solutions",
    googleProductCategory: "Electronics > Communications > Telephony > Two-Way Radios",
    mpn: "MOT-BASE-DGM8500"
  },
  {
    id: "mototrbo-slr-5100",
    sku: "MOT-REP-SLR5100",
    title: "Repetidora Motorola SLR 5100",
    tagline: "Próxima generación en repetidores de alta eficiencia para cobertura ilimitada",
    category: "Conectividad",
    origin: "Equipos de Conectividad",
    industries: ["Rural", "Logística"],
    description: "La repetidora MOTOTRBO SLR 5100 representa una evolución total en infraestructura de radio enlaces de dos vías de alto rendimiento y confiabilidad ininterrumpida. Su diseño esbelto en módulo compacto de 1U de rack ha sido especialmente optimizado para shelters remotos en cerros con recursos de alimentación solar.",
    image: "/assets/images/mototrbo_slr_5100.png",
    bulletPoints: [
      "Altamente Adaptable: soporte de sitios convencionales, IP Site Connect, Capacidad Plus, Max o Connect Plus.",
      "Máxima Confiabilidad Operativa: ciclo de trabajo continuo del 100% a 50W de potencia radial.",
      "Bajísimo Consumo Energético gracias a un amplificador de transmisor ultra eficiente.",
      "Cargador auxiliar de flote de batería con conmutación instantánea ante cortes de corriente externa."
    ],
    techSpecs: [
      { label: "Ciclo de Trabajo", value: "100% Continuo (Full Duty Cycle) sin recalentamiento" },
      { label: "Montaje Físico", value: "Altura de 1U de Rack estándar de 19 pulgadas" },
      { label: "Potencia de RF", value: "Regulable de 1W a 50W estables en salida de antena" },
      { label: "Puertos de Red", value: "Ethernet LAN dual con soporte dinámico de IP" },
      { label: "Frecuencia de Repetición", value: "Modelos VHF (136-174 MHz) / UHF (400-470 MHz)" },
      { label: "Diagnóstico Remoto", value: "Monitoreo completo a distancia vía SNMP y software RDAC" }
    ],
    operatividad: [
      "Instalación en cumbres elevadas para dar cobertura a toda una cuenca de valles andinos.",
      "Nodo repetidor de red troncal para camionetas de seguridad en autopistas serranas.",
      "Infraestructura fija en campamentos principales de obras civiles hidroeléctricas."
    ],
    powerRequirement: "100-240V AC / 11-15.5V DC conmutador cargador automático integrado",
    price: "2450 USD",
    availability: "in_stock",
    condition: "new",
    brand: "Motorola Solutions",
    googleProductCategory: "Electronics > Communications > Telephony > Fixed Radio Systems",
    mpn: "MOT-REP-SLR5100"
  },
  {
    id: "mototrbo-dep-500-discontinued",
    sku: "MOT-DISC-DEP500",
    title: "Motorola MOTOTRBO DEP 500",
    tagline: "Clásico Discontinuado – Excelente calidad de audio y escalabilidad digital",
    category: "Conectividad",
    origin: "Equipos de Conectividad",
    industries: ["Rural", "Logística", "Turismo"],
    description: "Una estación portátil clásica que ofrecía una solución excelente y escalable con gran sonido. Motorola Solutions ha descontinuado la fabricación oficial de este equipo y sus accesorios principales. En Servidor Satelital ofrecemos el soporte de reparación remota y la migración al flamante sustituto homologado MOTOTRBO R2.",
    image: "/assets/images/mototrbo_dep_500.png",
    bulletPoints: [
      "Excelente fidelidad acústica icónica de la serie original DEP.",
      "Soporte mixto de flotas analógicas y digitales heredadas.",
      "Repuestos, carcasas y baterías disponibles para mantenimiento preventivo en Salta.",
      "Reemplazo Directo Recomendado: MOTOTRBO R2 (Disponible para entrega inmediata)."
    ],
    techSpecs: [
      { label: "Estado Oficial", value: "DISCONTINUADO - Consultar por plan canje/reemplazo" },
      { label: "Reemplazo de Línea", value: "Motorola MOTOTRBO R2" },
      { label: "Servicios Disponibles", value: "Soporte oficial, calibración de frecuencia y baterías nuevas" },
      { label: "Uso Sugerido actual", value: "Migrar paulatinamente las cuadrillas de trabajo a equipos R2" }
    ],
    operatividad: [
      "Soporte técnico y recambio de baterías para yacimientos con stock de DEP 500.",
      "Reacondicionamiento de flotas heredadas en cooperativas de servicios del NOA."
    ],
    powerRequirement: "Soporta baterías Impres originales de recambio",
    price: "Consultar Reemplazo",
    availability: "preorder",
    condition: "refurbished",
    brand: "Motorola Solutions",
    googleProductCategory: "Electronics > Communications > Telephony > Two-Way Radios",
    mpn: "MOT-DISC-DEP500",
    isDiscontinued: true
  },
  {
    id: "ep-350-mx-discontinued",
    sku: "MOT-DISC-EP350",
    title: "Motorola EP 350 MX",
    tagline: "Clásico Discontinuado – Modelo analógico económico, ultraligero y muy confiable",
    category: "Conectividad",
    origin: "Equipos de Conectividad",
    industries: ["Turismo", "Logística", "Residencial"],
    description: "El modelo analógico económico y ultra compacto por excelencia, con variante con teclado alfanumérico completo y pantalla. Hoy en día totalmente fuera de producción. Ofrecemos el servicio técnico multimarca a medida de su flota histórica y recomendamos la conmutación al moderno MOTOTRBO DEP 250.",
    image: "/assets/images/ep_350_mx.png",
    bulletPoints: [
      "Gabinete clásico robusto muy fácil de manipular y cargar.",
      "Baterías de recambio y laboratorios de reprogramación locales en Salta.",
      "Excelente resistencia heredada contra frentes fríos en valles.",
      "Reemplazo Directo Sugerido: MOTOTRBO DEP 250 (Inversión digital a costo accesible)."
    ],
    techSpecs: [
      { label: "Estado del Modelo", value: "DISCONTINUADO - Fuera de producción por el fabricante" },
      { label: "Sustituto Oficial", value: "Motorola MOTOTRBO DEP 250 Digital" },
      { label: "Soporte de Jorge S.", value: "Alineamiento de portadoras, reprogramación de canales analógicos" },
      { label: "Batería de Recambio", value: "Alternativas homologadas de Li-Ion 1500 mAh" }
    ],
    operatividad: [
      "Mantenimiento de cuadrillas remolcadoras, depósitos y turismo en Salta."
    ],
    powerRequirement: "Fuera de producción - Cargadores y repuestos bajo stock previo",
    price: "Consultar Reemplazo",
    availability: "preorder",
    condition: "refurbished",
    brand: "Motorola Solutions",
    googleProductCategory: "Electronics > Communications > Telephony > Two-Way Radios",
    mpn: "MOT-DISC-EP350",
    isDiscontinued: true
  },
  {
    id: "mototrbo-dep-450-discontinued",
    sku: "MOT-DISC-DEP450",
    title: "Motorola MOTOTRBO DEP 450",
    tagline: "Caballo de Batalla Discontinuado – Ícono de durabilidad en obras y campos",
    category: "Conectividad",
    origin: "Equipos de Conectividad",
    industries: ["Rural", "Logística", "Turismo"],
    description: "Posiblemente el radio DMR de nivel de entrada más buscado de la última década en Google por contratistas de obra y geólogos. Destacado por su rigidez absoluta. Sigue gozando de gran caudal de búsquedas pero ha sido descatalogado oficialmente. Ofrecemos cotización especial para la renovación tecnológica directa por el R2.",
    image: "/assets/images/mototrbo_dep_450.png",
    bulletPoints: [
      "Rigidez total de carcasa que resiste golpes de caídas sobre piedras de canteras.",
      "Compatibilidad dual analógico/digital para transición gradual de su flota.",
      "Disponibilidad de baterías de repuesto y fundas protectoras en Salta Capital.",
      "Sustituto directo recomendado de fábrica: Motorola MOTOTRBO R2."
    ],
    techSpecs: [
      { label: "Estado de Venta", value: "DISCONTINUADO - Remanentes o Plan Canje activo" },
      { label: "Línea de Reemplazo", value: "Motorola MOTOTRBO R2" },
      { label: "Batería de Soporte", value: "NiMH y Li-Ion con conector de cuna DEP estándar de Motorola" },
      { label: "Laboratorio Técnico", value: "Calibración, reprogramación de subtonos y reparación en el NOA" }
    ],
    operatividad: [
      "Canje corporativo para flotas de camiones o cuadrillas con radios DEP 450 antiguos.",
      "Calibración y mantenimiento de seguridad y telecomunicación para contratistas subcontratados."
    ],
    powerRequirement: "Soporta cargadores rápidos clásicos de Motorola",
    price: "Consultar Reemplazo",
    availability: "preorder",
    condition: "refurbished",
    brand: "Motorola Solutions",
    googleProductCategory: "Electronics > Communications > Telephony > Two-Way Radios",
    mpn: "MOT-DISC-DEP450",
    isDiscontinued: true
  },
  {
    id: "dgp-8000e-5000e-discontinued",
    sku: "MOT-DISC-DGP8000E",
    title: "Motorola Serie DGP 8000e - 5000e",
    tagline: "Premium Discontinuado – Radios DMR avanzados con Wi-Fi, ubicación y Bluetooth",
    category: "Conectividad",
    origin: "Equipos de Conectividad",
    industries: ["Rural", "Logística"],
    description: "Radios portátiles DMR de próxima generación con Wi-Fi integrado, rastreo satelital interno/externo y Bluetooth corporativo. Al estar discontinuados por Motorola, todo el universo tecnológico de esta gama premium ha sido consolidado en el revolucionario MOTOTRBO R7, que ya tenemos en entrega inmediata.",
    image: "/assets/images/series_dgp_8000e_5000e.png",
    bulletPoints: [
      "Módulo de datos Bluetooth integral para sincronizar telemetría de chofer.",
      "Servicio de rastreo satelital para control del operario en mapas de consola central.",
      "Baterías, clips de enganche, perillas y carcasas de recambio en nuestro depósito en Salta.",
      "Reemplazo Directo Premium: Motorola MOTOTRBO R7 (Con capacidades acústicas superiores)."
    ],
    techSpecs: [
      { label: "Estado del Producto", value: "DISCONTINUADO - Consulte por el modelo R7" },
      { label: "Modelo Sucesor", value: "Motorola MOTOTRBO R7 (Recomendado)" },
      { label: "Accesorios Existentes", value: "Micrófonos de solapa, auriculares de seguridad de repuesto" },
      { label: "Configurador local", value: "Conversión de base de datos de canales de DGP a perfiles R7" }
    ],
    operatividad: [
      "Ingeniería de recambio tecnológico llave en mano para operaciones de altura avanzadas.",
      "Actualización de flotas de radiocomunicación corporativas de alta seguridad en el NOA."
    ],
    powerRequirement: "Accesorios y baterías Impres con stock continuo en Salta",
    price: "Consultar Reemplazo",
    availability: "preorder",
    condition: "refurbished",
    brand: "Motorola Solutions",
    googleProductCategory: "Electronics > Communications > Telephony > Two-Way Radios",
    mpn: "MOT-DISC-DGP8000E",
    isDiscontinued: true
  }
];

