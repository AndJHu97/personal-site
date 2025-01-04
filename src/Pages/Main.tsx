// src/App.tsx

import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import '../Style/Main.css';

const App: React.FC = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(1);

  // Define the cards
  const cards = [
    {
      title: "About Me",
      description: "Learn more about my background, projects, and goals.",
      link: "/about"
    },
    {
      title: "Projects",
      description: "Check out the exciting projects I've been working on.",
      link: "/projects"
    },
    {
      title: "Contact",
      description: "Get in touch with me for collaborations or inquiries.",
      link: "/contact"
    }
  ];

  // Function to go to the next card
  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };


  // Function to go to the previous card
  const prevCard = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );

    
  };

  return (
    <div className="background">
      <div className="main-section">
        <h1>Andrew Hu</h1>
        <h2>round 'n round we go</h2>
        <div className="cards-container"
        >
         
            {cards.map((card, index) => (
                 <div
                 className="card-wrapper"
                 key = {index}
                 style={{
                   transform: `translateX(${(currentCardIndex  - 1)  * -100}%)`, // Adjust the translation based on the current card
                 }}
               >
              <Card
                key={index}
                title={card.title}
                description={card.description}
                link={card.link}
              />
              </div>
            ))}
          
          {/* Swipe Buttons */}
          <button className="swipe-button left" onClick={prevCard}>
            ←
          </button>
          <button className="swipe-button right" onClick={nextCard}>
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
