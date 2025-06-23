import { motion } from "framer-motion";
import "./Header.css";
import logo from "../../assets/icon/logo.svg";

const Header = () => {
  const navLinks = [
    { name: "Personal", href: "#personal" },
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Project", href: "#project" },
    { name: "Contact Me", href: "#contact" },
  ];

  return (
    <header className="header-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="logo"
      >
        <img src={logo} alt="logo" />
        Frontend Developer
      </motion.div>

      <nav>
        <ul className="nav-links">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={link.href}>{link.name}</a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
