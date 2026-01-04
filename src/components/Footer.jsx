export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
            ByzantineLabs
          </span>
          <p className="text-slate-500 text-sm mt-2">
            Excellence and honesty in the crypto industry.
          </p>
        </div>
        
        <div className="flex space-x-6 text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center text-slate-600 text-sm">
        &copy; {new Date().getFullYear()} ByzantineLabs. All rights reserved.
      </div>
    </footer>
  );
}
