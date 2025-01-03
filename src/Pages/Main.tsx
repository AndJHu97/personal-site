// src/App.tsx

import React from 'react';
import Card from '../Components/Card';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Welcome to Andrew Hu's Website</h1>
      <div className="cards-container">
        <Card
          title="About Me"
          description="Learn more about my background, projects, and goals."
          
          link="/about"
        />
        <Card
          title="Projects"
          description="Check out the exciting projects I've been working on."
          
          link="/projects"
        />
        <Card
          title="Contact"
          description="Get in touch with me for collaborations or inquiries."
          
          link="/contact"
        />
      </div>
    </div>
  );
};

export default App;
