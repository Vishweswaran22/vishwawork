import { PROFILE } from "./data";

const RESUME = `S VISHWESWARAN
Full Stack Developer | B.Com (IT) Graduate (2025)
${PROFILE.email} | ${PROFILE.phone} | ${PROFILE.location}
LinkedIn: ${PROFILE.linkedin}

CAREER OBJECTIVE
Passionate Full Stack Developer seeking to build modern, scalable and user-friendly
web applications while contributing to organizational success.

EDUCATION
- Bachelor of Commerce (Information Technology), Yadava College, 2022-2025 (59%)
- Master in Full Stack Development, FITA Academy - Successfully Completed

EXPERIENCE
Image Quality Auditor - SBL, ELCOT IT Park, Madurai (July 2025 - July 2026)
- Performed image quality verification and auditing
- Ensured image accuracy and maintained quality standards
- Reviewed processed digital images
- Worked with teams to improve workflow efficiency
- Maintained high levels of precision and consistency

SKILLS
Frontend: HTML5, CSS3, JavaScript, React.js
Backend: Java, Spring Boot, Python (Basics)
Database: SQL, MySQL
Tools: Git, GitHub
Soft Skills: Problem Solving, Communication

PROJECT
Attendance Management System - HTML5, CSS3, JavaScript, Spring Boot, SQL
Web-based system that simplifies attendance tracking and record management.
`;

export function downloadResume() {
  const blob = new Blob([RESUME], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "S-Vishweswaran-Resume.txt";
  a.click();
  URL.revokeObjectURL(url);
}
