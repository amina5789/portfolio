import { motion } from "framer-motion";
import "./Hero.css";
import girl from "../../assets/img/Banner.png";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Hero = () => {
  const socialIcons = [
    { icon: <FaGithub />, url: "https://github.com/amina5789" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/amina-merzamedova-89a36435b/" },
    { icon: <HiMail />, url: "mailto:merzamedovaa@gmail.com" },
    { icon: <FaTelegram />, url: "https://t.me/aminaa_me" }
  ];

  return (
    <section id="personal" className="hero-section">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-text"
        >
          <h1 className="hero-title">
            <span className="greeting">Hello I'am</span>
            <span className="name">Amina</span>
          </h1>

          <h2 className="hero-subtitle">Frontend Developer</h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Меня зовут Амина, и я превращаю идеи в живые, отзывчивые и доступные
            интерфейсы. Каждая строка моего кода — это не просто синтаксис, а
            способ рассказать историю, сделать продукт понятнее, а
            взаимодействие с ним — приятнее. Я не просто верстаю страницы — я
            проектирую впечатления. От первой кнопки до последнего анимационного
            штриха — всё должно работать, выглядеть и ощущаться идеально.
          </motion.p>

          {/* Соц-иконки с анимациями */}
          <motion.div 
            className="social-icons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {socialIcons.map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1, color: "#22d3ee" }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="social-icon"
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="alternative-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img src={girl} alt="girl" className="girlImg" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;