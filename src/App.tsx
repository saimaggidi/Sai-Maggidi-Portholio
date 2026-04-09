import { ArrowRight, Mail, Linkedin, Dribbble, Download, PenTool, Code2, Sparkles, Layers, Figma, Github, X, Menu } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-[#FF5A36] rounded-full pointer-events-none z-[9999]"
      animate={{
        x: mousePosition.x - 8,
        y: mousePosition.y - 8,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5
      }}
    />
  );
}

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDesignClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/#selected-projects');
    } else {
      document.getElementById('selected-projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav className="pointer-events-auto flex items-center justify-between p-2 pr-3 bg-[#141414]/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl gap-4 md:gap-12 w-full md:max-w-fit">
          <div className="flex items-center">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="w-10 h-10 rounded-full bg-[#FF5A36] flex items-center justify-center overflow-hidden cursor-pointer">
                <img src="/profile.png?v=2" alt="Logo" className="w-full h-full object-cover" />
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-neutral-300">
            <a href="#selected-projects" onClick={handleDesignClick} className="hover:text-white transition-colors cursor-pointer">Design</a>
            <Link to="/other-projects" className="hover:text-white transition-colors">Other Projects</Link>
            <Link to="/about" className="hover:text-white transition-colors">About Me</Link>
          </div>
          <div className="hidden md:block pl-2">
            <Link to="/resume">
              <button className="bg-white text-black px-5 py-2 rounded-xl text-sm font-semibold hover:bg-neutral-200 transition-colors">
                Resume
              </button>
            </Link>
          </div>
          <div className="md:hidden flex items-center pl-2">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center p-6 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#141414]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 w-full max-w-[320px] flex flex-col items-center space-y-6 shadow-2xl"
          >
            <a href="#selected-projects" onClick={handleDesignClick} className="text-lg font-medium text-neutral-300 hover:text-white transition-colors">Design</a>
            <Link to="/other-projects" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-neutral-300 hover:text-white transition-colors">Other Projects</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-neutral-300 hover:text-white transition-colors">About Me</Link>
            
            <div className="w-full h-px bg-white/10 my-2"></div>
            
            <Link to="/resume" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
              <button className="w-full bg-white text-black px-6 py-3 rounded-xl text-base font-semibold hover:bg-neutral-200 transition-colors">
                Resume
              </button>
            </Link>
          </motion.div>
        </div>
      )}
    </>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 flex flex-col items-center text-center min-h-[80vh] justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_80%)] pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="hover-3d-container mb-6">
          <div className="hover-3d-element w-32 h-32 rounded-full bg-[#FF5A36] overflow-hidden border-4 border-[#0a0a0a] shadow-xl cursor-pointer">
             <img src="/profile.png?v=2" alt="Sai" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <p className="text-lg font-medium mb-4 text-neutral-200">Hello, I'm Sai Maggidi !!</p>

         <p className="text-[#FF5A36] font-medium text-lg md:text-xl mb-6">
          UI/UX Designer & Frontend Developer
        </p>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl leading-tight">
          Designing <span className="font-serif italic font-normal text-neutral-300">Thoughtful</span><br />
          Digital <span className="font-serif italic font-normal text-neutral-300">Experiences</span>
        </h1>
        
        
        <p className="text-neutral-400 max-w-2xl text-base md:text-lg leading-relaxed">
          I'm a product designer focused on how people engage with complex systems whether
          it's VR interfaces, enterprise platform, or AI tools. I design human centered experiences
          for complex systems while my dog design new ways to ignore me.
        </p>
      </div>
    </section>
  );
}

