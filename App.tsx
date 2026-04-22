import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Code, 
  Award, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink,
  ChevronRight,
  BookOpen,
  Calendar,
  MapPin
} from 'lucide-react';
import React, { useState, useEffect } from 'react';
import profilePhoto from './2x2.jpg';
import careerPhoto from './career.png';

// Types
interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

interface Education {
  school: string;
  degree: string;
  period: string;
  achievements: string[];
  location: string;
}

// Data
const PROJECTS: Project[] = [
  {
    title: "Career Guidance Website Research Project",
    description: "Me and my research members conducted a study on how our website can enhance the students career decision-making skills specifically on ICT.",
    tags: ["Research", "ICT", "Web Dev"],
    link: "https://career-guidance-websitee.vercel.app/",
    image: careerPhoto,
  },
  {
    title: "Upcoming Projects",
    description: "Exciting new initiatives and digital designs currently in development.",
    tags: ["Development", "Creative", "Future"],
  }
];

const EDUCATION: Education[] = [
  {
    school: "Saint Bernard High School",
    degree: "Grade 10 Student",
    period: "2023 - 2024",
    achievements: ["With High Honors"],
    location: "Sangi, Toledo City, Cebu"
  },
  {
    school: "Consolatrix College of Toledo City Inc.",
    degree: "High School Diploma",
    period: "2025 - 2026",
    achievements: [
      "With High Honors",
      "National Certificate II Computer Systems Servicing (CSS)",
      "2025 SEAMEO Japan ESD Award"
    ],
    location: "Magsaysay Hills, Toledo City, Cebu"
  }
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#FF0080]/30">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-lg' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-serif text-xl font-bold tracking-tight"
          >
            Maffe <span className="text-[#FF0080]">Aoki</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex gap-8 text-sm font-medium"
          >
            <a href="#about" className="hover:text-[#FF0080] transition-colors">About</a>
            <a href="#education" className="hover:text-[#FF0080] transition-colors">Path</a>
            <a href="#projects" className="hover:text-[#FF0080] transition-colors">Work</a>
            <a href="#contact" className="hover:text-[#FF0080] transition-colors">Contact</a>
          </motion.div>
          <button className="md:hidden">
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,128,0.1),transparent_70%)]"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF0080]/10 rounded-full blur-3xl opacity-50 mix-blend-screen animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF0080]/5 rounded-full blur-3xl opacity-50 mix-blend-screen animate-pulse delay-700"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#FF0080] font-medium tracking-[0.2em] uppercase text-sm mb-6"
          >
            Welcome to my Portfolio
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-serif font-bold tracking-tight mb-8"
          >
            How are you? <br />
            Oh I'm <span className="italic text-[#FF0080]">Aoki.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-xl mx-auto text-stone-400 text-lg md:text-xl leading-relaxed mb-10"
          >
            I am a curious developer and IT student focused on creating impactful projects through technology and design.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#projects" className="px-8 py-4 bg-[#FF0080] text-black rounded-full font-bold hover:bg-[#FF3399] transition-all flex items-center justify-center gap-2">
              View Projects <ChevronRight size={18} />
            </a>
            <a href="#contact" className="px-8 py-4 border border-[#FF0080]/30 text-white rounded-full font-medium hover:bg-[#FF0080]/10 transition-all flex items-center justify-center gap-2">
              Let's Talk <Mail size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-stone-600"
        >
          <div className="w-px h-12 bg-[#FF0080]/30 mx-auto mb-4"></div>
          <p className="text-[10px] uppercase tracking-widest">Scroll</p>
        </motion.div>
      </header>

      {/* About Section */}
      <section id="about" className="section-padding bg-stone-950 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1.5fr_1fr] gap-16 items-center">
          <div>
            <span className="text-[#FF0080]/50 text-xs uppercase tracking-[0.3em] font-bold block mb-4">01 // The Story</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Who I <span className="italic text-[#FF0080]">am</span>.</h2>
            <div className="space-y-6 text-lg leading-relaxed text-stone-400">
              <p className="text-xl text-white">
                I am a developer who enjoys exploring the world of technology, creating real-world solutions while striving to make the process engaging, fun, and exciting.
              </p>
              <p>
                As I transition from high school to university, my goal is to deepen my technical foundation while remaining mindful of the human aspects of technology. I believe that the most effective solutions emerge when complex systems are translated into simple, intuitive designs.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-stone-900 rounded-2xl border border-white/5 overflow-hidden relative group">
              <img 
                src={profilePhoto} 
                alt="Maffe Aoki"
                className="w-full h-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Path / Education Section */}
      <section id="education" className="section-padding bg-black">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#FF0080]/50 text-xs uppercase tracking-[0.3em] font-bold block mb-4">02 // The Path</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 italic">Academic Journey & Honors</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {EDUCATION.map((edu, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5, borderColor: '#FF0080' }}
                className="bg-neutral-900/50 p-8 rounded-3xl border border-white/5 shadow-sm hover:shadow-[#FF0080]/10 transition-all h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-2xl text-[#FF0080]">
                    <GraduationCap size={24} />
                  </div>
                  <span className="text-xs font-bold text-[#FF0080] bg-[#FF0080]/10 px-3 py-1 rounded-full uppercase tracking-widest">
                    {edu.period}
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-2 text-white">{edu.school}</h3>
                <p className="text-stone-500 mb-6 flex items-center gap-2">
                   <MapPin size={14} /> {edu.location} • <span className="font-medium text-[#FF0080]">{edu.degree}</span>
                </p>
                <ul className="space-y-3">
                  {edu.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-stone-400 text-sm">
                       <span className="mt-1.5 w-1.5 h-1.5 bg-[#FF0080]/50 rounded-full shrink-0"></span>
                       {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-[#FF0080]/5 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-[#FF0080]/50 text-xs uppercase tracking-[0.3em] font-bold block mb-4">03 // The Work</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold italic">Selected Projects</h2>
            </div>
            <p className="max-w-md text-stone-500 text-sm md:text-right">
              A collection of projects that I've worked on during high school, ranging from 
              web development to scientific research.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => {
              const Content = (
                <>
                  <div className="aspect-video bg-neutral-900 border border-white/5 rounded-2xl mb-6 overflow-hidden relative flex items-center justify-center">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_30%,#FF0080_0%,transparent_50%)]"></div>
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <Code size={48} className="text-neutral-800 group-hover:text-[#FF0080] transition-colors" />
                    )}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink size={20} className="text-[#FF0080]" />
                    </div>
                  </div>
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase font-bold tracking-widest text-[#FF0080]/70 border border-[#FF0080]/20 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-[#FF0080] transition-colors">{project.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{project.description}</p>
                </>
              );

              return (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {Content}
                    </a>
                  ) : (
                    Content
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills / Interests Section */}
      <section className="section-padding bg-black overflow-hidden relative">
        {/* Abstract Background Element */}
        <div className="absolute top-1/2 right-0 w-1/2 h-full bg-[#FF0080]/5 blur-[120px] rounded-full -translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <span className="text-[#FF0080]/50 text-xs uppercase tracking-[0.3em] font-bold block mb-4">04 // Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 italic text-white">Skills & Exploration</h2>
            <div className="flex flex-col md:flex-row justify-center gap-16 text-left">
              <div className="flex-1">
                <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-stone-500">Technical Stack</h4>
                <div className="flex flex-wrap gap-3">
                  {["HTML", "Java", "CSS"].map(skill => (
                    <span key={skill} className="px-5 py-3 bg-neutral-900/50 border border-white/5 rounded-2xl text-sm font-medium hover:border-[#FF0080] transition-colors text-stone-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-stone-500">Design & Soft Skills</h4>
                <div className="flex flex-wrap gap-3">
                  {["Graphic Design", "Public Speaking", "Team Leadership"].map(skill => (
                    <span key={skill} className="px-5 py-3 bg-neutral-900/50 border border-white/5 rounded-2xl text-sm font-medium hover:border-[#FF0080] transition-colors text-stone-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="section-padding bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#FF0080]/50 text-xs uppercase tracking-[0.3em] font-bold block mb-4 italic">Next Chapter</span>
          <h2 className="text-5xl md:text-7xl font-serif font-medium mb-12 tracking-tight text-white">
            Ready to <span className="italic text-[#FF0080]">collaborate</span>?
          </h2>
          <p className="text-stone-500 mb-12 max-w-lg mx-auto leading-relaxed">
            I'm always looking for new opportunities to learn and build. 
            Whether you have a question or just want to say hi, my inbox is always open.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-20 text-sm font-medium uppercase tracking-widest">
            <a href="mailto:aokimaffe@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-[#FF0080] text-black rounded-full hover:scale-105 transition-transform font-bold">
              <Mail size={16} /> Email Me
            </a>
            <div className="hidden md:block w-12 h-px bg-white/10"></div>
            <div className="text-stone-500 transition-colors">
              Contact : 09777086386
            </div>
          </div>

          <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-stone-600 font-bold">
            <p>© 2026 Maffe Aoki • Portfolio</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Design Details</a>
              <a href="#root" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Back to Top</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
