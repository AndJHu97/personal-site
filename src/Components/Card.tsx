// src/components/Card.tsx

import React, { useState } from 'react';
import '../Style/Card.css'; // Optional: For custom styling

interface CardProps {
  title: string;
  description: string;
  image?: string; // Optional: If you want to display an image
  link?: string;  // Optional: If you want to add a link
}

const Card: React.FC<CardProps> = ({ title, description, image, link }) => {
  const [flipped, setFlipped] = useState(false); // To track the flip state

  const handleClick = () => {
    setFlipped(!flipped); // Toggle flip state when the card is clicked
  };

  return (
    <div className={`card-container ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className={`card ${flipped ? 'flipped' : ''}`}>
        <div className={`card-front ${flipped ? 'flipped' : ''}`}>
          {image && <img src={image} alt={title} className="card-image" />}
          <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
                Learn More
              </a>
            )}
          </div>
        </div>
        <div className={`card-back ${!flipped ? 'flipped' : ''}`}>
          <div className="card-back-content">
            <h3 className="card-back-title">Back of {title}</h3>
            <p className="card-back-description">This is the backside of the card.</p>
            {/* Add other content for the backside of the card */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
