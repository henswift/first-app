import React, { useState } from 'react';
import './App.css';
import GiftCard from './components/GiftCard';

function App() {

  const appleFanGifts = [
    {
      name: 'AirPods Pro',
      price: 249, 
      imageUrl: '/Airpods-Pro.jpg',
    },
    {
      name: 'AirPods Max',
      price: 599, 
      imageUrl: '/Airpods-Max.jpeg',
    },
    {
      name: 'Apple Watch',
      price: 499, 
      imageUrl: '/Apple-Watch.jpeg',
    },
    {
      name: 'iPhone',
      price: 1599,
      imageUrl: '/iPhone.webp',
    },
    {
      name: 'iPad',
      price: 2499, 
      imageUrl: '/iPad-Pro.webp',
    },
    {
      name: 'HomePod Mini',
      price: 99, 
      imageUrl: '/Homepod-Mini.webp',
    },
    {
      name: 'Studio Display',
      price: 1600, 
      imageUrl: '/Studio-Display.jpeg',
    },
    {
      name: 'Macbook Pro',
      price: 6500,
      imageUrl: '/MacBook-Pro.jpg',
    }
  ];
  
  const [displayGifts, setDisplayGifts] = useState([]);

  const handleGoodBoy = () => {
    // Filter gifts where price is less than or equal to 500
    const goodBoyGifts = appleFanGifts.filter(gift => gift.price <= 500);
    setDisplayGifts(goodBoyGifts);
  };

  // Function to handle "No, I'mma bad boy" click
  const handleBadBoy = () => {
    // Filter gifts where price is greater than 500
    const badBoyGifts = appleFanGifts.filter(gift => gift.price > 500);
    setDisplayGifts(badBoyGifts);
  };

  
  const showGifts = appleFanGifts.map(gift => {
    // if (gift.price > 500) return null;
    return (
      <>
      <div className='App'>
        <button onClick={handleGoodBoy}>Yes, I've been good</button>
        <button onClick={handleBadBoy}>No, I'mma bad boy</button>
      </div>
      <div className="gift-container">
        {displayGifts.map(gift => (
          <GiftCard key={gift.name} name={gift.name} price={gift.price} image={gift.imageUrl} />
        ))}
      </div>
    </>
    );
  }
);

  return (
    <>
    <div className="App">
      {showGifts}
    </div>
    </>
  );
}

export default App;
