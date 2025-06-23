import { motion } from "framer-motion";
import "./Skills.css";
import {
  FaJs,
  FaReact,
  FaVuejs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaNpm,
  FaYarn,
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiRedux, SiVite } from "react-icons/si";
import { BsPhone } from "react-icons/bs";

const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: <FaJs className="icon js" /> },
    { name: "TypeScript", icon: <SiTypescript className="icon ts" /> },
    { name: "HTML", icon: <FaHtml5 className="icon html" /> },
    { name: "CSS", icon: <FaCss3Alt className="icon css" /> },
    { name: "SCSS", icon: <FaCss3Alt className="icon scss" /> },
    { name: "Git", icon: <FaGitAlt className="icon git" /> },
    { name: "React", icon: <FaReact className="icon react" /> },
    { name: "Redux Toolkit", icon: <SiRedux className="icon redux" /> },
    { name: "React Router", icon: <FaReact className="icon router" /> },
    { name: "Next.js", icon: <SiNextdotjs className="icon next" /> },
    { name: "React Native", icon: <BsPhone className="icon native" /> },
    { name: "Vue", icon: <FaVuejs className="icon vue" /> },
    { name: "GitHub", icon: <FaGithub className="icon github" /> },
    { name: "Figma", icon: <FaFigma className="icon figma" /> },
    { name: "Vite", icon: <SiVite className="icon vite" /> },
    { name: "Yarn", icon: <FaYarn className="icon yarn" /> },
    { name: "npm", icon: <FaNpm className="icon npm" /> },
    {
      name: "Адаптивная верстка",
      icon: <div className="icon responsive">↔️</div>,
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1> My Skills</h1>
      </motion.h2>

      <div className="skills-container">
        <motion.div
          className="skills-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={`skill-${index}`}
              className="skill-card"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