function LogoTicker() {
  const logos = [
    <div key="1" className="flex items-center gap-2 font-bold text-xl whitespace-nowrap"><Figma className="w-6 h-6" /> Figma</div>,
    <div key="2" className="flex items-center gap-2 font-bold text-xl whitespace-nowrap"><div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center"><div className="w-2 h-2 bg-white rounded-full"></div></div> FigJam</div>,
    <div key="3" className="flex items-center gap-2 font-bold text-xl whitespace-nowrap"><div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold">Ca</div> Canva</div>,
    <div key="4" className="flex items-center gap-2 font-bold text-xl whitespace-nowrap"><div className="w-6 h-6 border-2 border-white rounded-sm flex items-center justify-center text-[10px] font-bold">Ps</div> Photoshop</div>,
    <div key="5" className="flex items-center gap-2 font-bold text-xl whitespace-nowrap"><div className="w-6 h-6 border-2 border-white rounded-sm flex items-center justify-center text-[10px] font-bold">St</div> Stitch</div>,
    <div key="6" className="flex items-center gap-2 font-bold text-xl whitespace-nowrap"><Sparkles className="w-6 h-6" /> AI Studio</div>,
    <div key="7" className="flex items-center gap-2 font-bold text-xl whitespace-nowrap"><div className="w-6 h-6 border-2 border-white rounded-sm flex items-center justify-center text-[12px] font-serif italic">C</div> Claude</div>,
    <div key="8" className="flex items-center gap-2 font-bold text-xl whitespace-nowrap"><Code2 className="w-6 h-6" /> VS Code</div>,
    <div key="9" className="flex items-center gap-2 font-bold text-xl whitespace-nowrap"><Github className="w-6 h-6" /> GitHub</div>,
    <div key="10" className="flex items-center gap-2 font-bold text-xl whitespace-nowrap"><svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2L24 22H0L12 2Z"/></svg> Vercel</div>
  ];

  return (
    <div className="w-full border-y border-white/5 bg-[#0a0a0a] py-8 overflow-hidden flex">
      <div className="flex w-max animate-marquee opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 pause-on-hover">
        <div className="flex gap-16 px-8">
          {logos}
        </div>
        <div className="flex gap-16 px-8">
          {logos}
        </div>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

function ProjectCard({ title, description, tags, imageUrl }: ProjectCardProps) {
  return (
    <div className="group cursor-pointer flex flex-col">
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-neutral-900 border border-white/5">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-neutral-300 border border-white/10"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-[#FF5A36] transition-colors">{title}</h3>
      <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function Services() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">What I Do</h2>
        <p className="text-neutral-400">Bridging the gap between aesthetics and functionality</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Design Card */}
        <motion.div 
          whileHover={{ y: -8 }}
          className="relative p-8 md:p-10 rounded-[2rem] bg-[#141414] border border-white/5 overflow-hidden group"
        >
          {/* Animated Background Blob */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-32 -right-32 w-64 h-64 bg-[#FF5A36]/10 rounded-full blur-3xl pointer-events-none"
          />
          
          {/* Abstract Animated Illustration */}
          <div className="absolute top-10 right-10 w-32 h-32 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-700">
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#FF5A36] to-orange-400 rounded-full blur-[1px] shadow-lg shadow-[#FF5A36]/20"
            />
            <motion.div
              animate={{ y: [0, 15, 0], rotate: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl rotate-12 blur-[1px] shadow-lg shadow-purple-500/20"
            />
          </div>

          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
              <PenTool className="w-7 h-7 text-[#FF5A36]" />
            </div>
            <h3 className="text-3xl font-bold mb-4">UI/UX Design</h3>
            <p className="text-neutral-400 leading-relaxed mb-8 max-w-[85%]">
              Crafting intuitive, human-centered interfaces that solve complex problems. From wireframes to high-fidelity prototypes, I focus on the user journey and visual harmony.
            </p>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li className="flex items-center gap-3"><Sparkles className="w-4 h-4 text-[#FF5A36]" /> User Research & Strategy</li>
              <li className="flex items-center gap-3"><Sparkles className="w-4 h-4 text-[#FF5A36]" /> Wireframing & Prototyping</li>
              <li className="flex items-center gap-3"><Sparkles className="w-4 h-4 text-[#FF5A36]" /> Visual & Interaction Design</li>
            </ul>
          </div>
        </motion.div>

        {/* Development Card */}
        <motion.div 
          whileHover={{ y: -8 }}
          className="relative p-8 md:p-10 rounded-[2rem] bg-[#141414] border border-white/5 overflow-hidden group"
        >
          {/* Animated Background Blob */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
          />
          
          {/* Abstract Animated Illustration */}
          <div className="absolute top-10 right-10 w-32 h-32 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-700">
            <motion.div
              animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-2 right-2 w-24 h-8 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-md border border-blue-500/30 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            />
            <motion.div
              animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-14 right-8 w-16 h-8 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-md border border-blue-500/30 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            />
            <motion.div
              animate={{ y: [0, -8, 0], x: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-26 right-4 w-20 h-8 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-md border border-blue-500/30 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            />
          </div>

          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
              <Code2 className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Development</h3>
            <p className="text-neutral-400 leading-relaxed mb-8 max-w-[85%]">
              Bringing designs to life with clean, efficient, and scalable code. I build responsive web applications with a focus on performance and smooth animations.
            </p>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li className="flex items-center gap-3"><Layers className="w-4 h-4 text-blue-400" /> React & Next.js</li>
              <li className="flex items-center gap-3"><Layers className="w-4 h-4 text-blue-400" /> Tailwind CSS & Framer Motion</li>
              <li className="flex items-center gap-3"><Layers className="w-4 h-4 text-blue-400" /> Responsive Web Apps</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SelectedProjects() {
  const projects = [
    {
      title: "Redesigning WYSA",
      description: "To support corporate employees' mental wellbeing through conversational agents integrated within microsoft teams",
      tags: ["Conversational UX", "Mental Wellbeing", "P2 Project"],
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Ease In A VR Exposure Therapy",
      description: "A VR based pre scan exposure therapy designed to ease MRI anxiety and prepare patients for actual scan",
      tags: ["Virtual Reality", "DRS Internship", "Ongoing"],
      imageUrl: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "SUTRA for Reskilling and Upskilling",
      description: "Service ecosystem to reskill and upskill rural women SHGs, empowering them with market-ready skills and income opportunities.",
      tags: ["Service Design", "ServDes", "4 Weeks"],
      imageUrl: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "\"Mom, I did see your 8 texts but...\"",
      description: "Redesigned WhatsApp to help young adults maintain connection with parents using emotion aware features and micro interactions.",
      tags: ["Emotional UX", "Personal Project", "3 Weeks"],
      imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Design System for ONDC",
      description: "Scalable design system for ONDC that brings consistency to government E-commerce platforms.",
      tags: ["Design System", "Module Work", "3 Weeks"],
      imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Impact of Green Nudges on ChatGPT",
      description: "Designed green nudges AI interfaces that make the hidden carbon footprint visible to users.",
      tags: ["Digital Ergonomics", "HFID Module", "3 Weeks"],
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="selected-projects" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Selected Projects</h2>
        <p className="text-neutral-400">Explore my work to see how I tackle complex problems</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

function OtherProjects() {
  const otherProjects = [
    "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400",
  ];

  const ProjectList = () => (
    <>
      {otherProjects.map((img, i) => (
        <div key={i} className="w-[280px] md:w-[350px] aspect-[4/3] rounded-2xl overflow-hidden shrink-0 border border-white/5">
          <img src={img} alt={`Other project ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      ))}
    </>
  );

  return (
    <section className="py-24 bg-[#0f0f0f] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Other Projects</h2>
        <p className="text-neutral-400 mb-8">Work that didn't make the headlines but played a part in the process.</p>
        <Link to="/other-projects">
          <button className="inline-flex items-center gap-2 bg-[#FF5A36] hover:bg-[#e04e2e] text-white px-6 py-3 rounded-full font-medium transition-colors">
            View More <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
      
      <div className="w-full flex">
        <div className="flex w-max animate-marquee-reverse-fast pause-on-hover">
          <div className="flex gap-6 px-3">
            <ProjectList />
          </div>
          <div className="flex gap-6 px-3">
            <ProjectList />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-neutral-400 text-sm">
          Copyright © saimaggidi 2026. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-colors">
            <Mail className="w-4 h-4" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-colors">
            <Dribbble className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#selected-projects') {
      setTimeout(() => {
        document.getElementById('selected-projects')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <LogoTicker />
      <Services />
      <SelectedProjects />
      <OtherProjects />
    </main>
  );
}

function OtherProjectsPage() {
  const otherProjects = [
    "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <main className="pt-32 pb-24 px-4 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Other Projects</h1>
        <p className="text-neutral-400 max-w-2xl mx-auto">A collection of explorations, side projects, and work that didn't make the front page but still holds value.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {otherProjects.map((img, i) => (
          <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 group cursor-pointer">
            <img src={img} alt={`Project ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </div>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="pt-32 pb-24 px-4 max-w-5xl mx-auto min-h-screen">
      
      {/* Top Visual Section */}
      <div className="relative flex justify-center items-center py-20 md:py-32 mb-16">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_80%)] pointer-events-none"></div>

        <div className="relative scale-75 md:scale-100">
          {/* Avatar */}
          <div className="w-64 h-64 rounded-full bg-[#FF5A36] overflow-hidden border-4 border-[#0a0a0a] shadow-2xl relative z-10 flex items-center justify-center">
            <img src="/profile.png?v=2" alt="Sai" className="w-full h-full object-cover" />
          </div>

          {/* Tags */}
          {/* Top Left */}
          <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 -left-10 md:-left-56 flex items-center gap-3 z-20">
            <div className="px-5 py-2 rounded-full border border-white/20 bg-[#0a0a0a]/80 backdrop-blur-sm text-sm whitespace-nowrap">Product Design</div>
            <svg width="24" height="24" viewBox="0 0 24 24" className="opacity-70 rotate-[15deg] hidden md:block"><polygon points="8,6 16,12 8,18" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round" /></svg>
          </motion.div>

          {/* Middle Left */}
          <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-1/2 -translate-y-1/2 -left-16 md:-left-64 flex items-center gap-3 z-20">
            <div className="px-5 py-2 rounded-full border border-white/20 bg-[#0a0a0a]/80 backdrop-blur-sm text-sm whitespace-nowrap">UX Research</div>
            <svg width="24" height="24" viewBox="0 0 24 24" className="opacity-70 hidden md:block"><polygon points="8,6 16,12 8,18" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round" /></svg>
          </motion.div>

          {/* Bottom Left */}
          <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute bottom-10 -left-10 md:-left-56 flex items-center gap-3 z-20">
            <div className="px-5 py-2 rounded-full border border-white/20 bg-[#0a0a0a]/80 backdrop-blur-sm text-sm whitespace-nowrap">UX Design</div>
            <svg width="24" height="24" viewBox="0 0 24 24" className="opacity-70 -rotate-[15deg] hidden md:block"><polygon points="8,6 16,12 8,18" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round" /></svg>
          </motion.div>

          {/* Top Right */}
          <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-10 -right-10 md:-right-56 flex items-center gap-3 flex-row-reverse z-20">
            <div className="px-5 py-2 rounded-full border border-white/20 bg-[#0a0a0a]/80 backdrop-blur-sm text-sm whitespace-nowrap">UI Systems</div>
            <svg width="24" height="24" viewBox="0 0 24 24" className="opacity-70 -rotate-[15deg] hidden md:block"><polygon points="16,6 8,12 16,18" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round" /></svg>
          </motion.div>

          {/* Middle Right */}
          <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute top-1/2 -translate-y-1/2 -right-16 md:-right-64 flex items-center gap-3 flex-row-reverse z-20">
            <div className="px-5 py-2 rounded-full border border-white/20 bg-[#0a0a0a]/80 backdrop-blur-sm text-sm whitespace-nowrap">Frontend Dev</div>
            <svg width="24" height="24" viewBox="0 0 24 24" className="opacity-70 hidden md:block"><polygon points="16,6 8,12 16,18" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round" /></svg>
          </motion.div>

          {/* Bottom Right */}
          <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 2.5 }} className="absolute bottom-10 -right-10 md:-right-56 flex items-center gap-3 flex-row-reverse z-20">
            <div className="px-5 py-2 rounded-full border border-white/20 bg-[#0a0a0a]/80 backdrop-blur-sm text-sm whitespace-nowrap">Usability Testing</div>
            <svg width="24" height="24" viewBox="0 0 24 24" className="opacity-70 rotate-[15deg] hidden md:block"><polygon points="16,6 8,12 16,18" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round" /></svg>
          </motion.div>
        </div>
      </div>

      {/* Text Content */}
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
        <div className="space-y-6 text-neutral-300 text-lg leading-relaxed">
          <p>
            Hi, I’m Sai — a UI/UX Designer and Frontend Developer who enjoys turning complex ideas into simple, meaningful digital experiences. I believe good design is not just about how it looks, but how it works and feels for the user.
          </p>
          <p>
            Over the past 3+ years, I’ve worked on products across healthcare, inventory, and food delivery, focusing on creating smooth, user-friendly experiences from research to development.
          </p>
          <p>
            I love bridging the gap between design and code, making sure what we design is actually built the right way.
          </p>
        </div>
      </div>
    </main>
  );
}

function ResumePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending email (In a real app, you'd use EmailJS or a backend here)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsModalOpen(false);
      
      // Trigger dummy PDF download
      const element = document.createElement("a");
      const file = new Blob(["This is a placeholder for the actual resume PDF. Replace this with a real PDF file in your public folder."], {type: 'application/pdf'});
      element.href = URL.createObjectURL(file);
      element.download = "Maggidi_Sai_Resume.pdf";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);

      // Open mail client as a fallback to actually send the email
      window.location.href = `mailto:maggidisai4@gmail.com?subject=Resume Downloaded&body=Reason for download: ${reason}`;
      
      setReason("");
    }, 1500);
  };

  return (
    <main className="pt-32 pb-24 px-4 max-w-4xl mx-auto min-h-screen flex flex-col items-center relative">
      
      {/* Download Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#141414] border border-white/10 rounded-2xl p-6 w-full max-w-md relative"
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h3 className="text-2xl font-bold mb-2 text-white">Download Resume</h3>
            <p className="text-neutral-400 mb-6 text-sm">Please let me know why you'd like to download my resume. This helps me keep track of opportunities!</p>
            
            <form onSubmit={handleSubmit}>
              <textarea
                required
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="E.g., Hiring for a UI/UX role at..."
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl p-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#FF5A36] transition-colors resize-none h-32 mb-6"
              />
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-3 rounded-xl font-semibold text-white border border-white/10 hover:bg-white/5 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !reason.trim()}
                  className="flex-1 px-4 py-3 rounded-xl font-semibold text-white bg-[#FF5A36] hover:bg-[#e04e2e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      Submit & Download
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      <div className="mb-12">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 bg-white text-black hover:bg-neutral-200 px-8 py-4 rounded-full font-bold text-lg transition-colors"
        >
          <Download className="w-5 h-5" />
          Download Resume
        </button>
      </div>
      
      <div className="w-full bg-[#141414] border border-white/10 rounded-2xl p-8 md:p-12 text-neutral-300">
        
        {/* Header */}
        <div className="text-center mb-12 border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Maggidi Sai</h1>
          <p className="text-xl font-medium mb-2">UI/UX Designer & Frontend Developer | 3+ Years</p>
          <p className="text-neutral-400 text-sm md:text-base">
            Hyderabad, India | +91 9182029042 | maggidisai4@gmail.com | <a href="#" className="text-[#FF5A36] hover:underline">Linkedin</a> | <a href="#" className="text-[#FF5A36] hover:underline">Portfolio</a>
          </p>
        </div>

        {/* Professional Summary */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#FF5A36] border-b border-white/10 pb-2">Professional Summary</h2>
          <p className="leading-relaxed">
            UI/UX Designer & Front-End Developer with 3+ years of experience delivering end-to-end design and development solutions for web and mobile applications. Strong expertise in UX strategy, user research, interaction design, wireframing, prototyping, usability testing, and design systems, along with hands-on experience in Angular and React to build responsive and scalable user interfaces.
          </p>
        </div>

        {/* Core Skills */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#FF5A36] border-b border-white/10 pb-2">Core Skills</h2>
          <ul className="space-y-2 leading-relaxed">
            <li><strong className="text-white">Design Leadership:</strong> Mentoring, Design Reviews, Feedback, Quality Assurance</li>
            <li><strong className="text-white">UX Strategy:</strong> UX Roadmap, Product Alignment, Experience Optimization.</li>
            <li><strong className="text-white">UX Research:</strong> User Interviews, Research Planning, Personas, Journey Mapping, Competitive Analysis.</li>
            <li><strong className="text-white">UX Design:</strong> Information Architecture, User Flows, Task Flows, Wireframes, Interaction Design.</li>
            <li><strong className="text-white">UI Design:</strong> High-Fidelity UI, Responsive UI, Mobile UI, Web UI, Visual Design, Layout Systems.</li>
            <li><strong className="text-white">Design Systems:</strong> Design Standards, Component Library, UI Guidelines, Documentation, Consistency.</li>
            <li><strong className="text-white">Testing & Iteration:</strong> Usability Testing, Insights, Iteration, Data-Informed Design, UX Improvements.</li>
            <li><strong className="text-white">Accessibility:</strong> WCAG, Accessibility Standards, Inclusive Design.</li>
            <li><strong className="text-white">Front-End Development:</strong> Angular, React, HTML5, CSS3, JavaScript, Component-Based UI Implementation</li>
            <li><strong className="text-white">Responsive Implementation:</strong> Mobile-First, Cross-Browser Support, Pixel-Perfect UI, Layout Alignment, Flexbox, Grid, <span className="text-[#FF5A36]">UI Debugging</span></li>
            <li><strong className="text-white">Collaboration:</strong> Stakeholder Management, Product Managers, Developers, Presentation and Communication.</li>
            <li><strong className="text-white">Tools:</strong> Figma, FigJam, Canva, Photoshop, stitch, Aistudio, claude, VS Code, Github, vercel.</li>
          </ul>
        </div>

        {/* Experience */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-[#FF5A36] border-b border-white/10 pb-2">Experience</h2>
          
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
              <h3 className="text-xl font-bold text-white">UI/UX Designer & Frontend Developer | Deviats pvt Ltd – Hyderabad</h3>
              <span className="text-neutral-400 font-medium shrink-0 mt-1 md:mt-0">Jan 2023 – Present</span>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-2 leading-relaxed text-neutral-300 marker:text-neutral-500">
              <li>Designed intuitive web applications, mobile apps, and dashboard interfaces with a strong focus on user experience and business goals.</li>
              <li>Conducted UX research, created wireframes, user flows, and high-fidelity designs for multiple projects across industries.</li>
              <li>Collaborated with US-based clients to deliver UI/UX solutions aligned with user needs and product requirements.</li>
              <li>Converted UI/UX designs into responsive front-end implementations using Angular, React, HTML, CSS, and JavaScript, utilizing AI-assisted tools to enhance productivity and code quality.</li>
              <li>Worked closely with developers to ensure pixel-perfect UI, resolving alignment, responsiveness, and cross-browser issues.</li>
              <li>Performed UI debugging, identified design gaps, and provided clear guidance to development teams for implementation.</li>
              <li>Contributed to design systems and maintained UI consistency across applications</li>
              <li>Designed marketing assets including posters, banners, and other graphical materials</li>
              <li>Developed and optimized static websites with a focus on SEO, performance, and accessibility</li>
            </ul>
          </div>
        </div>

        {/* Top Projects */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-[#FF5A36] border-b border-white/10 pb-2">Top Projects</h2>
          
          <div className="space-y-8">
            {/* Project 1 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Inventory Management System (Web Application)</h3>
              <ul className="list-disc list-outside ml-5 space-y-2 leading-relaxed text-neutral-300 marker:text-neutral-500">
                <li>Designed user flows, wireframes, and high-fidelity UI using Figma, ensuring consistency with reusable components.</li>
                <li>Developed a multi-level system (Super Admin → Admin → Staff) with features like inventory, billing, GST, and payment tracking.</li>
                <li>Built dashboards for real-time insights on stock, sales, and financial performance with cross-device accessibility.</li>
                <li>Contributed to UI debugging and front-end development, fixing responsiveness and improving overall user experience.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Soult App – Digital Locker & Asset Management (Mobile Application)</h3>
              <ul className="list-disc list-outside ml-5 space-y-2 leading-relaxed text-neutral-300 marker:text-neutral-500">
                <li>Redesigned the mobile app UI with improved user flows, wireframes, and high-fidelity designs using Figma, enhancing overall user experience.</li>
                <li>Built a secure digital locker concept to store documents and sensitive personal information with a clean, intuitive interface.</li>
                <li>Designed a unique executor access feature, allowing authorized users to access and manage data in case of emergency scenarios.</li>
                <li>Ensured a fully responsive and user-friendly design for Android and iOS platforms, focusing on security, accessibility, and usability.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Foodistan - Food Chain and Delivery Application (Web Application)</h3>
              <ul className="list-disc list-outside ml-5 space-y-2 leading-relaxed text-neutral-300 marker:text-neutral-500">
                <li>Designed user flows, wireframes, and high-fidelity UI using Figma, ensuring a consistent and scalable design system.</li>
                <li>Developed a fully responsive web application and contributed to front-end development using Angular.</li>
                <li>Implemented store-based product request and distribution features, enabling efficient multi-store operations for an Australia-based client.</li>
                <li>Performed UI debugging and responsiveness fixes, improving usability and cross-device performance.</li>
              </ul>
            </div>

            {/* Project 4 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-3">MedQuants – Pharmacy Delivery & Healthcare App (Mobile Application)</h3>
              <ul className="list-disc list-outside ml-5 space-y-2 leading-relaxed text-neutral-300 marker:text-neutral-500">
                <li>Designed end-to-end user flows, wireframes, and high-fidelity UI using Figma for a multi-module healthcare platform (User, Rider, Pharmacy, Admin).</li>
                <li>Built features for medicine ordering, prescription upload, order handling, and delivery tracking, along with doctor appointments and lab test booking.</li>
                <li>Solved key UX challenges (like prescription upload flow) by creating intuitive, user-friendly UI solutions in collaboration with developers and stakeholders.</li>
                <li>Designed a modern, scalable interface (glassmorphism style) and worked closely with clients and teams to deliver a seamless, end-to-end experience.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#FF5A36] border-b border-white/10 pb-2">Education</h2>
          <h3 className="text-lg font-bold text-white">B.Tech in Electrical and Electronics Engineering</h3>
        </div>

        {/* Languages */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[#FF5A36] border-b border-white/10 pb-2">Languages</h2>
          <p className="text-lg font-medium text-white">English, Telugu</p>
        </div>

      </div>
    </main>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#FF5A36]/30 cursor-none">
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/other-projects" element={<OtherProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
      <Footer />
    </div>
  );
}