import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import profileImg from '@/assets/profile2.png'; 
import { Skills } from '@/sections/Skills';


export const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            User Interface And User Experience And Also Backend Engineering
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image with Arch Background */}
          <div className="relative flex justify-center lg:justify-start items-end">
            {/* The subtle arch shape behind the image */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-10 lg:translate-x-0 w-[280px] md:w-[350px] h-[400px] md:h-[450px] bg-[#141414] rounded-t-[10rem] border-t border-x border-white/5"></div>
            
            {/* The Image */}
            <img 
              src={profileImg} 
              alt="Ubaidullah" 
              className="relative z-10 w-[280px] md:w-[350px] mr-7 md:mr-10 lg:mr-0 lg:ml-4.5 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
            />
          </div>

          {/* Right Column: Text & Button */}
          <div className="flex flex-col gap-6">
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              A Computer Science undergraduate and a passionate Frontend Developer, navigating the digital realm by crafting responsive, user-friendly interfaces. With expertise in HTML, CSS, JavaScript, Tailwind CSS, Bootstrap and Vite, I sculpt clean, modern web designs. 
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Beyond the frontend, I am Spacializing in secure backend architectures using PHP, culminating in the creation of 'Landora'—a university project that secured 2nd position. Driven by a continuous quest for perfection, I am currently expanding my backend expertise, with a clear trajectory toward Python and FastAPI, aiming to build scalable, full-stack solutions that bridge the gap between beautiful UI and robust functionality.
            </p>
            
            <div className="mt-4">
              <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white cursor-pointer font-semibold rounded-md px-6 py-5 text-sm flex items-center gap-2">
                <Download size={18} />
                Download CV
              </Button>
            </div>
          </div>

              </div>
          <Skills />
              
      </div>
    </section>
  );
};