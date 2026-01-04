import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-sky-500/20 rounded-full blur-[120px] -z-10 mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight text-white mb-6 drop-shadow-2xl">
            Empowering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-sky-400 animate-gradient bg-300">
              DAOs & Web3
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
            Professional tools and comprehensive outsourced services. 
            We provide the infrastructure so you can focus on the vision.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <MagneticButton>
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-white bg-sky-600 hover:bg-sky-500 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_40px_rgba(14,165,233,0.5)]"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </MagneticButton>
            
            <MagneticButton>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border border-slate-600 text-lg font-medium rounded-full text-slate-300 hover:text-white hover:border-white hover:bg-white/5 transition-all"
              >
                Contact Us
              </a>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
}