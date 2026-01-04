import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Expertise in DeFi & Finance",
  "Commitment to Honesty",
  "Regulated Security Standards",
  "Long-term Industry Vision",
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-base text-sky-400 font-semibold tracking-wide uppercase mb-3">
              About Us
            </h2>
            <h3 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
              Building the Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
                Decentralized Finance
              </span>
            </h3>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              At ByzantineLabs, our core mission is to expand and legitimize the crypto industry through excellence and honesty. We believe in building robust infrastructure that empowers DAOs and Web3 projects to operate with the same efficiency and security as traditional financial institutions.
            </p>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Our team combines deep expertise in cryptography, finance, and algorithmic trading to provide state-of-the-art tools. We don't just offer services; we partner with our clients to build sustainable ecosystems together.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-sky-500 flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual / Graphic Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 lg:mt-0 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-800/30 backdrop-blur-sm p-8">
               {/* Decorative Gradient Blob */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

              <div className="relative z-10 grid grid-cols-2 gap-6">
                 <div className="space-y-6">
                    <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-700/50">
                        <div className="text-3xl font-bold text-white mb-1">10+</div>
                        <div className="text-sm text-slate-400">Years Combined Exp</div>
                    </div>
                    <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-700/50">
                        <div className="text-3xl font-bold text-white mb-1">24/7</div>
                        <div className="text-sm text-slate-400">System Monitoring</div>
                    </div>
                 </div>
                 <div className="space-y-6 pt-8">
                    <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-700/50">
                        <div className="text-3xl font-bold text-white mb-1">100%</div>
                        <div className="text-sm text-slate-400">Client Dedication</div>
                    </div>
                    <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-700/50">
                        <div className="text-3xl font-bold text-white mb-1">Secure</div>
                        <div className="text-sm text-slate-400">Multi-Sig setups</div>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
