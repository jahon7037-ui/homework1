import { useState } from 'react';

const AnimalCard = ({ animal }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status) => {
    const statusMap = {
      'Вымирающий вид': 'status-critical',
      'Находящийся на грани исчезновения': 'status-critical',
      'Уязвимый вид': 'status-vulnerable',
      'Вызывающий наименьшие опасения': 'status-safe'
    };
    return statusMap[status] || 'status-unknown';
  }

  return (
    <div className="animal-card">
      <div className="animal-card-header">
        <img src={animal.image} alt={animal.name} className="animal-image" />
        <div className="animal-card-basic">
          <h3>{animal.name}</h3>
          <p className="scientific-name">{animal.scientificName}</p>
          <div className={`conservation-status ${getStatusColor(animal.conservationStatus)}`}>
            {animal.conservationStatus}
          </div>
        </div>
      </div>

      <div className="animal-card-body">
        <p className="animal-description">{animal.description}</p>
        
        <div className="animal-details">
          <div className="detail-item">
            <span className="detail-label">Среда обитания:</span>
            <span className="detail-value">{animal.habitat}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Питание:</span>
            <span className="detail-value">{animal.diet}</span>
          </div>
        </div>

        {isExpanded && (
          <div className="animal-card-expanded">
            <div className="detail-item">
              <span className="detail-label">Интересный факт:</span>
              <span className="detail-value">{animal.funFact}</span>
            </div>
          </div>
        )}

        <button 
          className="expand-button" 
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          {isExpanded ? (
            <>
              <span>Скрыть детали</span>
              <span>▲</span>
            </>
          ) : (
            <>
              <span>Подробнее</span>
              <span>▼</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default AnimalCard;