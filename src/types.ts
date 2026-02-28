export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Publication {
  title: string;
  details: string;
  authors?: string;
  link?: string;
}

export interface CVData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  objective: string;
  skills: SkillCategory[];
  experience: Experience[];
  education: Education[];
  qualifications: { year: string; name: string }[];
  publications: Publication[];
}
