import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import logoImg from '@/assets/logo.png'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About me', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact me', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    const sections = document.querySelectorAll('section[id], div[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        
        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden md:flex w-full items-center justify-between">
          <a href="#home" className="text-2xl font-bold tracking-wider text-brand-orange">
            <img src={logoImg} alt="UBAID" className='max-h-[100px]'/>
          </a>

          <nav className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`group relative text-sm font-medium transition-colors ${
                    isActive ? 'text-brand-orange' : 'text-muted-foreground hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 h-[2px] bg-brand-orange transition-all duration-300 w-0 group-hover:w-full"></span>
                </a>
              );
            })}
          </nav>
            <a href="#contact">
          <Button className="bg-brand-orange hover:bg-brand-orange/90 text-black font-semibold rounded-full px-8 py-2 cursor-pointer">
            Hire Me
            </Button>
            </a>
        </div>

        {/* ================= MOBILE VIEW ================= */}
        <div className="grid grid-cols-3 items-center w-full md:hidden">
          
          {/* Hamburger Menu (Left) */}
          <div className="flex justify-start">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              
             
              <SheetTrigger className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-white/10 h-10 w-10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                <Menu className="h-6 w-6 text-white" />
              </SheetTrigger>
              
              <SheetContent side="left" className="bg-brand-dark border-r border-white/10 text-white w-[280px]">
                <div className="flex flex-col gap-6 mt-12 px-4">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href.replace('#', '');
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium transition-colors ${
                          isActive ? 'text-brand-orange' : 'text-muted-foreground hover:text-white'
                        }`}
                      >
                        {link.name}
                      </a>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Center Logo */}
          <div className="flex justify-center">
            <a href="#home" className="text-xl font-bold tracking-wider text-brand-orange">
              <img src={logoImg} alt="UBAID" className='max-h-[100px]' />
            </a>
          </div>

          {/* Right Hire Me Button */}
          <div className="flex justify-end">
            <a href="#contact">
            <Button size="sm" className="bg-brand-orange hover:bg-brand-orange/90 text-black font-semibold rounded-full px-5 h-9 cursor-pointer">
              Hire Me
              </Button>
              </a>
          </div>
        </div>

      </div>
    </header>
  );
};