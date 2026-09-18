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

export interface SkillItem {
  name: string;
  level: 'Intermediate' | 'Beginner';
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: SkillItem[];
}

export interface Experience {
  position: string;
  company: string;
  location: string;
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
  eyebrow: "Hello, I'm Madhan",
  title: "Software Engineer",
  subtitle: "Full-Stack Developer",
  institution: "PSG College of Technology, Coimbatore",
  degree: "B.Tech in Information Technology",
  location: "Salem, Tamil Nadu, India",
  email: "m.madhan0401@gmail.com",
  phone: "+91 6374837044",
  linkedin: "https://www.linkedin.com/in/madhan-murugan-3b908537b/",
  github: "https://github.com/madhan0401",
  leetcode: "#",
  geeksforgeeks: "#",
  resumePath: "/Madhan-M-Resume.pdf",
  bioShort: "Final-year B.Tech Information Technology student at PSG College of Technology with knowledge of Python, Java, SQL, Full-Stack Development, and Data Structures & Algorithms. Passionate about building software, solving problems, and continuously learning new technologies.",
  bioDetailed: "I am a B.Tech Information Technology student at PSG College of Technology with a strong interest in software engineering and full-stack development. I enjoy building practical web applications, working with APIs, exploring backend technologies, and improving my problem-solving skills through Data Structures and Algorithms."
};

// STRICT SKILL PROFICIENCY: ONLY Intermediate and Beginner. No Advanced or Expert!
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "PROGRAMMING LANGUAGES",
    iconName: "Code2",
    skills: [
      { name: "Python", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "Java", level: "Beginner" }, // Explicit: Java (Basic) -> Beginner
      { name: "SQL", level: "Intermediate" }
    ]
  },
  {
    title: "FRONTEND DEVELOPMENT",
    iconName: "Layout",
    skills: [
      { name: "HTML5", level: "Intermediate" },
      { name: "CSS3", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Intermediate" },
      { name: "React", level: "Intermediate" },
      { name: "TypeScript", level: "Intermediate" }
    ]
  },
  {
    title: "BACKEND & APIs",
    iconName: "Server",
    skills: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Express.js", level: "Intermediate" },
      { name: "REST APIs", level: "Intermediate" },
      { name: "OpenAPI Specification", level: "Intermediate" }
    ]
  },
  {
    title: "DATABASES",
    iconName: "Database",
    skills: [
      { name: "MySQL", level: "Intermediate" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "Supabase", level: "Intermediate" }
    ]
  },
  {
    title: "DEVELOPER TOOLS",
    iconName: "Wrench",
    skills: [
      { name: "Git", level: "Intermediate" },
      { name: "GitHub", level: "Intermediate" },
      { name: "VS Code", level: "Intermediate" },
      { name: "Postman", level: "Intermediate" },
      { name: "Terraform", level: "Beginner" } // Explicit: Terraform -> Beginner
    ]
  },
  {
    title: "COMPUTER SCIENCE CORE",
    iconName: "Cpu",
    skills: [
      { name: "Data Structures & Algorithms", level: "Intermediate" },
      { name: "Object-Oriented Programming", level: "Intermediate" },
      { name: "DBMS", level: "Intermediate" },
      { name: "Operating Systems", level: "Intermediate" },
      { name: "Computer Networks", level: "Intermediate" }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    position: "Software Development Intern",
    company: "A2 Ventures (Hydrozen.io & Nitrozen.io)",
    location: "Coimbatore, Tamil Nadu",
    locationType: "Remote",
    duration: "December 2025 – April 2026",
    description: "Contributed to API standardization, SDK generation, and Terraform provider development during a remote software development internship.",
    responsibilities: [
      "Converted REST APIs into standardized OpenAPI specifications",
      "Improved API documentation readability and schema completeness",
      "Generated SDKs in Go, Python, and JavaScript",
      "Worked with Go, Python and JavaScript for automated code generation",
      "Developed Terraform providers for Infrastructure-as-Code workflows",
      "Improved developer workflows and deployment pipelines",
      "Worked with Git and Agile practices"
    ],
    technologies: ["OpenAPI", "Go", "Python", "JavaScript", "Terraform", "Git", "Agile"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "campuscare-hub",
    title: "CampusCare Hub",
    tagline: "Campus Grievance Management Portal",
    description: "Developed a role-based campus grievance management portal for complaint reporting, tracking and management.",
    featured: true,
    category: "fullstack",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Supabase"],
    features: [
      "Role-based grievance management system for students, staff, and admin",
      "Complaint tracking pipeline with status updates",
      "Automated task assignment to designated departments",
      "QR-based reporting for instant issue logging",
      "Analytics dashboard for resolution metrics",
      "Responsive user interface designed for mobile and web",
      "Supabase authentication with secure role permissions",
      "Supabase database integration with structured relational schema"
    ],
    githubUrl: "#", // Placeholder as specified
    liveUrl: "#"
  },
  {
    id: "api-sdk-automation",
    title: "API Standardization & SDK Development",
    tagline: "API Engineering & Infrastructure-as-Code",
    description: "Developed during a four-month Software Development Internship at A2 Ventures.",
    featured: false,
    category: "api",
    technologies: ["OpenAPI", "Go", "Python", "JavaScript", "Terraform"],
    architectureAvailable: true,
    features: [
      "Converted REST APIs of Hydrozen.io and Nitrozen.io into standardized OpenAPI specifications",
      "Generated SDKs in Go programming language",
      "Generated SDKs in Python with async client support",
      "Generated SDKs in JavaScript for frontend & Node integration",
      "Developed Terraform providers to automate cloud infrastructure provisioning",
      "Supported Infrastructure-as-Code workflows"
    ],
    githubUrl: "#",
    liveUrl: undefined
  },
  {
    id: "recipe-recommendation",
    title: "Recipe Recommendation Website",
    tagline: "Full-Stack Culinary Discovery Web App",
    description: "Built a full-stack recipe recommendation website using HTML, CSS, JavaScript, Node.js and Express.js.",
    featured: false,
    category: "web",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "Spoonacular API"],
    features: [
      "Recipe recommendations based on ingredient availability and user preferences",
      "Recipe search with ingredient filters",
      "Step-by-step cooking instructions with ingredient breakdowns",
      "High-resolution recipe images and nutritional stats",
      "Spoonacular API integration",
      "Backend API integration with Express.js routing"
    ],
    githubUrl: "#",
    liveUrl: "#"
  }
];

