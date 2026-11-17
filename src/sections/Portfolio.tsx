import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'motion/react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa'; // ✅ New import
import { projects } from '@/data/projects';

const categories = ['All', 'Web App', 'UI/UX', 'API'];

export const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('All');
  
  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: 'start', loop: true }, 
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [filteredProjects, emblaApi]);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Portfolio</h2>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === cat 
                    ? 'bg-brand-orange text-black shadow-lg shadow-brand-orange/20' 
                    : 'bg-[#1A1A1A] text-muted-foreground hover:text-white hover:bg-[#262626]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#141414] rounded-xl overflow-hidden border border-white/5"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="p-3 bg-brand-orange text-black rounded-full hover:scale-110 transition-transform">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                    <FaGithub size={20} /> {/* ✅ Fixed here */}
                  </a>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-white group-hover:text-brand-orange transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {filteredProjects.map((project) => (
                <div key={project.id} className="flex-[0_0_85%] min-w-0 pl-4">
                  <div className="bg-[#141414] rounded-xl overflow-hidden border border-white/5">
                    <div className="aspect-[4/3] relative">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-black/80 px-2 py-1 rounded text-xs text-white">
                        {project.category}
                      </div>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <h3 className="text-md font-semibold text-white">{project.title}</h3>
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-brand-orange">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mt-6">
            <button onClick={scrollPrev} className="p-2 bg-[#1A1A1A] rounded-full text-white hover:bg-brand-orange hover:text-black transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button onClick={scrollNext} className="p-2 bg-[#1A1A1A] rounded-full text-white hover:bg-brand-orange hover:text-black transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};