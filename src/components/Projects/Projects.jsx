import { useState } from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      number: "01",
      title: "A p o l l o n i a n",
      description:
        " Это полностью реализованный мной интернет-магазин ювелирных украшений. Проект создан с нуля на React и демонстрирует ключевые навыки в разработке пользовательских интерфейсов, работе с компонентной архитектурой, адаптивной верстке и управлении состоянием.",
      githubLink: "https://github.com/amina5789/a-p-o-l-l-o-n-i-a-n",
      deployLink: "https://a-p-o-l-l-o-n-i-a-n.vercel.app/",
      details:
        "Основной функционал : Каталог товаров с карточками украшений и описаниями; Реализация корзины с добавлением/удалением товаров;Фильтрация и сортировка по категориям;Адаптивный дизайн для мобильных и десктопных устройств;Навигация по страницам (React Router);Использование хуков и кастомных компонентов.",
    },
    {
      id: 2,
      number: "02",
      title: "WOMAZING - Интернет магазин одежды",
      description:
        "WOMAZING – современный интернет-магазин женской одежды, разработанный на React с использованием актуальных фронтенд-технологий. Проект включает главную страницу, каталог товаров, корзину покупок и интерактивные элементы интерфейса.",
      githubLink: "https://github.com/amina5789/WOMAZING",
      deployLink: "https://euphoria-shop.demo",
      details:
        "Динамический каталог товаров с фильтрацией и сортировкой .Корзина покупок с сохранением состояния через Context API .Интерактивные слайдеры и галереи товаров .Форма обратной связи с валидацией .Адаптивный дизайн для всех устройств",
    },
    {
      id: 3,
      number: "03",
      title: "Prime Setup – Бизнес-решение для Дубая",
      description: "Поддержка 3 языков (английский, русский)",
      githubLink: "https://github.com/amina5789/prime-setup",
      deployLink: "https://prime-setup-zeta.vercel.app/",
      details:
        "Комплексное веб-решение для иностранных предпринимателей, открывающих бизнес в Дубае. Проект включает: Клиентскую часть: интерактивный гид по юридическим процедурам .Админ-панель: управление заявками клиентов .Бэкенд: обработка данных ",
    },
    {
      id: 4,
      number: "04",
      title:
        "Система управления госпиталем (Fullstack React/Redux), (Проект в активной разработке)",
      description:
        "Веб-приложение для автоматизации процессов корпоративного госпиталя, включающее:Пациентский модуль (запись, история болезней) .       Административную панель (управление персоналом).Медицинскую аналитику",
      githubLink: "https://github.com/amina5789/hospital-admin-copy",
      deployLink:
        "https://hospital-admin-copy.vercel.app/login",
      details:
        "Ключевые функции (реализованные):Система электронной записи пациентов .Личные кабинеты врачей/пациентов .Модуль электронных медкарт .      Генератор отчетов (PDF/Excel)",
    },
  ];

  const openModal = (project) => setActiveProject(project);
  const closeModal = () => setActiveProject(null);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Мои проекты
        </motion.h2>

        <div className="projects-list">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              onClick={() => openModal(project)}
            >
              <div className="project-number">{project.number}</div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Модальное окно */}
      {activeProject && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={closeModal}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>

            <div className="modal-header">
              <span className="modal-number">{activeProject.number}</span>
              <h3 className="modal-title">{activeProject.title}</h3>
            </div>

            <div className="modal-body">
              <p>{activeProject.details}</p>

              <div className="project-links">
                <a
                  href={activeProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FiGithub /> GitHub
                </a>
                <a
                  href={activeProject.deployLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FiExternalLink /> Демо
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
