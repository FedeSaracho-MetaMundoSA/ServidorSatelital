import { motion } from 'motion/react';
import { Wifi, Router, Cable, Zap, ChevronRight } from 'lucide-react';

export default function KitStarlink() {
  const kitParts = [
    {
      name: "Antena Starlink (Mini / Stand)",
      desc: "Diseño compacto ultra-ligero y aerodinámico, resistente a climas extremos (-30°C a 50°C). Optimizada con soporte magnético de neodimio de alta tracción para uso móvil.",
      icon: Wifi
    },
    {
      name: "Router integrado",
      desc: "Cobertura amplia de banda dual integrada de última gama (Wi-Fi 6) para conectar de forma fluida múltiples dispositivos sin pérdidas en caminos agrestes.",
      icon: Router
    },
    {
      name: "Cableado Reforzado",
      desc: "Cables de exterior con blindaje electromagnético y protección UV para evitar la erosión de nieve, sol andino o climas de alta montaña severos.",
      icon: Cable
    },
    {
      name: "Alimentación Nativa 12/24V",
      desc: "Fuente customizada de 12V-24V a 30V diseñada por nuestro equipo para conexión directa al encendedor vehicular, eliminando inversores ineficientes.",
      icon: Zap
    }
  ];

  return (
    <section className="py-32 bg-transparent relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E14] via-[#0B0E14]/80 to-[#0B0E14] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 w-full max-w-6xl">
        <div className="text-center mb-24">
          <h2 className="text-sm font-mono tracking-[0.2em] text-[#FF5665] mb-4 uppercase inline-flex items-center gap-2">
            <span className="w-8 h-[2px] bg-[#FF5665]"></span>
            Especialistas
            <span className="w-8 h-[2px] bg-[#FF5665]"></span>
          </h2>
          <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold max-w-4xl mx-auto mt-4">
            Dentro de la caja del <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#F97316]">
              Kit Starlink
            </span>
          </h3>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto font-light text-lg">
            Todo lo que necesitás para conectarte a internet de alta velocidad llega en una sola caja. Instalación <strong className="text-[#FF5665]">Plug & Play</strong> asistida por nuestros técnicos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {kitParts.map((part, idx) => (
               <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-[#FF5665]/50 hover:shadow-[0_10px_30px_rgba(255,86,101,0.1)] transition-all group backdrop-blur-sm">
                 <div className="w-14 h-14 bg-black border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:border-[#FF5665] group-hover:text-[#FF5665] transition-colors relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#FF5665]/20 scale-0 group-hover:scale-100 transition-transform rounded-2xl" />
                    <part.icon className="text-white group-hover:text-[#FF5665] relative z-10 transition-colors" size={24} />
                 </div>
                 <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{part.name}</h4>
                 <p className="text-gray-400 text-sm leading-relaxed">{part.desc}</p>
               </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center h-[500px]"
          >
            <div className="absolute w-full h-full bg-gradient-to-r from-[#FF5665]/20 to-[#F97316]/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative w-full max-w-[290px] sm:max-w-[450px] aspect-square border border-white/5 bg-black/40 rounded-full flex items-center justify-center p-6 sm:p-12 backdrop-blur-xl shadow-2xl">
                <div className="w-[85%] h-[85%] border border-[#FF5665]/30 rounded-full animate-[spin_40s_linear_infinite] absolute border-dashed" />
                <div className="w-[65%] h-[65%] border-2 border-[#F97316]/20 rounded-full animate-[spin_30s_linear_infinite_reverse] absolute border-dotted" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative w-48 h-48 mb-8 group">
                    <div className="absolute inset-x-0 bottom-0 h-10 bg-white/20 blur-xl group-hover:bg-[#FF5665]/40 transition-colors rounded-full" />
                    <img 
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop" 
                      alt="Starlink Box" 
                      className="w-full h-full object-cover rounded-3xl border border-white/20 shadow-2xl scale-100 group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  
                  <a href="#contacto" className="inline-flex items-center gap-2 text-[#0B0E14] font-bold bg-[#FF5665] px-6 py-3 rounded-full hover:bg-white hover:text-[#FF5665] transition-colors shadow-lg">
                    Quiero mi Kit <ChevronRight size={18} />
                  </a>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
