import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="page-header">
          <h1>Контакты</h1>
          <p>Свяжитесь с нами для получения дополнительной информации</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Контактная информация</h2>
            
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h4>Адрес</h4>
                <p>г. Москва, ул. Зоологическая, д. 1</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-details">
                <h4>Телефоны</h4>
                <p>Справки: +7 (123) 456-78-90</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Напишите нам</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Имя *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Ваше имя"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Ваш email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Сообщение *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Ваше сообщение..."
                />
              </div>

              <button type="submit" className="submit-button">
                <span>Отправить сообщение</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;