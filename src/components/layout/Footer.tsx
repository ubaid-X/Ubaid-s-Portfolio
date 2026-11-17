import { FaGithub, FaLinkedin, FaTimes, FaEnvelope, FaPhone } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center gap-8">
        
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold tracking-tighter text-brand-orange">
          <img src="/public/apple-touch-icon-Photoroom.png" alt="UBAID" className='m-h-[100px]' />
        </a>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
          <a href="#home" className="text-sm text-muted-foreground hover:text-brand-orange transition-colors">Home</a>
          <a href="#services" className="text-sm text-muted-foreground hover:text-brand-orange transition-colors">Services</a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-brand-orange transition-colors">About me</a>
          <a href="#portfolio" className="text-sm text-muted-foreground hover:text-brand-orange transition-colors">Portfolio</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-brand-orange transition-colors">Contact me</a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="https://github.com/ubaid-X" className="p-2 bg-[#1A1A1A] rounded-full text-muted-foreground hover:text-brand-orange hover:bg-[#262626] transition-all">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/ubaid-ullah-634563373/" className="p-2 bg-[#1A1A1A] rounded-full text-muted-foreground hover:text-brand-orange hover:bg-[#262626] transition-all">
            <FaLinkedin size={18} />
          </a>
          <a href="https://x.com/UbaidX_Official" target="_blank" rel="noreferrer" className="p-2 bg-[#1A1A1A] rounded-full text-muted-foreground hover:text-brand-orange hover:bg-[#262626] transition-all">
            <FaTimes size={18} />
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <FaEnvelope className="text-brand-orange" /> <a href="mailto:ai.business.student0@gmail.com" className='select-all'>ai.business.student0@gmail.com</a>
          </span>
          <span className="flex items-center gap-2">
            <FaPhone className="text-brand-orange" /> <a href='tel:+923466053334' className="hover:underline">+92 346 6053334</a>
          </span>
        </div>

        {/* Copyright */}
        <div className="w-full border-t border-white/5 pt-8 text-center text-xs text-muted-foreground">
          Designed & Built by Ubaidullah © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};