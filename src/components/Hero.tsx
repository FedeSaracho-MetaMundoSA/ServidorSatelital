import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mountain, Truck, ShieldAlert, Users, Compass, ChevronRight, Radio, ArrowRight, Activity, Shield, Award } from 'lucide-react';

interface Scene {
  id: number;
  category: string;
  title: string;
  description: string;
  solicitud: string;
  image: string;
  icon: any;
  bullet: string;
}

export default function Hero({ activeScene: parentActiveScene, scrollProgress }: { activeScene: number; scrollProgress: number }) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const scenes: Scene[] = [
    {
      id: 0,
      category: "VIAJES & CONECTIVIDAD 4X4",
      title: "CONECTIVIDAD EN VIAJES: TOYOTA HILUX CON STARLINK MINI",
      description: "Equipamos camionetas Toyota Hilux de viaje y aventura con soportes de neodimio de alta resistencia. Conexión satelital Starlink Mini en tiempo real atravesando caminos difíciles, vientos andinos y parajes de montaña en el NOA.",
      solicitud: "camionetas y vehículos de turismo conectados permanentemente",
      image: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=1600&auto=format&fit=crop",
      icon: Mountain,
      bullet: "Hilux 4x4 + Starlink Mini"
    },
    {
      id: 1,
      category: "LOGÍSTICA PESADA & SEGURIDAD",
      title: "TRAZABILIDAD NOCTURNA Y CCTV INTELIGENTE EN CABINA SCANIA",
      description: "Sistemas DVR y cámaras de alta definición instaladas en la cabina de choferes profesionales para grabaciones 24/7 sin puntos ciegos. Sistema GPS híbrido con conmutación dinámica satelital para logística pesada y camiones en ruta.",
      solicitud: "camiones con cabina gps satelital y cctv activo",
      image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1600&auto=format&fit=crop",
      icon: Truck,
      bullet: "Cámara DVR + Localizador Satelital"
    },
    {
      id: 2,
      category: "EMERGENCIAS & DESIERTO",
      title: "BASE MÉDICA DE CAMPAÑA Y SALUD REMOTA EN LA CORDILLERA",
      description: "Despliegue táctico de internet portátil en situaciones críticas de rescate andino. Enlace conmutado de bajo retardo y telefonía satelital redundante para dotaciones de paramédicos y ambulancias operando en el desierto.",
      solicitud: "empresas de paramedicos con bases remotas en alta montaña",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600&auto=format&fit=crop",
      icon: ShieldAlert,
      bullet: "Paramédicos + Red Crítica de Alerta"
    },
    {
      id: 3,
      category: "GENTE DEL CAMPO CONECTADA",
      title: "ARRAIGO PRODUCTIVO E INCLUSIÓN DIGITAL RURAL EN SALTA",
      description: "Llevamos internet satelital de alta velocidad a parajes desconectados del campo. Productores, ganaderos y familias rurales acceden instantáneamente a educación digital, facturación de guías agropecuarias y videollamadas fluidas.",
      solicitud: "Productores rurales conectados en el norte argentino",
      image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?q=80&w=1600&auto=format&fit=crop",
      icon: Users,
      bullet: "Estaciones Rurales Conectadas"
    },
    {
      id: 4,
      category: "CARAVANAS EN MOVIMIENTO",
      title: "DIRECCIÓN DE FLOTAS Y TRANSPORTE ADVENTURE EN CARAVANA",
      description: "Soporte unificado de datos para colectivos de pasajeros, camionetas de apoyo y turismo de aventura. Kit Starlink Mini con convertidores nativos a 12V/24V, manteniendo la señal activa y de alta velocidad en pleno movimiento por rutas del NOA.",
      solicitud: "vehiculos de viajes y convoys de alta disponibilidad",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
      icon: Compass,
      bullet: "Flota NOA + Datos Integrados"
    }
  ];

  // Auto-play interval for background slideshow
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % scenes.length);
    }, 8500);
    return () => clearInterval(slideTimer);
  }, []);

  const currentScene = scenes[activeTab];

  const handleContactWhatsApp = (scenario: string) => {
    const text = encodeURIComponent(`Hola Servidor Satelital, estuve explorando el escenario técnico de conectividad: "${scenario}" y me interesa recibir una cotización a medida.`);
    window.open(`https://wa.me/5493875843438?text=${text}`, '_blank');
  };

  return (
    <div className="relative min-h-screen w-full bg-[#040609] overflow-hidden flex flex-col justify-between">
      
      {/* 1. SEAMLESS SLIDESHOW BACKGROUND TRANSITION */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center brightness-[0.22] contrast-[1.1] saturate-[0.4]"
            style={{ backgroundImage: `url(${currentScene.image})` }}
          >
            {/* Darker high-contrast gradient overlays for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-[#040609]/75 to-[#040609]" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. MAJESTIC ABOVE-THE-FOLD COHESIVE GRID CONTAINER */}
      <div className="container mx-auto px-6 max-w-5xl relative z-10 pt-28 sm:pt-32 pb-12 flex flex-col justify-center flex-1">
        
        {/* Core Headline Box (100vh Desktop-first approach) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Headline Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF5665]/30 bg-[#FF5665]/10 text-[#FF5665] text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5665] animate-ping" />
              <span>SOPORTE LOCAL EN SALTA Y JUJUY</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight uppercase tracking-tight font-sans">
              Conectividad satelital para el <span className="text-gradient">NOA</span>
            </h1>
            
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-xl">
              Soportes magnéticos reforzados, ingeniería de alimentación 12V-24V de alta eficiencia y conexión de máxima velocidad para hogares, campos, turismo de aventura y parajes rurales.
            </p>

            {/* Above-the-fold primary CTAs with beautiful tactile physical 3D control response */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contacto"
                className="px-6 py-4 rounded-xl bg-[#FF5665] hover:bg-rose-500 text-[#040609] font-mono text-xs uppercase tracking-wider font-extrabold transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-[#FF5665]/15 cursor-pointer border-b-4 border-rose-700 hover:border-b-2 active:border-b-0 hover:-translate-y-0.5"
              >
                <span>Cotizar Mi Proyecto</span>
                <ArrowRight size={14} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#productos"
                className="px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 border-b-4 border-b-white/10 hover:border-b-2 active:border-b-0 hover:-translate-y-0.5"
              >
                <span>Ver Market (Productos)</span>
              </motion.a>
            </div>

            {/* B2B Technical Stats directly above the fold */}
            <div className="grid grid-cols-3 gap-4 pt-6 max-w-md border-t border-white/5 mt-6">
              <div className="space-y-1">
                <span className="text-white font-display font-bold text-lg sm:text-2xl block leading-none">+4.000m</span>
                <span className="text-[9px] font-mono uppercase tracking-wider text-gray-500 block">Altitud de Operación</span>
              </div>
              <div className="space-y-1 border-l border-white/10 pl-4">
                <span className="text-white font-display font-bold text-lg sm:text-2xl block leading-none">99.7%</span>
                <span className="text-[9px] font-mono uppercase tracking-wider text-gray-500 block">SLA contractual</span>
              </div>
              <div className="space-y-1 border-l border-white/10 pl-4">
                <span className="text-[#FF5665] font-display font-bold text-lg sm:text-2xl block leading-none">24 / 7</span>
                <span className="text-[9px] font-mono uppercase tracking-wider text-gray-500 block">Soporte VIP local</span>
              </div>
            </div>
          </div>

          {/* Interactive Case Scenario View Right Column */}
          <div className="lg:col-span-5">
            <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2.5xl p-5 sm:p-6 space-y-4">
              <span className="text-[9px] font-mono tracking-widest text-[#FF5665] font-bold uppercase block">
                [ESCENARIOS RESUELTOS EN EL NOA]
              </span>
              
              <div className="space-y-2">
                <span className="text-[8px] font-mono uppercase px-2 py-0.5 rounded bg-[#FF5665]/15 text-[#FF5665] border border-[#FF5665]/25 inline-block">
                  {currentScene.category}
                </span>
                <h3 className="text-sm sm:text-md font-bold text-white font-display uppercase tracking-tight">
                  {currentScene.title}
                </h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  {currentScene.description}
                </p>
              </div>

              {/* Slider selector dots */}
              <div className="flex gap-1.5 pt-1">
                {scenes.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className="h-1.5 rounded-full transition-all cursor-pointer w-2 bg-white/20 hover:bg-white/40"
                    style={{ width: activeTab === idx ? "24px" : "8px", backgroundColor: activeTab === idx ? "#FF5665" : "" }}
                    aria-label={`Ir al escenario ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Actions for current selected scenario */}
              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleContactWhatsApp(currentScene.title)}
                  className="w-full py-2.5 rounded-lg bg-white/5 hover:bg-[#FF5665] hover:text-[#040609] border border-white/10 hover:border-[#FF5665] text-white font-mono text-[10px] uppercase tracking-wider font-extrabold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border-b-4 border-b-white/5 hover:border-b-2 active:border-b-0"
                >
                  <Radio size={12} className="animate-pulse" /> Consultar por este caso
                </motion.button>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* 3. FOOTER-RIBBON BRAND TRUST INDICATOR */}
      <div className="container mx-auto px-6 max-w-5xl relative z-10 py-4 border-t border-white/5 flex flex-col sm:flex-row gap-4 justify-between items-center text-[9px] font-mono text-gray-500">
        <p className="flex items-center gap-1.5 uppercase">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF5665]" /> 
          EQUIPAMIENTO DE RADIOCOMUNICACIÓN Y SOPORTES HOMOLOGADOS DE DISEÑO LOCAL SALTEÑO
        </p>
      </div>

    </div>
  );
}
