import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Compass } from 'lucide-react';
import { useEffect, useState } from 'react';
import { CustomLogo } from './Logo';

export default function Navbar({ activeTab }: { activeTab: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Track scroll position to drop the navbar height and blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Nosotros', id: 'institucional' },
    { label: 'Soluciones', id: 'starlink' }, // Covers Sectores / Servicios as well
    { label: 'Clientes', id: 'trayectoria' },
    { label: 'Market (Productos)', id: 'productos' },
    { label: 'Contacto', id: 'contacto' }
  ];

  return (
    <>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-4 left-0 right-0 z-50 pointer-events-none flex justify-center px-4"
      >
        <header
          className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl px-4 sm:px-6 py-2.5 rounded-full border transition-all duration-500 bg-black/75 backdrop-blur-2xl
            ${isScrolled 
              ? 'border-[#FF5665]/25 shadow-[0_15px_40px_rgba(0,0,0,0.85)] py-2 bg-black/90' 
              : 'border-white/5 shadow-none'
            }
          `}
        >
          {/* Logo Section with official Servidor Satelital logo styling */}
          <a href="#inicio" className="flex items-center gap-1 group transform scale-90 sm:scale-95 origin-left">
            <CustomLogo className="w-24 sm:w-28 h-auto" />
          </a>

          {/* Desktop Navigation Links (reduced clear layout) */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              // Custom active computation as we reduced the count
              let isActive = activeTab === link.id;
              if (link.id === 'starlink' && (activeTab === 'sectores' || activeTab === 'servicios' || activeTab === 'starlink')) {
                isActive = true;
              }
              
              // Handle subpath routing back to homepage base cleanly
              const isHomePath = typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '');
              const linkHref = isHomePath ? `#${link.id}` : `/#${link.id}`;

              return (
                 <a
                  key={link.id}
                  href={linkHref}
                  className={`relative px-4 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all duration-300
                    ${isActive 
                      ? 'text-[#FF5665] font-bold' 
                      : 'text-gray-400 hover:text-white'
                    }
                  `}
                >
                  {/* Active capsule highlighter */}
                  {isActive && (
                    <span className="absolute inset-0 bg-[#FF5665]/10 border border-[#FF5665]/30 rounded-full -z-10 transition-all duration-300" />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>
          
          {/* Contact Direct Hot Button */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            <a
              href="#contacto"
              className="px-3 sm:px-4 py-1.5 rounded-full bg-[#FF5665] hover:bg-rose-500 text-[#06080c] text-[9px] sm:text-[10px] font-mono uppercase tracking-wider font-extrabold hover:brightness-110 transition-all duration-300 shadow-md shadow-[#FF5665]/10"
            >
              <span className="hidden sm:inline">COTIZAR PROYECTO</span>
              <span className="sm:hidden">COTIZAR</span>
            </a>

            {/* Mobile Menu Icon */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={14} /> : <Menu size={14} />}
            </button>
          </div>
        </header>
      </motion.div>

      {/* Mobile Menu Slide-down Screen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden p-5 bg-[#06080c]/98 backdrop-blur-3xl border border-[#FF5665]/20 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex flex-col gap-2.5"
          >
            {links.map((link) => {
              let isActive = activeTab === link.id;
              if (link.id === 'starlink' && (activeTab === 'sectores' || activeTab === 'servicios' || activeTab === 'starlink')) {
                isActive = true;
              }
              
              const isHomePath = typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '');
              const linkHref = isHomePath ? `#${link.id}` : `/#${link.id}`;

              return (
                <a
                  key={link.id}
                  href={linkHref}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl border text-xs font-mono uppercase tracking-wider transition-all
                    ${isActive 
                      ? 'bg-[#FF5665]/15 border-[#FF5665]/35 text-[#FF5665] font-bold' 
                      : 'bg-white/5 border-transparent text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/5'
                    }
                  `}
                >
                  {link.label}
                  <Compass size={12} className={isActive ? 'text-[#FF5665] rotate-45' : 'text-gray-500'} />
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
