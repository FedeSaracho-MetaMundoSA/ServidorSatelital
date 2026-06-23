import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import KitStarlink from './components/KitStarlink';
import Products from './components/Products';
import Sectors from './components/Sectors';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Preloader from './components/Preloader';
import ErrorBoundary from './components/ErrorBoundary';
import EarthCanvas from './components/EarthCanvas';
import ScrollFadeReveal from './components/ScrollFadeReveal';
import WhatsAppModal from './components/WhatsAppModal';
import ClientTagCloud from './components/ClientTagCloud';
import { AnimatePresence, motion } from 'motion/react';
import { 
  ArrowLeft, 
  ExternalLink, 
  ShoppingBag, 
  Mail, 
  ShieldCheck, 
  CreditCard, 
  CheckCircle, 
  MapPin, 
  PhoneCall, 
  Calendar,
  MessageSquare,
  Sparkles
} from 'lucide-react';

declare global {
  interface Window {
    openWhatsAppSelector?: (preselectedCategory?: string) => void;
  }
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('inicio');
  const [isPastHero, setIsPastHero] = useState(false);

  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [whatsAppInitialCategory, setWhatsAppInitialCategory] = useState<string | undefined>(undefined);

  // Advanced client-side routing state for dedicated subpages (/Market, /contacto)
  const [currentRoute, setCurrentRoute] = useState<'home' | 'market' | 'contacto'>(() => {
    try {
      const hash = window.location.hash.toLowerCase();
      // If we load with a landing page section hash, we must render the homepage
      const landingHashes = ['#inicio', '#institucional', '#starlink', '#sectores', '#trayectoria', '#productos', '#servicios', '#contacto'];
      if (landingHashes.includes(hash)) return 'home';

      if (hash === '#market' || hash === '#/market') return 'market';
      if (hash === '#contacto' || hash === '#/contacto') return 'contacto';

      const searchParams = new URLSearchParams(window.location.search);
      const pageParam = searchParams.get('page');
      if (pageParam === 'market') return 'market';
      if (pageParam === 'contacto') return 'contacto';

      let rawPath = window.location.pathname.toLowerCase();
      if (rawPath.endsWith('/')) rawPath = rawPath.slice(0, -1);
      
      if (rawPath === '/market') return 'market';
      if (rawPath === '/contacto') return 'contacto';
    } catch (e) {
      console.warn("Failed to safely read current path, defaulting to home:", e);
    }
    return 'home';
  });

  // Listen to popstate and hashchange for fluid browser forward/backward buttons
  useEffect(() => {
    const handleLocationChange = () => {
      try {
        const hash = window.location.hash.toLowerCase();
        
        // Auto-switch to home if we navigate to a landing page section anchor
        const landingHashes = ['#inicio', '#institucional', '#starlink', '#sectores', '#trayectoria', '#productos', '#servicios', '#contacto'];
        if (landingHashes.includes(hash) || hash === '') {
          setCurrentRoute('home');
          // Give React a frame to mount and scroll
          setTimeout(() => {
            const elId = hash.replace('#', '') || 'inicio';
            const el = document.getElementById(elId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 60);
          return;
        }

        if (hash === '#market' || hash === '#/market') {
          setCurrentRoute('market');
          return;
        }
        if (hash === '#contacto' || hash === '#/contacto') {
          setCurrentRoute('contacto');
          return;
        }

        const searchParams = new URLSearchParams(window.location.search);
        const pageParam = searchParams.get('page');
        if (pageParam === 'market') {
          setCurrentRoute('market');
          return;
        }
        if (pageParam === 'contacto') {
          setCurrentRoute('contacto');
          return;
        }

        let rawPath = window.location.pathname.toLowerCase();
        if (rawPath.endsWith('/')) rawPath = rawPath.slice(0, -1);
        if (rawPath === '/market') {
          setCurrentRoute('market');
        } else if (rawPath === '/contacto') {
          setCurrentRoute('contacto');
        } else {
          setCurrentRoute('home');
        }
      } catch (e) {
        console.warn("Error resolving path on hook:", e);
      }
    };
    window.addEventListener('popstate', handleLocationChange, { passive: true });
    window.addEventListener('hashchange', handleLocationChange, { passive: true });

    // Patch history pushState to catch programmatic changes cleanly
    let originalPush: any;
    try {
      originalPush = window.history.pushState;
      window.history.pushState = function(...args) {
        try {
          if (originalPush) {
            originalPush.apply(this, args);
          }
        } catch (err) {
          console.warn("History pushState restricted by browser/iframe security. Using state-only routing routing:", err);
        }
        handleLocationChange();
      };
    } catch (e) {
      console.warn("Cannot patch history.pushState:", e);
    }

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
      try {
        if (originalPush) {
          window.history.pushState = originalPush;
        }
      } catch (e) {
        console.warn("Cannot restore pushState:", e);
      }
    };
  }, []);

  const navigateTo = (route: 'home' | 'market' | 'contacto', hash?: string) => {
    const path = route === 'market' ? '/Market' : (route === 'contacto' ? '/contacto' : '/');
    
    try {
      window.history.pushState(null, '', path + (hash || ''));
    } catch (e) {
      console.warn("History pushState is restricted in this session. Falling back to state + hash parameters:", e);
      try {
        if (route !== 'home') {
          window.location.hash = `#${route}`;
        } else {
          window.location.hash = hash || '#inicio';
        }
      } catch (err) {
        console.warn("Failed to set window location hash fallback:", err);
      }
    }
    
    setCurrentRoute(route);
    
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setTimeout(() => {
        const el = document.getElementById(hash.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  useEffect(() => {
    window.openWhatsAppSelector = (category?: string) => {
      setWhatsAppInitialCategory(category);
      setIsWhatsAppOpen(true);
    };
    return () => {
      window.openWhatsAppSelector = undefined;
    };
  }, []);

  // Single IntersectionObserver for landing page section tracking
  useEffect(() => {
    if (loading || currentRoute !== 'home') return;

    const sections = ['inicio', 'institucional', 'starlink', 'sectores', 'trayectoria', 'productos', 'servicios', 'contacto'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-35% 0px -40% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [loading, currentRoute]);

  // Global scroll tracker for background transparency
  useEffect(() => {
    if (loading) return;

    const handleGlobalScroll = () => {
      const scrollY = window.scrollY !== undefined 
        ? window.scrollY 
        : (window.pageYOffset !== undefined 
            ? window.pageYOffset 
            : ((document.documentElement || document.body.parentNode || document.body) as HTMLElement).scrollTop);
            
      const vh = window.innerHeight;
      const heroScrollHeight = vh * 0.9;

      const progress = Math.max(0, Math.min(1, scrollY / (heroScrollHeight || 1)));
      setScrollProgress(progress);

      setIsPastHero(scrollY > heroScrollHeight);
    };

    window.addEventListener('scroll', handleGlobalScroll, { passive: true });
    handleGlobalScroll();
    return () => window.removeEventListener('scroll', handleGlobalScroll);
  }, [loading]);

  const simplePreloaderFallback = (
    <div className="fixed inset-0 z-[9999] bg-[#06080c] flex flex-col justify-center items-center text-center p-8">
      <div className="absolute inset-0 bg-[radial-gradient(#FF5665_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      <div className="mb-6 w-16 h-16 border-4 border-t-[#FF5665] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
      <h1 className="text-2xl font-display font-extrabold text-white tracking-widest uppercase mb-2 animate-pulse">
        Servidor Satelital
      </h1>
      <p className="text-gray-400 font-mono text-xs uppercase tracking-widest">
        Estableciendo enlace de reserva 2D...
      </p>
      <button 
        onClick={() => setLoading(false)}
        className="mt-8 px-6 py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-mono text-xs rounded transition-all cursor-pointer"
      >
        SALTAR AL PORTAL
      </button>
    </div>
  );

  return (
    <>
      <AnimatePresence>
        {loading && (
          <ErrorBoundary fallback={
            <div className="fixed inset-0 z-[9999] bg-[#06080c]">
              {simplePreloaderFallback}
            </div>
          }>
            <Preloader onComplete={() => setLoading(false)} />
          </ErrorBoundary>
        )}
      </AnimatePresence>
      
      {!loading && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="bg-bg-base text-white min-h-screen selection:bg-[#FF5665]/30 selection:text-[#FF5665] font-sans relative w-full overflow-x-hidden"
        >
          {/* Universal Galactic Map/Earth Environment */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <ErrorBoundary fallback={<div className="absolute inset-0 bg-[#06080c]" />}>
              <EarthCanvas activeSection={currentRoute === 'home' ? activeSection : 'productos'} scrollProgress={scrollProgress} />
            </ErrorBoundary>
            <div 
              className="absolute inset-0 bg-[#040608] transition-all duration-700 ease-out pointer-events-none"
              style={{ 
                opacity: currentRoute !== 'home' || isPastHero ? 0.88 : 0.35
              }} 
            />
          </div>

          {/* STANDALONE ROUTE: MARKETPAGE DEDICATED LAYOUT */}
          {currentRoute === 'market' && (
            <div className="relative z-10 min-h-screen flex flex-col justify-between">
              
              {/* Standalone Nav header */}
              <nav className="sticky top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-3xl border-b border-white/10 py-4 px-6">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => navigateTo('home')}
                      className="px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono font-bold flex items-center gap-2 cursor-pointer transition-all focus:outline-none"
                    >
                      <ArrowLeft size={14} />
                      <span className="hidden sm:inline">Volver al Inicio</span>
                    </button>
                    <span className="h-6 w-[1px] bg-white/10 hidden sm:block" />
                    <span className="text-sm font-display font-black tracking-widest text-[#FF5665] uppercase">
                      📡 SERVIDOR SATELITAL
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => navigateTo('contacto')}
                      className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#06080c] text-xs font-mono font-black shadow-md transition-all cursor-pointer"
                    >
                      Canal de Contacto
                    </button>
                  </div>
                </div>
              </nav>

              {/* Subpage Hero banner */}
              <div className="bg-gradient-to-b from-[#0b0e14] to-transparent py-14 border-b border-white/5 text-center px-4">
                <div className="max-w-3xl mx-auto space-y-4">
                  <span className="inline-flex items-center gap-1 bg-[#FF5665]/10 border border-[#FF5665]/20 px-3 py-1 rounded-full text-[9px] font-mono text-[#FF5665] font-extrabold tracking-widest uppercase">
                    <ShoppingBag size={10} />
                    CATÁLOGO OFICIAL DE EQUIPAMIENTO
                  </span>
                  <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight text-white uppercase">
                    Portal de Hardware
                  </h1>
                  <p className="text-gray-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
                    Explore nuestro catálogo especializado para logística, turismo aventura, hogares y campos rurales del NOA con repuestos oficiales, soportes imantados y conversores de potencia directa.
                  </p>
                </div>
              </div>

              {/* Core catalog component */}
              <main className="flex-grow">
                <Products />
              </main>

              {/* Mercado Pago payment assurance banner */}
              <div className="bg-[#0b0e14] border-t border-b border-white/5 py-12 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                  <div className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="p-3 rounded-xl bg-[#009EE3]/15 text-[#009EE3] shrink-0 h-11 w-11 flex items-center justify-center">
                      <CreditCard size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">CRÉDITO Y MERCADO PAGO</h4>
                      <p className="text-xs text-gray-400 mt-1.5 leading-relaxed font-light">
                        Aceptamos Mercado Pago, tarjetas corporativas y pasarelas de pago con acreditación instantánea.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-400 shrink-0 h-11 w-11 flex items-center justify-center">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">CHEQUES DE PAGO DIFERIDO</h4>
                      <p className="text-xs text-gray-400 mt-1.5 leading-relaxed font-light">
                        Facilidades financieras comerciales mediante Cheques de Pago Diferido (eCheqs) previa validación crediticia.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="p-3 rounded-xl bg-rose-500/15 text-[#FF5665] shrink-0 h-11 w-11 flex items-center justify-center">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">INGENIERÍA SALTEÑA APORTADA</h4>
                      <p className="text-xs text-gray-400 mt-1.5 leading-relaxed font-light">
                        Soportes forjados localmente y equipos testeados a más de 4000 MSNM con soporte de emergencia 24hs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simplified footer */}
              <footer className="bg-black py-8 border-t border-white/10 text-center text-xs text-gray-500 font-mono">
                <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <span>© 2026 Servidor Satelital. Todos los derechos reservados.</span>
                  <div className="flex gap-4 text-gray-400">
                    <button onClick={() => navigateTo('home')} className="hover:text-white cursor-pointer select-none">Web Principal</button>
                    <span>|</span>
                    <button onClick={() => navigateTo('contacto')} className="hover:text-white cursor-pointer select-none">Contacto Directo</button>
                  </div>
                </div>
              </footer>
            </div>
          )}

          {/* STANDALONE ROUTE: DEDICATED CONTACT FORM LAYOUT */}
          {currentRoute === 'contacto' && (
            <div className="relative z-10 min-h-screen flex flex-col justify-between">
              
              {/* Standalone Nav header */}
              <nav className="sticky top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-3xl border-b border-white/10 py-4 px-6">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => navigateTo('home')}
                      className="px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono font-bold flex items-center gap-2 cursor-pointer transition-all focus:outline-none"
                    >
                      <ArrowLeft size={14} />
                      <span className="hidden sm:inline">Volver al Inicio</span>
                    </button>
                    <span className="h-6 w-[1px] bg-white/10 hidden sm:block" />
                    <span className="text-sm font-display font-black tracking-widest text-[#FF5665] uppercase">
                      📡 SERVIDOR SATELITAL
                    </span>
                  </div>
                  <div>
                    <button
                      onClick={() => navigateTo('market')}
                      className="px-4 py-2 rounded-xl bg-[#FF5665] hover:bg-rose-500 text-black text-xs font-mono font-bold shadow-md transition-all cursor-pointer"
                    >
                      Catálogo de Equipamiento
                    </button>
                  </div>
                </div>
              </nav>

              {/* Subpage content */}
              <main className="flex-grow py-12">
                <div className="max-w-4xl mx-auto px-6 text-center mb-8">
                  <span className="inline-flex items-center gap-1 bg-[#FF5665]/10 border border-[#FF5665]/20 px-3 py-1 rounded-full text-[9px] font-mono text-[#FF5665] font-extrabold tracking-widest uppercase mb-3">
                    <Mail size={10} />
                    CENTRO DE INGENIERÍA & DESPACHO DIRECTO
                  </span>
                  <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight text-white uppercase">
                    Contacto Corporativo
                  </h1>
                  <p className="text-gray-400 text-sm max-w-xl mx-auto font-light leading-relaxed mt-2">
                    Envíe su pliego de licitación o solicite asesoramiento técnico de alta fidelidad. Nuestro equipo técnico responderá inmediatamente por correo o WhatsApp.
                  </p>
                </div>

                {/* Core contact module */}
                <Contact />

                {/* High quality corporate location details */}
                <div className="max-w-3xl mx-auto px-6 mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                  <div className="p-5 bg-[#0b0e14]/80 border border-white/10 rounded-2xl flex flex-col justify-between space-y-4">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 w-10 h-10 flex items-center justify-center shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">OFICINA SALTA</h4>
                      <p className="text-[11px] text-gray-400 mt-1 lines-clamp-2">
                        Salta Capital, República Argentina. Centro de ensamble y despacho al NOA.
                      </p>
                    </div>
                  </div>
                  <div className="p-5 bg-[#0b0e14]/80 border border-white/10 rounded-2xl flex flex-col justify-between space-y-4">
                    <div className="p-2.5 rounded-xl bg-[#FF5665]/10 text-[#FF5665] w-10 h-10 flex items-center justify-center shrink-0">
                      <PhoneCall size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">DIRECCIÓN TÉCNICA</h4>
                      <p className="text-[11px] text-gray-400 mt-1">
                        José Luis Sarachu (CTO)<br />
                        <span className="text-[#FF5665] font-bold font-mono">+54 9 387 584-3438</span>
                      </p>
                    </div>
                  </div>
                  <div className="p-5 bg-[#0b0e14]/80 border border-white/10 rounded-2xl flex flex-col justify-between space-y-4">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 w-10 h-10 flex items-center justify-center shrink-0">
                      <Calendar size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">SOPORTE EN CAMPO</h4>
                      <p className="text-[11px] text-gray-400 mt-1">
                        SLA de contingencia las 24 horas y soporte técnico inmediato en toda la provincia.
                      </p>
                    </div>
                  </div>
                </div>
              </main>

              {/* Simplified footer */}
              <footer className="bg-black py-8 border-t border-white/10 text-center text-xs text-gray-500 font-mono">
                <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <span>© 2026 Servidor Satelital. Todos los derechos reservados.</span>
                  <div className="flex gap-4 text-gray-400">
                    <button onClick={() => navigateTo('home')} className="hover:text-white cursor-pointer select-none">Web Principal</button>
                    <span>|</span>
                    <button onClick={() => navigateTo('market')} className="hover:text-white cursor-pointer select-none">Mercado Catálogo</button>
                  </div>
                </div>
              </footer>
            </div>
          )}

          {/* LANDING PAGE ROUTE: SPATIAL CONTINUOUS SCROLLING ENVIRONMENT */}
          {currentRoute === 'home' && (
            <>
              <Navbar activeTab={activeSection} />
              
              {/* Marketing Promotion Header Alert: direct navigation option */}
              <div className="fixed bottom-6 left-6 z-40 hidden lg:flex flex-col gap-2 items-start bg-black/85 backdrop-blur-3xl border border-[#FF5665]/30 rounded-2xl p-4 shadow-[0_15px_35px_rgba(0,0,0,0.8)] max-w-sm">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[9px] font-mono tracking-widest text-[#FF5665] font-extrabold uppercase">
                    ATENCIÓN CORPORATIVA
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white font-sans mt-1">
                  ¿Deseas acceder al catálogo interactivo de hardware?
                </h4>
                <p className="text-[10px] text-gray-400 leading-relaxed font-light">
                  Abre las soluciones comerciales en una sección independiente y accede a la descarga de pliegos y especificaciones técnicas.
                </p>
                <div className="flex gap-2 w-full pt-1.5">
                  <button 
                    onClick={() => navigateTo('market')}
                    className="flex-1 py-1.5 px-3 bg-[#FF5665] hover:bg-rose-500 rounded-lg text-[9px] font-mono font-extrabold text-black flex items-center justify-center gap-1 cursor-pointer transition-all uppercase"
                  >
                    <span>Ver Catálogo</span>
                    <ExternalLink size={10} />
                  </button>
                  <button 
                    onClick={() => navigateTo('contacto')}
                    className="flex-1 py-1.5 px-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg text-[9px] font-mono text-white flex items-center justify-center gap-1 cursor-pointer transition-all uppercase"
                  >
                    <span>Cent. Contacto</span>
                  </button>
                </div>
              </div>

              <main className="relative z-10 overflow-x-hidden bg-transparent">
                {/* Hero Section */}
                <div id="inicio">
                  <Hero activeScene={0} scrollProgress={scrollProgress} />
                </div>
                
                {/* About / Institution Section */}
                <div id="institucional">
                  <ScrollFadeReveal>
                    <ErrorBoundary fallback={<div className="p-12 text-center bg-[#06080c]">Cargando sección Institucional...</div>}>
                      <About />
                    </ErrorBoundary>
                  </ScrollFadeReveal>
                </div>
                
                {/* Starlink Section */}
                <div id="starlink">
                  <ScrollFadeReveal>
                    <ErrorBoundary fallback={<div className="p-12 text-center bg-[#06080c]">Cargando sección Starlink...</div>}>
                      <KitStarlink />
                    </ErrorBoundary>
                  </ScrollFadeReveal>
                </div>
                
                {/* Sectors Section */}
                <div id="sectores">
                  <ScrollFadeReveal>
                    <ErrorBoundary fallback={<div className="p-12 text-center bg-[#06080c]">Cargando sección Sectores...</div>}>
                      <Sectors />
                    </ErrorBoundary>
                  </ScrollFadeReveal>
                </div>

                {/* 3D Clientes Cloud Section */}
                <div id="trayectoria">
                  <ScrollFadeReveal>
                    <ErrorBoundary fallback={<div className="p-12 text-center bg-[#06080c]">Cargando trayectoria de clientes...</div>}>
                      <ClientTagCloud />
                    </ErrorBoundary>
                  </ScrollFadeReveal>
                </div>


                
                {/* Products Section */}
                <div id="productos">
                  <ScrollFadeReveal>
                    <ErrorBoundary fallback={<div className="p-12 text-center bg-[#06080c]">Cargando Productos...</div>}>
                      <Products />
                    </ErrorBoundary>
                  </ScrollFadeReveal>
                </div>
                
                {/* Services Section */}
                <div id="servicios">
                  <ScrollFadeReveal>
                    <ErrorBoundary fallback={<div className="p-12 text-center bg-[#06080c]">Cargando Servicios...</div>}>
                      <Services />
                    </ErrorBoundary>
                  </ScrollFadeReveal>
                </div>
                
                {/* Contact Section */}
                <div id="contacto">
                  <ScrollFadeReveal>
                    <ErrorBoundary fallback={<div className="p-12 text-center bg-[#06080c]">Cargando Contacto...</div>}>
                      <Contact />
                    </ErrorBoundary>
                  </ScrollFadeReveal>
                </div>
              </main>
            </>
          )}

          <FloatingWhatsApp />
          <WhatsAppModal isOpen={isWhatsAppOpen} onClose={() => setIsWhatsAppOpen(false)} initialCategory={whatsAppInitialCategory} />
        </motion.div>
      )}
    </>
  );
}
