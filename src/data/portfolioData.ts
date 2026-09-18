export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  featured?: boolean;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  architectureAvailable?: boolean;
  category: 'fullstack' | 'api' | 'web';
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export interface Experience {
  position: string;
  company: string;
  locationType: string;
  duration: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  grade: string;
  location: string;
}

export const PERSONAL_INFO = {
  name: "Madhan M",
  title: "Software Engineer | Full-Stack Developer",
  institution: "PSG College of Technology, Coimbatore",
  degree: "B.Tech in Information Technology (Final Year)",
  location: "Salem, Tamil Nadu, India",
  email: "m.madhan0401@gmail.com",
  altEmail: "madhanmurugan0405@gmail.com",
  phone: "+91 6374837044",
  linkedin: "https://www.linkedin.com/in/madhan-murugan-3b908537b/",
  github: "https://github.com/madhan0401",
  resumeFileName: "Madhan_M_Resume.pdf",
  bioShort: "Final-year B.Tech Information Technology student at PSG College of Technology with knowledge of Python, Java, SQL, Full-Stack Development, and Data Structures & Algorithms. Passionate about building software, solving problems, and continuously learning new technologies.",
  bioDetailed: "I am a B.Tech Information Technology student at PSG College of Technology with a strong interest in software engineering and full-stack development. I enjoy building practical web applications, working with APIs, exploring backend technologies, and improving my problem-solving skills through Data Structures and Algorithms."
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    iconName: "Code2",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Java (Basic)", level: "Intermediate" },
      { name: "SQL", level: "Advanced" }
    ]
  },
  {
    title: "Frontend Development",
    iconName: "Layout",
    skills: [
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3 / Tailwind", level: "Advanced" },
      { name: "React", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" }
    ]
  },
  {
    title: "Backend & APIs",
    iconName: "Server",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "REST APIs", level: "Advanced" },
      { name: "OpenAPI Spec", level: "Intermediate" }
    ]
  },
  {
    title: "Databases",
    iconName: "Database",
    skills: [
      { name: "MySQL", level: "Advanced" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "Supabase", level: "Advanced" }
    ]
  },
  {
    title: "Developer Tools",
    iconName: "Wrench",
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "GitHub", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
      { name: "Postman", level: "Advanced" },
      { name: "Terraform (Basic)", level: "Intermediate" }
    ]
  },
  {
    title: "Computer Science Core",
    iconName: "Cpu",
    skills: [
      { name: "Data Structures & Algorithms", level: "Advanced" },
      { name: "Object-Oriented Programming", level: "Advanced" },
      { name: "DBMS", level: "Advanced" },
      { name: "Operating Systems", level: "Intermediate" },
      { name: "Computer Networks", level: "Intermediate" }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    position: "Software Development Intern",
    company: "A2 Ventures — Hydrozen.io & Nitrozen.io",
    locationType: "Remote",
    duration: "December 2025 – April 2026",
    description: "Contributed to API standardization, SDK generation, and Terraform provider development during a remote software development internship.",
    responsibilities: [
      "Standardized REST APIs using OpenAPI specification guidelines.",
      "Improved API documentation readability and completeness.",
      "Generated multi-language SDKs in Go, Python, and JavaScript.",
      "Worked with Go, Python, and JavaScript for automated code generation.",
      "Developed and validated custom Terraform providers for IaC workflows.",
      "Improved developer onboarding and workflow efficiency.",
      "Collaborated using Git version control and Agile development practices."
    ],
    technologies: ["OpenAPI", "Go", "Python", "JavaScript", "Terraform", "Git", "Agile"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "campuscare-hub",
    title: "CampusCare Hub",
    tagline: "Campus Grievance Management Portal",
    description: "Developed a role-based campus grievance management portal for complaint reporting, tracking, and resolution management.",
    featured: true,
    category: "fullstack",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Supabase"],
    features: [
      "Role-based grievance management system for students, staff, and admin",
      "Real-time complaint reporting and status tracking pipeline",
      "Automated task assignment to designated department heads",
      "QR-based quick grievance reporting for instant campus issue logging",
      "Interactive visual analytics dashboard for resolution metrics",
      "Fully responsive modern UI with dark-mode aesthetic",
      "Supabase Authentication with secure role permissions",
      "Supabase Database integration with structured schema"
    ],
    githubUrl: "https://github.com/madhan0401/campuscare-hub", // marked placeholder format as specified
    liveUrl: "https://campuscare-hub.demo.app"
  },
  {
    id: "api-sdk-automation",
    title: "API Standardization & SDK Development",
    tagline: "API Engineering & Infrastructure-as-Code Integration",
    description: "Developed during a four-month Software Development Internship at A2 Ventures for Hydrozen.io & Nitrozen.io platforms.",
    featured: false,
    category: "api",
    technologies: ["OpenAPI", "Go", "Python", "JavaScript", "Terraform"],
    architectureAvailable: true,
    features: [
      "Converted raw REST APIs of Hydrozen.io & Nitrozen.io into standardized OpenAPI 3.0 specs",
      "Generated production-ready SDKs in Go programming language",
      "Generated production-ready SDKs in Python with async support",
      "Generated client SDKs in JavaScript / TypeScript",
      "Developed custom Terraform providers to enable cloud resource provisioning via IaC",
      "Supported Infrastructure-as-Code workflows for automated environment setup"
    ],
    githubUrl: "https://github.com/madhan0401/api-sdk-automation",
    liveUrl: undefined
  },
  {
    id: "recipe-recommendation",
    title: "Recipe Recommendation Website",
    tagline: "Full-Stack Culinary Discovery Web App",
    description: "Built a full-stack recipe recommendation website leveraging Node.js, Express backend, and Spoonacular API.",
    featured: false,
    category: "web",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "Spoonacular API"],
    features: [
      "Smart recipe recommendations based on user dietary preferences and available ingredients",
      "Fast ingredient search with auto-complete and filters",
      "Detailed step-by-step cooking instructions with interactive timer",
      "High-resolution recipe imagery and nutritional breakdowns",
      "Direct integration with Spoonacular API backend service",
      "Express.js middleware routing and error handling"
    ],
    githubUrl: "https://github.com/madhan0401/recipe-recommendation",
    liveUrl: "https://recipe-recommendation.demo.app"
  }
];

