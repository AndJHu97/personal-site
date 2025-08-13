// src/App.tsx
import Img0 from "../Images/Card_Covers/0.png";
import React, { useState, useEffect } from 'react';
import Deck from '../Components/Deck';
import '../Style/Main.css';

const App: React.FC = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(1);

  // Define the cards
  const cards = [
    {
      title: "Personality Predictor",
      image: Img0,
      description: "Learn more about my background, projects, and goals.",
      link: "/Personality-Predictor"
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
        <h1>Feel Free To Meander Around</h1>
        <h2>andrew_john_hu</h2>
        <div className="cards-container"
        >
          <div className = "card-wrapper" style={{
              transform: `translateX(${(currentCardIndex  - 1)  * -100}%)`, // Adjust the translation based on the current card
            }}
          >
            <Deck cards = {cards} />
          </div>
         
          <div className = "card-wrapper" style={{
              transform: `translateX(${(currentCardIndex  - 1)  * -100}%)`, // Adjust the translation based on the current card
            }}
          >
            <Deck cards = {cards} />
          </div>

          <div className = "card-wrapper" style={{
              transform: `translateX(${(currentCardIndex  - 1)  * -100}%)`, // Adjust the translation based on the current card
            }}
          >
            <Deck cards = {cards} />
          </div>
          
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
