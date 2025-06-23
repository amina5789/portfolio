import { useState } from 'react';
import { motion } from 'framer-motion';
import './Experience.css';
import { FaBuilding } from 'react-icons/fa';

const Experience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Мой опыт
        </motion.h2>

        <div className="experience-list">
          <motion.div
            className="experience-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={openModal}
          >
            <div className="experience-header">
              <div className="company-icon">
                <FaBuilding />
              </div>
              <div>
                <h3 className="position">Frontend Developer в Metalabs</h3>
                <p className="period">2025 - настоящее время</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Модальное окно */}
      {isModalOpen && (
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
              <div className="modal-icon">
                <FaBuilding />
              </div>
              <div>
                <h3>Frontend Developer в Metalabs</h3>
                <p>2022 - настоящее время</p>
              </div>
            </div>
            
            <div className="modal-body">
              <p>
                В Metalabs я занимаюсь разработкой пользовательских интерфейсов с использованием React, TypeScript и Redux Toolkit. 
                Мои основные обязанности включают создание адаптивных и доступных веб-приложений, оптимизацию производительности 
                и тесное взаимодействие с дизайнерами и бэкенд-разработчиками.
              </p>
              <p>
                Участвую во всех этапах разработки - от проектирования архитектуры до деплоя готового продукта. 
                Особое внимание уделяю качеству кода и пользовательскому опыту.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Experience;