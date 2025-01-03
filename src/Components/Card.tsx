// src/components/Card.tsx

import React from 'react';
import '../Style/Card.css'; // Optional: For custom styling

interface CardProps {
  title: string;
  description: string;
  image?: string; // Optional: If you want to display an image
  link?: string;  // Optional: If you want to add a link
}

const Card: React.FC<CardProps> = ({ title, description, image, link }) => {
  return (
    <div className="card">
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
  );
};

export default Card;
