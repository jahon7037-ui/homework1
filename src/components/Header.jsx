import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/animals', label: 'Животные' },
    { path: '/about', label: 'О зоопарке' },
    { path: '/contact', label: 'Контакты' }
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-icon">🦁</div>
            <div className="logo-text">
              <h1>Большой Городской Зоопарк</h1>
              <p>Основан в 1892 году</p>
            </div>
          </Link>

          <button 
            className="menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Открыть меню"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>

          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink 
                    to={item.path} 
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="header-info">
              <p>🕘 Ежедневно с 9:00 до 20:00</p>
              <p>📞 +7 (123) 456-78-90</p>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;