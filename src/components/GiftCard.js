import React from 'react'

function GiftCard({name, image }) {
    return (
      <div className='giftCard'>
        <img className='giftImage' src={image} alt={name}/>
        <h3>{name}</h3>
      </div>
    );
  }
  

export default GiftCard