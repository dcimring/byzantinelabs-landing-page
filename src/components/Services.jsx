import { LayoutDashboard, ShieldAlert, TrendingUp, Cpu, Lock, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Dashboards",
    description: "Tailor-made dashboards integrating on-chain and off-chain data with real-time alerts for informed decision-making.",
    icon: LayoutDashboard,
  },
  {
    title: "Risk Management",
    description: "Proactive monitoring of wallet activity and social sentiment to mitigate risks for DAO and treasury managers.",
    icon: ShieldAlert,
  },
  {
    title: "Treasury Strategy",
    description: "Data-driven formulation and backtesting of systematic strategies for efficient treasury and fund management.",
    icon: TrendingUp,
  },
  {
    title: "Automated Trading",
    description: "Development, testing, and monitoring of algorithmic trading systems across centralized and decentralized exchanges.",
    icon: Cpu,
  },
  {
    title: "Multi-Sig Security",
    description: "Independent third-party signers for multi-sig wallets, secured in regulated offshore jurisdictions for added safety.",
    icon: Lock,
  },
  {
    title: "Management Services",
    description: "Comprehensive outsourced support including project management, accounting, legal, and social media handling.",
    icon: Briefcase,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-sky-400 font-semibold tracking-wide uppercase">What We Do</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Comprehensive Web3 Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto">
            From infrastructure to strategy, we provide the building blocks for successful DAOs and crypto projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 group"
            >
              <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-sky-500/20 transition-colors">
                <service.icon className="h-6 w-6 text-sky-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
