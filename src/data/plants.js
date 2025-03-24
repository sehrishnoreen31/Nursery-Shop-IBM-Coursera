// src/data/plants.js
import monstera from '../images/monstera.jpg'; // Correct relative path
import snake from '../images/snake.jpg'; // Correct relative path
import moneyPlant from '../images/money.png'; // Correct relative path
import aloevera from '../images/aloevera.jpg'; // Correct relative path
import rose from '../images/rose.jpg'; // Correct relative path

export const plants = [
  {
    id: 1,
    name: 'Monstera',
    price: 25,
    image: monstera, // Use the imported image
    category: 'Indoor',
  },
  {
    id: 2,
    name: 'Snake Plant',
    price: 20,
    image: snake, // Use the imported image
    category: 'Indoor',
  },
  {
    id: 3,
    name: 'Money Plant',
    price: 20,
    image: moneyPlant, // Use the imported image
    category: 'Indoor',
  },
  {
    id: 4,
    name: 'Alovera Plant',
    price: 20,
    image: aloevera, // Use the imported image
    category: 'Indoor',
  },
  {
    id: 5,
    name: 'Rose Plant',
    price: 20,
    image: rose, // Use the imported image
    category: 'Outdoor',
  },
  // Add more plants...
];