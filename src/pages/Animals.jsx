import { useState, useEffect } from 'react';
import AnimalCard from '../components/AnimalCard';
import { animals } from '../data/animals';

const Animals = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedHabitat, setSelectedHabitat] = useState('all');
  const [filteredAnimals, setFilteredAnimals] = useState(animals);

  const habitats = ['all', ...new Set(animals.map(animal => animal.habitat))];

  useEffect(() => {
    let result = animals;

    if (searchTerm) {
      result = result.filter(animal => 
        animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        animal.scientificName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        animal.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedHabitat !== 'all') {
      result = result.filter(animal => animal.habitat === selectedHabitat);
    }

    setFilteredAnimals(result);
  }, [searchTerm, selectedHabitat]);

  return (
    <div className="animals-page">
      <div className="container">
        <div className="page-header">
          <h1>Наши животные</h1>
          <p>Более 500 видов со всего мира в естественных условиях обитания</p>
        </div>

        <div className="filters">
          <div className="search-box">
            <span>🔍</span>
            <input
              type="text"
              placeholder="Поиск животных..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="habitat-filter">
            <span>🏞️</span>
            <select 
              value={selectedHabitat} 
              onChange={(e) => setSelectedHabitat(e.target.value)}
            >
              {habitats.map(habitat => (
                <option key={habitat} value={habitat}>
                  {habitat === 'all' ? 'Все среды обитания' : habitat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredAnimals.length > 0 ? (
          <>
            <div className="results-info">
              <p>Найдено животных: <strong>{filteredAnimals.length}</strong></p>
            </div>
            
            <div className="animals-grid">
              {filteredAnimals.map(animal => (
                <AnimalCard key={animal.id} animal={animal} />
              ))}
            </div>
          </>
        ) : (
          <div className="no-results">
            <h3>Животные не найдены</h3>
            <p>Попробуйте изменить параметры поиска</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Animals;