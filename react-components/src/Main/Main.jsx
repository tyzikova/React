import React from 'react';
import './Main.scss';
import { FlatCard } from '../FlatCard';
import { arrayInfoFlat } from '../Flats';

export const Main = () => {
  return (
    <main>
      <div className="wrapper">
        {arrayInfoFlat.map((elem) => (
          <FlatCard
            key={elem.id}
            imgUrl={elem.imgUrl}
            price={elem.price}
            goodPrice={elem.goodPrice}
            info={elem.info}
            place={elem.place}
            icon={elem.icon}
            date={elem.date}
            email={elem.email}
        />
        ))}
      </div>
    </main>
  )
};
