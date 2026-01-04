import { Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-16 overflow-hidden relative border border-slate-700">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
              Ready to Build Together?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Whether you need a custom dashboard, risk management strategies, or full DAO support, our team is ready to help.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="mailto:contact@byzantinelabs.tech"
                className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-sky-600 hover:bg-sky-700 transition-all shadow-lg shadow-sky-500/25"
              >
                <Mail className="w-5 h-5 mr-3" />
                Email Us
              </a>
              <a 
                href="#" // Placeholder for generic contact or telegram
                className="inline-flex items-center justify-center px-6 py-4 border border-slate-600 text-lg font-medium rounded-xl text-slate-300 hover:bg-slate-800 transition-all"
              >
                <MessageSquare className="w-5 h-5 mr-3" />
                Join Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
