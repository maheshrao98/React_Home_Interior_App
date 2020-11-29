import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Home Makeovers!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='Images/img-1.jpg'
              text='Living Room Subtle Environment'
              label='Subtle'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Culturised Home Environment'
              label='Culture'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Fascinating Garden'
              label='Outdoor'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='5-Star Bathroom Utilities'
              label='Utilities'
              path='/products'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Get To Us Now'
              label='Contact'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
