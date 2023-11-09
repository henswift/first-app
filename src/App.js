import './App.css';
import GiftCard from './components/GiftCard';

function App() {

  const appleFanGifts = [
    {
      name: 'AirPods Pro',
      price: '$249', 
    },
    {
      name: 'AirPods Max',
      price: 599, 
    },
    {
      name: 'Apple Watch Series 9',
      price: '$399', 
    },
    {
      name: 'iPhone 15 Pro Max',
      price: '$799',
    },
    {
      name: 'Apple Gift Card',
      price: '$10,000', 
    },
    {
      name: 'iPad',
      price: 900, 
    },
    {
      name: 'HomePod Mini',
      price: 99, 
    },
    {
      name: 'Macbook Pro - M3 Max',
      price: '$3999', 
    }
  ];
  
  
  
  const showGifts = appleFanGifts.map(gift => {
    
    if (gift.price > 500) return null;

    return (
      <>
      <GiftCard key={gift} name={gift.name} price={gift.price} />
      <h2>Please santa! </h2>
      </>
      
    )
  }
);

  return (
    <div className="App-header">
      My first Application
      {showGifts}
    </div>
  );
}

export default App;
