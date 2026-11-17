import { Briefcase, Code, Database, Layout, MonitorSmartphone, Server } from 'lucide-react';

// Data for the services, tailored to your profile
const servicesData = [
  {
    icon: <Layout size={40} />,
    title: "Frontend Development",
    description: "Building responsive, pixel-perfect interfaces using HTML, CSS, JavaScript, and Tailwind CSS."
  },
  {
    icon: <MonitorSmartphone size={40} />,
    title: "Logo Design",
    description: "Creating unique, memorable, and professional logos that represent your brand identity."
  },
  {
    icon: <Code size={40} />,
    title: "React & Vite Apps",
    description: "Developing fast, modern single-page applications with React, Vite, and component-based architecture."
  },
  {
    icon: <Server size={40} />,
    title: "Backend Integration",
    description: "Connecting frontends to secure PHP backends and RESTful APIs, with a clear path to FastAPI migration."
  },
  {
    icon: <Database size={40} />,
    title: "Data-Driven UI",
    description: "Leveraging Python and data analytics to build interfaces that visualize and interact with complex datasets."
  },
  {
    icon: <Briefcase size={40} />,
    title: "Full-Stack Solutions",
    description: "End-to-end development of web applications, from database design to deployment and maintenance."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering high-quality digital solutions with a focus on performance, design, and user experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="group bg-[#1A1A1A] p-8 rounded-xl border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-orange/10"
            >
              {/* Icon with requested hover opacity effect */}
              <div className="text-brand-orange mb-6 transition-opacity duration-300 group-hover:opacity-70">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};