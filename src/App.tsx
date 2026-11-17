import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer'; 
import { Hero } from '@/sections/Hero';
import { Services } from '@/sections/Services';
import { About } from '@/sections/About';
import { Portfolio } from '@/sections/Portfolio';
import { Contact } from '@/sections/Contact'; 
import { TooltipProvider } from '@/components/ui/tooltip';

function App() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground selection:bg-brand-orange selection:text-black flex flex-col">
        <Navbar />
        
        <main className="grow">
          <Hero />
          <Services />
          <About />
          <Portfolio />
          <Contact /> 
        </main>

        <Footer />
      </div>
    </TooltipProvider>
  );
}

export default App;