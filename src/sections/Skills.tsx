import { motion, useMotionValue, useTransform, animate, useInView, color, percent } from 'motion/react';
import { useEffect, useRef } from 'react';
import { 
  SiHtml5, 
  SiCss, 
  SiJavascript, 
  SiTailwindcss, 
  SiReact, 
  SiPhp,
  SiBootstrap,
  SiPython,
  SiCplusplus,
  SiPandas,
  SiNumpy,
  SiPlotly,
  
  SiFigma ,
} from 'react-icons/si';

import {
  FaChartBar,
  FaChartArea,
  FaDatabase,
} from 'react-icons/fa';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaPercentage } from 'react-icons/fa';
import { Icon } from 'lucide-react';

const skillsData = [
  { name: 'HTML & CSS', percentage: 95, icon: <SiHtml5 size={28} />, color: '#E34F26' },
  { name: 'JavaScript', percentage: 85, icon: <SiJavascript size={28} />, color: '#F7DF1E' },
  { name: 'Tailwind CSS', percentage: 87, icon: <SiTailwindcss size={28} />, color: '#06B6D4' },
  { name: 'Bootstrap', percentage: 89, icon: <SiBootstrap size={28}/>, color:'#7952B3'},
  { name: 'React & Vite', percentage: 40, icon: <SiReact size={28} />, color: '#61DAFB' },
  { name: 'Core PHP (Backend)', percentage: 75, icon: <SiPhp size={28} />, color: '#777BB4' },
  { name: 'C++', percentage: 87, Icon: <SiCplusplus size={28} />, color: '#00599C'},
  { name: 'Python', percentage: 80, icon: <SiPython size={28} />, color: '#3776AB' },
  { name: 'Pandas', percentage: 70, icon: <SiPandas size={28} />, color: '#150458' },
  { name: 'Numpy', percentage: 68, icon: <SiNumpy size={28} />, color: '#013243' },
  { name: 'Matplotlib', percentage: 76, icon: <FaChartBar size={28} />, color: '#11557C' },
  { name: 'Seaborn', percentage: 80, icon: <FaChartArea size={28} />, color: '#4C72B0'},
  { name: 'Plotly', percentage: 67, icon: <SiPlotly size={28} />, color: '#3F4F75' },
  {name: 'SQL', percentage: 57, icon: <FaDatabase size={28} />, color: '#E38C00'},
  { name: 'Logo Design', percentage: 85, icon: <SiFigma size={28} />, color: '#F24E1E' },
];

const radius = 45;
const circumference = 2 * Math.PI * radius;

const AnimatedCounter = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, value, { 
        duration: 1.5, 
        ease: "easeOut",
        delay: 0.2
      });
    }
  }, [isInView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export const Skills = () => {
  return (
    <div className="mt-20 pt-10 border-t border-white/5 w-full">
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
        {skillsData.map((skill, index) => (
          <div key={index} className="flex flex-col items-center gap-4 group">
            
            <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center">
              
              <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                <circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke="#262626"
                  strokeWidth="6"
                  fill="transparent"
                />
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke="#FF5E00"
                  strokeWidth="6"
                  fill="transparent"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  whileInView={{ 
                    strokeDashoffset: circumference - (skill.percentage / 100) * circumference 
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                />
              </svg>

              <Tooltip>
                {/* ✅ Removed asChild. Styled the trigger directly. */}
                <TooltipTrigger 
                  className="z-10 cursor-pointer text-white transition-all duration-300 hover:scale-125 focus:outline-none"
                  style={{ '--brand-color': skill.color } as React.CSSProperties}
                >
                  <div className="hover:text-[var(--brand-color)] transition-colors duration-300">
                    {skill.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-brand-orange text-black font-semibold border-none">
                  <p>{skill.name}</p>
                </TooltipContent>
              </Tooltip>

            </div>

            <div className="text-center">
              <h4 className="text-brand-orange font-bold text-xl">
                <AnimatedCounter value={skill.percentage} />%
              </h4>
              <p className="text-muted-foreground text-sm mt-1">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};