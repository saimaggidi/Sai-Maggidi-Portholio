import { ArrowRight, Mail, Linkedin, Dribbble } from 'lucide-react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-[#FF5A36] flex items-center justify-center overflow-hidden">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Utkarsha&backgroundColor=ffdfbf" alt="Logo" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-neutral-300">
        <a href="#" className="text-white">Design</a>
        <a href="#" className="hover:text-white transition-colors">Other Projects</a>
        <a href="#" className="hover:text-white transition-colors">Research</a>
        <a href="#" className="hover:text-white transition-colors">About Me</a>
      </div>
      <div>
        <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-colors">
          Resume
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 flex flex-col items-center text-center min-h-[80vh] justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_80%)] pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-32 h-32 rounded-full bg-[#FF5A36] mb-6 overflow-hidden border-4 border-[#0a0a0a] shadow-xl">
           <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Utkarsha&backgroundColor=ffdfbf" alt="Utkarsha" className="w-full h-full object-cover" />
        </div>
        
        <p className="text-lg font-medium mb-4 text-neutral-200">Hello, I'm Utkarsha !!</p>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl leading-tight">
          Designing <span className="font-serif italic font-normal text-neutral-300">Thoughtful</span><br />
          Digital <span className="font-serif italic font-normal text-neutral-300">Experiences</span>
        </h1>
        
        <p className="text-[#FF5A36] font-medium text-lg md:text-xl mb-6">
          Currently working with Honeywell for Graduation Project
        </p>
        
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
  return (
    <div className="w-full border-y border-white/5 bg-[#0a0a0a] py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale">
        <div className="flex items-center gap-2 font-bold text-xl"><span className="w-6 h-6 bg-white rounded-sm inline-block"></span> NANAVATI MAX</div>
        <div className="flex items-center gap-2 font-bold text-xl"><span className="w-6 h-6 bg-white rounded-full inline-block"></span> HCIPAI</div>
        <div className="flex items-center gap-2 font-bold text-xl"><span className="w-6 h-6 bg-white rotate-45 inline-block"></span> India HCI 2025</div>
        <div className="flex items-center gap-2 font-bold text-xl"><span className="w-6 h-6 border-2 border-white inline-block"></span> ServDes</div>
        <div className="flex items-center gap-2 font-bold text-xl"><span className="w-6 h-6 bg-white rounded-sm inline-block"></span> IMMERSIVE MEDIA</div>
        <div className="flex items-center gap-2 font-bold text-xl"><span className="w-6 h-6 bg-white inline-block" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></span> HCP</div>
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
    <section className="py-24 px-4 max-w-7xl mx-auto">
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
  ];

  return (
    <section className="py-24 px-4 bg-[#0f0f0f] border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Other Projects</h2>
        <p className="text-neutral-400 mb-8">Work that didn't make the headlines but played a part in the process.</p>
        <button className="inline-flex items-center gap-2 bg-[#FF5A36] hover:bg-[#e04e2e] text-white px-6 py-3 rounded-full font-medium transition-colors">
          View More <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="max-w-7xl mx-auto overflow-hidden">
        <div className="flex gap-4 overflow-x-auto pb-8 snap-x scrollbar-hide">
          {otherProjects.map((img, i) => (
            <div key={i} className="min-w-[280px] md:min-w-[350px] aspect-[4/3] rounded-2xl overflow-hidden snap-center shrink-0 border border-white/5">
              <img src={img} alt={`Other project ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
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
          Copyright © utkarsha 2025. All rights reserved.
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

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#FF5A36]/30">
      <Navbar />
      <main>
        <Hero />
        <LogoTicker />
        <SelectedProjects />
        <OtherProjects />
      </main>
      <Footer />
    </div>
  );
}