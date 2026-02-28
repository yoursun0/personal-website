import React from "react";
import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Award, 
  BookOpen, 
  ChevronRight,
  ExternalLink,
  Github,
  Linkedin,
  Cpu,
  ShieldCheck,
  Server,
  Layout
} from "lucide-react";
import { cvData } from "./data";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const SectionTitle = ({ children, icon: Icon }: { children: React.ReactNode; icon: any }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2 bg-primary/10 rounded-lg">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h2 className="text-2xl font-display text-text-primary">{children}</h2>
  </div>
);

const SkillIcon = ({ category }: { category: string }) => {
  switch (category) {
    case "Infrastructure & Architecture": return <Server className="w-5 h-5" />;
    case "Risk Management": return <ShieldCheck className="w-5 h-5" />;
    case "Backend Development": return <Cpu className="w-5 h-5" />;
    case "Frontend Development": return <Layout className="w-5 h-5" />;
    default: return <Cpu className="w-5 h-5" />;
  }
};

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display font-bold text-xl text-primary">Helic Leung</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-text-secondary">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#education" className="hover:text-primary transition-colors">Education</a>
          </div>
          <a 
            href={`mailto:${cvData.email}`}
            className="bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors shadow-sm"
          >
            Contact Me
          </a>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-12 md:pt-20">
        {/* Hero Section */}
        <motion.section 
          id="about"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-display mb-4 text-text-primary leading-tight">
                {cvData.name}
              </h1>
              <p className="text-xl md:text-2xl text-primary font-medium mb-6">
                {cvData.title}
              </p>
              <div className="flex flex-wrap gap-4 mb-8 text-text-secondary">
                <div className="flex items-center gap-2 bg-surface border border-border px-3 py-1.5 rounded-lg text-sm">
                  <Mail className="w-4 h-4" />
                  <span>{cvData.email}</span>
                </div>
                <div className="flex items-center gap-2 bg-surface border border-border px-3 py-1.5 rounded-lg text-sm">
                  <Phone className="w-4 h-4" />
                  <span>{cvData.phone}</span>
                </div>
                <div className="flex items-center gap-2 bg-surface border border-border px-3 py-1.5 rounded-lg text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{cvData.location}</span>
                </div>
              </div>
              <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
                {cvData.objective}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          id="skills"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24"
        >
          <SectionTitle icon={Cpu}>Key Expertise</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cvData.skills.map((category, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="material-card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/5 rounded-lg text-primary">
                    <SkillIcon category={category.name} />
                  </div>
                  <h3 className="text-lg font-display">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3 py-1 bg-background border border-border rounded-full text-xs font-medium text-text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          id="experience"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24"
        >
          <SectionTitle icon={Briefcase}>Professional Journey</SectionTitle>
          <div className="relative">
            <div className="timeline-line left-4" />
            <div className="space-y-12">
              {cvData.experience.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="relative pl-12"
                >
                  <div className="timeline-dot left-2.5" />
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-display text-text-primary">{exp.role}</h3>
                    <span className="text-sm font-medium text-primary bg-primary/5 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-text-secondary font-medium mb-4 flex items-center gap-2">
                    {exp.company} • {exp.location}
                  </p>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex gap-3 text-text-secondary leading-relaxed">
                        <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Education & Qualifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.section 
            id="education"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionTitle icon={GraduationCap}>Education</SectionTitle>
            <div className="space-y-6">
              {cvData.education.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="material-card"
                >
                  <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">
                    {edu.period}
                  </span>
                  <h3 className="text-lg font-display mb-1">{edu.degree}</h3>
                  <p className="text-text-secondary text-sm mb-3">{edu.institution}</p>
                  {edu.details && (
                    <p className="text-sm text-text-secondary italic border-l-2 border-primary/20 pl-3">
                      {edu.details}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionTitle icon={Award}>Certifications</SectionTitle>
            <div className="space-y-4">
              {cvData.qualifications.map((qual, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="flex items-center gap-4 p-4 bg-surface border border-border rounded-xl"
                >
                  <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-primary">{qual.year}</span>
                  </div>
                  <p className="text-sm font-medium text-text-primary leading-snug">
                    {qual.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Publications Section */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24"
        >
          <SectionTitle icon={BookOpen}>Publications & Research</SectionTitle>
          <div className="grid grid-cols-1 gap-6">
            {cvData.publications.map((pub, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="material-card border-l-4 border-l-primary"
              >
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="text-lg font-display">{pub.title}</h3>
                  {pub.link && (
                    <a 
                      href={pub.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-primary/5 rounded-lg text-primary hover:bg-primary/10 transition-colors shrink-0"
                      title="View Publication"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-text-secondary mb-2">{pub.details}</p>
                <div className="flex items-center gap-2 text-xs text-primary font-medium">
                  <span>Authors: {pub.authors}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-surface py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-xl font-display font-bold text-primary mb-2">Helic Leung</h3>
            <p className="text-text-secondary text-sm">Visionary IT Manager & Technical Lead</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-text-secondary hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-text-secondary hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href={`mailto:${cvData.email}`} className="text-text-secondary hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-text-secondary text-xs">
            © {new Date().getFullYear()} Helic Leung. Built with React & Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
}
