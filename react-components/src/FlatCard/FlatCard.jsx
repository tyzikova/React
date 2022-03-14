import React from 'react';
import './FlatCard.scss';
import Heart from '../assets/svg/red-heart.svg';

export const FlatCard = ({ imgUrl, price, goodPrice, info, place, icon, date, email }) => {
  price < 150000 ? goodPrice="Good price" : goodPrice="";

  return (
    <div className="cardFlat">
      <img className="imageCard" src={imgUrl} alt="flat" />
      <div className="priceContainer">
        <span>{price}</span>
        <span>{goodPrice}</span>
      </div>
      <div className="flatContainer">
        <div className="infoContainer">
        <span>{info}</span>
        <span>{place}</span>
        </div>
        <img className="imageIcon" src={icon} alt="iconSaler"/>
      </div>
      <div className="dateContainer">
        <span>{date}</span>
        <div>{email}</div>
      </div>
      <div className="iconContainer">
        <img className="iconHeart" src={Heart} alt="heart" />
      </div>
    </div>
  );
};
