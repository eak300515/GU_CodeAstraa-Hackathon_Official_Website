import React from 'react';
import "./../styles/Events.css"

const events = [
  { 
    title: 'Blockchain and Web3 ⛓️‍💥', 
    description: 'Develop a decentralized magic ledger to store spells securely on the blockchain and prevent Dark Wizards from tampering with history!', 
    image: "/events/hat.jpg" 
  },
  { 
    title: 'AI & Machine Learning 🏆', 
    description: 'Build an AI-powered spell recommendation system that predicts the best spell for duels based on past wizard battles!', 
    image: "./src/assets/events/aiml.jpeg"  
  },
  { 
    title: 'Sustainability & Climate🗺️', 
    description: 'Code a predictive model that helps Hogwarts reduce magical energy waste and create a sustainable wizarding world.', 
    image: "./src/assets/events/map.webp"  
  },
  { 
    title: 'Fintech & Business Solutions ⚔️', 
    description: 'Develop a wizard-friendly fintech solution that helps students at Hogwarts manage their Galleons using smart budgeting and AI-driven investments.', 
    image: "./src/assets/events/patronus.jpeg"  
  },
  { 
    title: 'Healthcare & Medtech 🖌️', 
    description: 'Create an AI-driven spellbook for Healers that suggests the best potion or charm for any magical ailment.', 
    image: "./src/assets/events/spell.jpg"  
  },
  { 
    title: 'Edtech & Learning 🎩', 
    description: 'Design an interactive learning platform that uses AR & AI to make wizard training more immersive and engaging.', 
    image: "./src/assets/events/dark-arts.jpg"  
  },
  { 
    title: 'Cybersecurity & Privacy 🔒', 
    description: 'Build a cybersecurity defense system that prevents unauthorized access to the Room of Requirement using encryption and AI authentication.', 
    image: "./src/assets/events/cyber.jpg"  
  },
  { 
    title: 'Open Innovation ✨', 
    description: 'Bring your most innovative ideas to life—whether it’s a next-gen Marauder’s Map, a smart wand, or a groundbreaking tech solution!', 
    image: "./src/assets/events/wizard_code.webp"  
  },
  
];

const Events = () => {
  return (
    <section className="events-bg min-h-screen flex justify-center items-center px-5">
      <div className="tech-frame-alt p-8 w-full max-w-7xl">
        <h2 className="section-title text-center">Know Your Spell</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="glass-card group">
              <div
                className="card-image"
                style={{
                  backgroundImage: `url(${event.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="card-content">
                <h3 className="card-title">{event.title}</h3>
                <p className="card-description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
