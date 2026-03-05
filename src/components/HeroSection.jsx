const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h2>Добро пожаловать в Большой Городской Зоопарк</h2>
          <p>Более 500 видов животных со всего мира в естественных условиях обитания</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Видов животных</span>
            </div>
            <div className="stat">
              <span className="stat-number">120</span>
              <span className="stat-label">Годов истории</span>
            </div>
            <div className="stat">
              <span className="stat-number">50</span>
              <span className="stat-label">Программ сохранения</span>
            </div>
          </div>
          <a href="#visitor-info" className="cta-button">Планируйте визит</a>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Животные зоопарка" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection