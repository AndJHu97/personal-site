import React, { useState, useEffect } from 'react';
import '../Style/Card.css'; // Optional: For custom styling

interface CardProps {
  title: string;
  description: string;
  image?: string; // Optional: If you want to display an image
  link?: string;  // Optional: If you want to add a link
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, image, link, onClick }) => {
  const [backSide, setBackSide] = useState(false); // To track the flip state
  const [clickTimeout, setClickTimeout] = useState<NodeJS.Timeout | null>(null); // Store the timeout
  console.log("Card image: ", image ? image : "");
  // Handle double-click: flip the card and prevent single-click
  const handleDoubleClick = () => {
    setBackSide(!backSide); // Toggle flip state
    //if single click already, then senses it and then destroy it
    if (clickTimeout) {
      clearTimeout(clickTimeout); // Clear the timeout to prevent the single-click event
      setClickTimeout(null); // Reset timeout state
    }
  };

  // Handle single-click: Trigger onClick prop if not a pending double-click
  const handleClick = () => {
    // If timeout is already set, don't do anything (it will be a part of the double-click detection)
    if (clickTimeout) {
      return;
    }

    // Set a timeout to determine if this click is a single-click or part of a double-click
    const timeout = setTimeout(() => {
      if (onClick) {
        onClick(); // Trigger the single-click action
      }
      setClickTimeout(null); // Reset timeout state after single-click action
    }, 200); // 200ms threshold to differentiate between single and double-click

    setClickTimeout(timeout); // Save timeout ID to prevent triggering single-click too early
  };

  useEffect(() => {
    console.log("flipped: " + !backSide);
  }, [backSide]);

  return (
    <div
      className={`card ${backSide ? 'flipped' : ''}`}
      onClick={handleClick} // Trigger single-click onClick handler
      onDoubleClick={handleDoubleClick} // Handle double-click for flip
    >
      <div className={`card-front ${backSide ? 'flipped' : ''}`}>
        {image && <img src={image} alt={title} className="card-image" />}
        <button>More Info</button>
      </div>
      <div className={`card-back ${!backSide ? 'flipped' : ''}`}>
        <div className="card-back-content">
          <h3 className="card-back-title">Back of {title}</h3>
          <p className="card-back-description">This is the backside of the card.</p>
        </div>
        <button>More Info</button>
      </div>
    </div>
  );
};

export default Card;
