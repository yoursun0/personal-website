import { CVData } from "./types";

export const cvData: CVData = {
  name: "Helic, Leung Ming Lam",
  title: "Visionary IT Manager & Technical Lead",
  email: "leunghelic@gmail.com",
  phone: "(852) 61573428",
  location: "Hong Kong",
  objective: "To leverage my diverse skills, extensive experience, and advanced technical expertise to develop innovative IT solutions, optimize procedural efficiency, and exceed business objectives as a visionary IT Manager.",
  skills: [
    {
      name: "Infrastructure & Architecture",
      skills: ["AWS", "Kubernetes", "Docker", "Kafka", "Helm/Chart", "CI/CD pipelines"]
    },
    {
      name: "Risk Management",
      skills: ["Transaction Monitoring", "ThreatMatrix screening", "eKYC", "Fraud detection"]
    },
    {
      name: "Backend Development",
      skills: ["Java", "Springboot", "Maven", "Gradle", "RESTful APIs", "Oracle", "Sybase", "Postgres"]
    },
    {
      name: "Frontend Development",
      skills: ["HTML5", "CSS3", "Angular", "ReactJS", "TypeScript", "Native mobile or hybrid"]
    }
  ],
  experience: [
    {
      company: "Mox Bank Ltd.",
      role: "Technical Tribe Lead of Card and Lending",
      period: "Jul 2021 to Present",
      location: "Hong Kong",
      highlights: [
        "Provided strategic leadership to a diverse team of ~35 engineers across six product squads located in four countries.",
        "Conceptualized and implemented complex projects such as web-based KYC onboarding API, IAMSmart integration, and Feedzai transaction monitoring.",
        "Spearheaded cross-tribe collaboration on pivotal initiatives including multi-CRA platform implementation and Banking OpenAPI InterBank Data transfer (IADS).",
        "Reduced vendor inefficiencies by actively evaluating third-party risk management and cloud governance.",
        "Championed talent acquisition, launching Engineer Associate/Graduate Trainee programs with high conversion success rate."
      ]
    },
    {
      company: "Mox Bank Ltd.",
      role: "Technical Lead (Senior Staff Engineer)",
      period: "Jan 2019 to Jun 2021",
      location: "Hong Kong",
      highlights: [
        "Designed and developed an advanced card processor system from the ground up leveraging Springboot microservices within Kubernetes/Docker.",
        "Led a high-performing team of eight engineers, defining system architecture and implementing robust code analysis.",
        "Played a pivotal role in launching the bank's virtual card features and Asia's first PANless Mastercard Debit Plus card.",
        "Streamlined system scalability by developing features to support multi-transaction capabilities and real-time cashback rebate calculations."
      ]
    },
    {
      company: "Zwoop Ltd.",
      role: "System Analyst",
      period: "Feb 2017 to Nov 2018",
      location: "Hong Kong",
      highlights: [
        "Developed backend services for a consumer-based e-commerce aggregator using Java8 Spring-boot.",
        "Orchestrated service containers via REST APIs and Kafka message pipelines.",
        "Enabled Jenkins & Sonarqube for CI/CD regression tests.",
        "Implemented a chrome browser extension for web element identification and ML training sample collection."
      ]
    },
    {
      company: "PCCW Global",
      role: "Business Analyst",
      period: "Aug 2015 to Feb 2017",
      location: "Hong Kong",
      highlights: [
        "Revamped PCCW Global ERP and CRM system (Insight 2.0) based on ESB web services and AngularJS.",
        "Performed technology evaluation for adopting AngularJS and Bootstrap to replace BackboneJS.",
        "Proposed system UI / UX design, constructing interactive HTML5 prototypes."
      ]
    },
    {
      company: "Master Concept (Hong Kong) Ltd.",
      role: "Senior Solution Consultant",
      period: "Oct 2012 to Aug 2015",
      location: "Hong Kong",
      highlights: [
        "Led development of technical proposals and POCs for enterprise and government IT tenders.",
        "Delivered a web-based evaluation system for OGCIO using Spring framework.",
        "Evaluated and implemented advanced front-end frameworks such as AngularJS and Bootstrap."
      ]
    },
    {
      company: "ecVision Ltd.",
      role: "Software Engineer",
      period: "Oct 2011 to Sep 2012",
      location: "Hong Kong",
      highlights: [
        "Developed a J2EE-based web portal for maintain post-production business logic maintenancein garment industry.",
        "Implemented customized modules for evaluating costing price and generating jasper reports.",
        "Negotiated with clients on project specifications and requirements, arranged project schedules and collaborated with product support."
      ]
    }
  ],
  education: [
    {
      degree: "Master (MPhil.) in Computer Science and Engineering",
      institution: "The Chinese University of Hong Kong",
      period: "2009 to 2011",
      details: "Cumulative GPA: 3.8/4.0. Research specializing in quantum algorithm design, communication complexity and game theory."
    },
    {
      degree: "Bachelor of Science in Physics",
      institution: "The Chinese University of Hong Kong",
      period: "2005 to 2009",
      details: "Upper Second-Class Honor"
    }
  ],
  qualifications: [
    { year: "2016", name: "Nielsen Norman Group UX Certification" },
    { year: "2016", name: "BSI ISO/IEC20000-1:2011 IT Service Management Certificate" },
    { year: "2015", name: "Accredited KM Consultant of Knowledge Associates Cambridge" },
    { year: "2014", name: "APMG Agile Project Management Foundation" }
  ],
  publications: [
    {
      title: "Tight bounds on the randomized communication complexity of symmetric XOR functions in SMP model",
      details: "8th Annual Conference on Theory and Applications of Models of Computation (held at Jan 24 Tokyo, Japan)",
      authors: "Ming Lam Leung, Shengyu Zhang, Yang Li",
      link: "https://arxiv.org/abs/1101.4555"
    },
    {
      title: "Quantum Communication Complexity and Evolutionary Strategy Dynamics",
      details: "Master Thesis, Computer Science and Engineering department of The Chinese University of Hong Kong",
      authors: "Ming Lam Leung"
    }
  ]
};
