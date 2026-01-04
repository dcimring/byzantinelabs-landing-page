import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">DAOs</span> & Web3
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400">
            Professional tools and comprehensive outsourced services. 
            We provide the infrastructure so you can focus on the vision.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#services"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-lg shadow-sky-500/30"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-slate-600 text-base font-medium rounded-lg text-slate-300 hover:bg-slate-800 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
