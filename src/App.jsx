import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/ui/CustomCursor";

function App() {
  return (
    <div className="relative min-h-screen font-sans text-slate-100 selection:bg-sky-500/30">
      <CustomCursor />
      <ParticleBackground />
      
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0 mix-blend-overlay" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
           }}
      />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
