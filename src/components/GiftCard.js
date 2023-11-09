import React from 'react'

function GiftCard({name, price}) {
    return (
      <div>
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    );
  }
  

export default GiftCard