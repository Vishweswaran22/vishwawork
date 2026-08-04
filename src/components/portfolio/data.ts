export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export const PROFILE = {
  name: "S VISHWESWARAN",
  email: "Vishweswaran22@gmail.com",
  phone: "+91 6369167350",
  location: "Madurai, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/vishweswarans",
};

export const ROLES = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Java Developer",
];

export const STATS = [
  { value: 1, suffix: "+", label: "Years Experience" },
  { value: 1, suffix: "", label: "Project Completed" },
  { value: 100, suffix: "%", label: "Full Stack Certified" },
  { value: 24, suffix: "/7", label: "Open to Opportunities" },
];

export const EDUCATION = [
  {
    title: "Bachelor of Commerce (Information Technology)",
    org: "Yadava College",
    period: "2022 – 2025",
    detail: "Percentage: 59%",
  },
  {
    title: "Master in Full Stack Development",
    org: "FITA Academy",
    period: "Completed",
    detail: "Successfully Completed",
  },
];

export const SKILL_GROUPS = [
  {
    group: "Frontend",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React.js", level: 75 },
    ],
  },
  {
    group: "Backend",
    skills: [
      { name: "Java", level: 80 },
      { name: "Spring Boot", level: 72 },
      { name: "Python (Basics)", level: 55 },
    ],
  },
  {
    group: "Database",
    skills: [
      { name: "SQL", level: 78 },
      { name: "MySQL", level: 75 },
    ],
  },
  {
    group: "Tools & Soft Skills",
    skills: [
      { name: "Git", level: 75 },
      { name: "GitHub", level: 78 },
      { name: "Problem Solving", level: 85 },
      { name: "Communication", level: 88 },
    ],
  },
];

export const SERVICES = [
  {
    icon: "layers",
    title: "Full Stack Web Development",
    text: "Design and develop complete web applications using modern frontend and backend technologies.",
  },
  {
    icon: "monitor",
    title: "Frontend Development",
    text: "Build responsive, interactive, and visually appealing user interfaces using HTML, CSS, JavaScript, and React.",
  },
  {
    icon: "server",
    title: "Backend Development",
    text: "Develop scalable backend systems using Java, Spring Boot, SQL, and MySQL.",
  },
] as const;
