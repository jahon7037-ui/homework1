import HeroSection from '../components/HeroSection';
import AnimalCard from '../components/AnimalCard';
import { animals } from '../data/animals';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredAnimals = animals.slice(0, 4);

  return (
    <div className="home-page">
      <HeroSection />

      <section className="section featured-animals">
        <div className="container">
          <div className="section-header">
            <h2>Наши звездные обитатели</h2>
            <Link to="/animals" className="view-all">Все животные →</Link>
          </div>
          <div className="animals-grid">
            {featuredAnimals.map(animal => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>
        </div>
      </section>

      <section className="section visitor-info" id="visitor-info">
        <div className="container">
          <h2>Информация для посетителей</h2>
          <div className="info-cards">
            <div className="info-card">
              <h3>🕘 Часы работы</h3>
              <ul>
                <li><strong>Пн-Пт:</strong> 9:00 - 20:00</li>
                <li><strong>Сб-Вс:</strong> 8:30 - 21:00</li>
                <li>Кассы закрываются за час до закрытия</li>
              </ul>
            </div>
            <div className="info-card">
              <h3>💰 Стоимость билетов</h3>
              <ul>
                <li><strong>Взрослые:</strong> 800 руб.</li>
                <li><strong>Дети (3-14 лет):</strong> 400 руб.</li>
                <li><strong>Студенты/Пенсионеры:</strong> 500 руб.</li>
                <li><strong>До 3 лет:</strong> Бесплатно</li>
              </ul>
            </div>
            <div className="info-card">
              <h3>📍 Как добраться</h3>
              <p>г. Москва, ул. Зоологическая, д. 1</p>
              <ul>
                <li><strong>Метро:</strong> ст. "Зоопарк"</li>
                <li><strong>Автобус:</strong> № 123, 456</li>
                <li><strong>Парковка:</strong> 500 мест</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;