export const ACHIEVEMENTS = [
  {
    metric: "250+",
    label: "Coding Problems Solved",
    description: "Across LeetCode and GeeksforGeeks platforms"
  },
  {
    metric: "200+",
    label: "LeetCode",
    description: "Algorithmic problem solving and data structures"
  },
  {
    metric: "50+",
    label: "GeeksforGeeks",
    description: "Core computer science and DSA fundamentals"
  },
  {
    metric: "3+",
    label: "Full-Stack Web Applications",
    description: "Practical end-to-end web applications built"
  },
  {
    metric: "4 Months",
    label: "Software Internship",
    description: "Remote internship at A2 Ventures"
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    institution: "PSG College of Technology",
    degree: "B.Tech in Information Technology",
    duration: "August 2024 – Present",
    grade: "CGPA: 6.77/10",
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
    description: "Building responsive, modern full-stack web applications with React, Node.js, Express, databases, and RESTful APIs.",
    capabilities: ["React & TypeScript", "Node.js & Express APIs", "Database Schemas", "Modern CSS & Tailwind"]
  },
  {
    title: "Data Analytics",
    iconName: "BarChart3",
    description: "Analyzing datasets, constructing visual dashboards, writing optimized SQL queries, and processing information using Python.",
    capabilities: ["SQL Query Optimization", "Python Data Analytics", "Visual Metrics & Dashboards", "Data Modeling"]
  }
];
