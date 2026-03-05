const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="page-header">
          <h1>О нашем зоопарке</h1>
          <p>История, миссия и современные достижения</p>
        </div>

        <section className="section about-history">
          <div className="about-content">
            <div className="about-text">
              <h2>Наша история</h2>
              <p>Большой Городской Зоопарк был основан в 1892 году как небольшой зверинец при Императорском обществе акклиматизации животных и растений.</p>
              <p>Сегодня наш зоопарк занимает территорию в 50 гектаров и является домом для более чем 5000 животных, представляющих 500 видов со всего мира.</p>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="История зоопарка" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;