export const ACHIEVEMENTS = [
  {
    metric: "250+",
    label: "Coding Problems Solved",
    description: "Across LeetCode and GeeksforGeeks platforms",
    icon: "Code"
  },
  {
    metric: "200+",
    label: "LeetCode Problems",
    description: "Focused on Arrays, Trees, Dynamic Programming, and Graphs",
    icon: "Terminal"
  },
  {
    metric: "50+",
    label: "GeeksforGeeks Problems",
    description: "Strengthening core algorithmic concepts and DSA fundamentals",
    icon: "CheckCircle2"
  },
  {
    metric: "3+",
    label: "Full-Stack Web Applications",
    description: "Production-ready projects with modern frontends & backends",
    icon: "Layers"
  },
  {
    metric: "4 Months",
    label: "Software Internship",
    description: "Hands-on experience with API standardization, SDKs & Terraform",
    icon: "Briefcase"
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    institution: "PSG College of Technology",
    degree: "B.Tech in Information Technology",
    duration: "August 2024 – Present (Final Year)",
    grade: "CGPA: 6.77 / 10",
    location: "Coimbatore, Tamil Nadu"
  },
  {
    institution: "Muthayammal Polytechnic College",
    degree: "Diploma in Computer Engineering",
    duration: "August 2022 – May 2024",
    grade: "Score: 97.5%",
    location: "Namakkal, Tamil Nadu"
  }
];

export const AREAS_OF_INTEREST = [
  {
    title: "Full-Stack Web Development",
    iconName: "Globe",
    description: "Building end-to-end scalable web applications using React, Node.js, Express, databases, and modern UI frameworks with responsive design.",
    topics: ["React / TypeScript", "Node.js & Express", "Database Schema Design", "RESTful APIs & Auth"]
  },
  {
    title: "Data Analytics",
    iconName: "BarChart3",
    description: "Exploring data patterns, building analytical dashboards, processing datasets with SQL and Python to extract actionable engineering insights.",
    topics: ["SQL Queries & Optimization", "Python Data Science Tools", "Visual Dashboards", "Data Modeling"]
  }
];
