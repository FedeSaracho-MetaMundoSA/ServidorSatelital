import { motion, AnimatePresence } from 'motion/react';

interface EarthCanvasProps {
  activeSection: string;
  scrollProgress: number;
}

// Spectacular, authentic, extremely high-quality photography representing each section's scenario
export const backgroundScenes: Record<string, { image: string; title: string; subtitle: string; location: string }> = {
  inicio: {
    image: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=1600&auto=format&fit=crop",
    title: "VIAJES Y TURISMO",
    subtitle: "Conectividad satelital Starlink Mini en camionetas de travesía y turismo recorriendo caminos y parajes andinos de Salta.",
    location: "Caminos de Altura, Salta - 4000 msnm"
  },
  institucional: {
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1600&auto=format&fit=crop",
    title: "INGENIERÍA REGIONAL",
    subtitle: "Soporte local garantizado y obras civiles para mástiles autoportantes en el NOA, liderado por Jorge Alberto Sarapura.",
    location: "Valles Calchaquíes, Salta - Servicio Técnico VIP"
  },
  starlink: {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    title: "KIT STARLINK",
    subtitle: "Soluciones de internet satelital adaptadas a movilidad con alimentación de 12V-24V nativa y sujeción magnética de alta calidad.",
    location: "Ingeniería de Alimentación Vehicular Homologada"
  },
  sectores: {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
    title: "LOGÍSTICA ININTERRUMPIDA",
    subtitle: "Trazabilidad continua de flotas mediante conmutación inteligente, sistemas de cámaras DVR y seguimiento satelital 24/7.",
    location: "Ruta Nacional 40 - Conexión de Flotas Pesadas"
  },
  trayectoria: {
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1600&auto=format&fit=crop",
    title: "TRAYECTORIA DE SERVICIO",
    subtitle: "Consolidando enlaces y confianza técnica para empresas e instituciones públicas de toda la región del NOA.",
    location: "Infraestructura Homologada en Salta"
  },
  productos: {
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    title: "HARDWARE DE ALTA CALIDAD",
    subtitle: "Catálogo de radiocomunicación profesional, gabinetes exteriores robustos, soportes imantados de neodimio y mástiles.",
    location: "Infraestructura Física Aprobada e Importación Inmediata"
  },
  servicios: {
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1600&auto=format&fit=crop",
    title: "ENLACES Y ASISTENCIA",
    subtitle: "Sistemas inteligentes de failover celular/satelital y conectividad para despliegues móviles de emergencia y ambulancias.",
    location: "Zonas de Altura - Soporte Técnico para Emergencias"
  },
  contacto: {
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1600&auto=format&fit=crop",
    title: "CENTRO TECNOLÓGICO NOA",
    subtitle: "Consultoría directa e ingeniería de campo para presupuestos a medida de hogares, campos y comercios con soporte local.",
    location: "Sedes de Ingeniería en Salta Capital y Alrededores"
  }
};

export default function EarthCanvas({ activeSection, scrollProgress }: EarthCanvasProps) {
  // Graceful fallback helper in case activeSection is invalid
  const currentScene = backgroundScenes[activeSection] || backgroundScenes.inicio;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#040609]">
      
      {/* 1. SEAMLESS HARDWARE-ACCELERATED TRANSITIONS WITH ZERO RENDERING REFLOWS */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-1000 ease-in-out opacity-35"
        style={{ 
          backgroundImage: `url(${currentScene.image})`,
          transform: 'translateZ(0)' // Forces GPU acceleration
        }}
      />

      {/* Real-time Cinematic Digital HUD Overlay info tags in the background border */}
      <div className="absolute bottom-8 left-8 z-10 font-mono text-[9px] text-[#FF5665]/50 tracking-[0.15em] hidden sm:block uppercase">
        <span className="text-gray-600 mr-2">[COOR_SYS_ACTIVE]</span>
        <span>{currentScene.title} // LOCALIZACIÓN: {currentScene.location}</span>
      </div>

      {/* Premium ambient light grading and dark grain shadows */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#06080c] via-[#06080c]/60 to-[#06080c] z-[6] pointer-events-none" />
      <div className="absolute inset-0 bg-black/55 z-[6] pointer-events-none" />

    </div>
  );
}
