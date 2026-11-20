import { FaGithub, FaLinkedin, FaTimes, FaKaggle } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import profileImg from '@/assets/profile.png';

export const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-background">
      
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* ================= LEFT COLUMN: TEXT ================= */}
        <div className="flex flex-col gap-6 order-2 lg:order-1 text-center lg:text-left items-center lg:items-start">
          
          {/* Greeting & Name */}
          <div>
            <p className="text-muted-foreground text-sm md:text-base mb-1">Hi I am</p>
            <h2 className="text-white text-xl md:text-4xl font-medium tracking-wide">Ubaidullah</h2>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-orange leading-tight">
            Frontend <br className="hidden lg:block" /> Developer
          </h1>

          {/* Social Icons */}
          <div className="flex gap-3 mt-2">
            {[
              { icon: <FaGithub size={16} />, href: "https://github.com/ubaid-X" },
              { icon: <FaLinkedin size={16} />, href: "https://www.linkedin.com/in/ubaid-ullah-634563373/" },
              { icon: <FaTimes size={16} />, href: "https://x.com/UbaidX_Official" },
              { icon: <FaKaggle size={16} />, href: "https://www.kaggle.com/ubaidullah01" }
            ].map((social, idx) => (
              <a 
                key={idx}
                href={social.href} 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-brand-orange hover:border-brand-orange transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a href="#contact">
            <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold rounded-md px-8 py-5 text-sm cursor-pointer">
              Hire Me
            </Button>
            </a>
            <a href="#">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 rounded-md px-8 py-5 text-sm cursor-pointer">
              <a href="" download="/public/UbaidUllah_Frontend_Developer_CV.pdf" >Download CV</a>
              </Button>
              </a>
          </div>

          {/* Stats Box (Matching the distinct box from the screenshot) */}
          <div className="mt-8 flex items-center justify-center lg:justify-start bg-[#141414] border border-white/5 rounded-xl p-5 w-full max-w-[400px]">
            <div className="flex-1 text-center">
              <h3 className="text-2xl font-bold text-brand-orange">2+</h3>
              <p className="text-muted-foreground text-xs mt-1 font-bold">Experience</p>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="flex-1 text-center">
              <h3 className="text-2xl font-bold text-brand-orange">10+</h3>
              <p className="text-muted-foreground text-xs mt-1 font-bold">Project done</p>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="flex-1 text-center">
              <h3 className="text-2xl font-bold text-brand-orange">100%</h3>
              <p className="text-muted-foreground text-xs mt-1 font-bold">Satisfaction</p>
            </div>
          </div>

        </div>

        {/* ================= RIGHT COLUMN: IMAGE ================= */}
        <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
          
          {/* The large circular background behind the person */}
          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] rounded-full bg-[#151515] flex items-end justify-center overflow-hidden">
            
            {/* The Image (object-cover ensures it fills the space while keeping aspect ratio) */}
            <img 
              src={profileImg} 
              alt="Ubaidullah" 
              className="w-full h-full object-contain scale-110 pt-2"
            />
          </div>
          
        </div>

      </div>
    </section>
  );
};