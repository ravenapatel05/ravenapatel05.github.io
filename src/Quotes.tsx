import React, { useState, useEffect } from 'react';
import './Quotes.scss';

// const quotes = [
//   `Ravena, remember that life is a journey. Embrace the reds and whites along the way.`,
//   `Every day is a new canvas for you, Ravena. Paint it with the colors of your choice.`,
//   `Just like your favorite food, happiness is a dish best served daily, Ravena.`,
//   `A long walk is a perfect opportunity to find inspiration and serenity, Ravena.`,
//   `Music is the soundtrack to your life, Ravena. Keep listening to your heart's melody.`,
//   `As you watch the stars, remember that you're as magical as any character in Harry Potter, Ravena.`,
//   // Add more personalized quotes here...
// ];

const quotes = [ 
  'LOL NVM 🤣 🫵 🥴 🤷‍♂️'
];

const Quotes: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState<string>(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
    }, 900000); // 15 minutes in milliseconds

    return () => clearInterval(interval);
  }, []);

  return <div className="quote">{currentQuote}</div>;
};

export default Quotes;
