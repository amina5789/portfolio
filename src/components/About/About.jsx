import { motion } from "framer-motion";
import "./About.css";
import aboutgirl from "../../assets/icon/girlAbout.svg";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div>
        <img src={aboutgirl} alt="" />
      </div>
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* О себе */}
        </motion.h2>

        <motion.div
          className="about-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="about-text">
            Я — frontend-разработчик с уверенными знаниями JavaScript,
            TypeScript, React и Redux Toolkit. Умею быстро осваивать новые
            технологии, пишу чистый, читаемый и поддерживаемый код. В работе
            особое внимание уделяю удобству и качеству пользовательского
            интерфейса.
          </p>

          <p className="about-text">
            Имею опыт создания адаптивных веб-приложений с использованием
            современных фреймворков и инструментов, таких как Next.js, React
            Router, Vite и SCSS. Работала с системами контроля версий (Git,
            GitHub), макетами из Figma, а также имею базовые знания Vue и опыт в
            React Native.
          </p>

          <p className="about-text">
            Заинтересована в развитии в профессиональной команде, где можно
            обмениваться опытом, решать интересные задачи и расти как
            специалист.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
