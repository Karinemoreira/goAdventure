import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import img9 from '../images/img-9.jpg';
import img8 from '../images/img-8.jpg';
import img7 from '../images/img-7.jpg';
import img6 from '../images/img-6.jpg';
import img5 from '../images/img-5.png';




function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={img9}
                        text="Explore the hidden waterfall deeper
                        inside the Amazon Jungle"
                        label='Adventure'
                        path='/services'
                        />
                          <CardItem 
                        src={img8} 
                        text="Venture through challenging sand dunes in the Sahara Desert"
                        label='Exotic'
                        path='/services'
                        />
                        </ul>
                        <ul className="cards__items">
                        <CardItem 
                        src={img6} 
                        text="Walk around the world's most famous corner, with people from all over the world in Times Square"
                        label='Urban'
                        path='/services'
                        />
                          <CardItem 
                        src={img7} 
                        text="Visit memorable temples, paradisiacal landscapes and taste an outstanding cuisine in Bali"
                        label='Culture'
                        path='/services'
                        />
                          <CardItem 
                        src={img5} 
                        text="Discover Jerusalem, one of the most important historic cities in the world"
                        label='Historic'
                        path='/services'
                        />
                        </ul>
            </div>
        </div>
        </div>
    )
}

export default Cards;
