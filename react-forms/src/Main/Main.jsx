import React from 'react';
import './Main.scss';
import Cities from '../by-cities.json';

export const Main = () => {
  console.log(Cities[0].regions[0].cities[1].name)

  return (
    <main>
      <div className="wrapper">
        <div className="containerForm">
          <h2>Enter form data</h2>
          <form className="formComponent">
            <label className="formsElement">
              <span>Имя: </span>
              <input type="text" placeholder="Ваше имя" required />
            </label>
            <label className="formsElement">
              <span>Фамилия: </span>
              <input type="text" placeholder="Ваша фамилия" required />
            </label>
            <label className="formsElement">
              <span>Отчество: </span>
              <input type="text" placeholder="Ваше отчество" required />
            </label>
            <label className="formsElement">
              <span>Дата рождения: </span>
              <input type="date" name="Дата рождения" required />
            </label>
            <label>
              Область:
              <select>
                <option>{Cities[0].regions[0].name}</option>
                <option>{Cities[0].regions[1].name}</option>
                <option>{Cities[0].regions[2].name}</option>
                <option>{Cities[0].regions[3].name}</option>
                <option>{Cities[0].regions[4].name}</option>
                <option>{Cities[0].regions[5].name}</option>
              </select>
            </label>
            <label>
              Город:
              <select>
                <option>{Cities[0].regions[0].cities[0].name}</option>
                </select>
            </label>
            <label className="formsElement">
              <span>Согласен на обработку данных: </span>
              <input type="checkbox" />
            </label>
            <div className="formsElement">
              Дополнительно к заказу
              <div>
                <span>Флаер на ближайший концерт в Вашем городе: </span>
                <input type="checkbox" />
              </div>
              <div>
                <span>Купон на скидку в сети магазинов Spar: </span>
                <input type="checkbox" />
              </div>
              <div>
                <span>Скидка на авиаперелеты компанией Белавиа: </span>
                <input type="checkbox" />
              </div>
              <div>
                <span>Промокод на продукцию сети пиццерий Dominos: </span>
                <input type="checkbox" />
              </div>
            </div>
            <label className="formsElement">
              <span>Email:</span>
              <input type="text" placeholder="Email" name="email" required />
            </label>
            <div className="formsElementRadio">
              Хочу получать уведомления об акциях:
              <div>
                <label>
                  <input type="radio" name="inputSale" value="yes" />
                  Yes
                </label>
                <label>
                  <input type="radio" name="inputSale" value="no" />
                  No
                </label>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="containerCardsForm">
          <h2>Results form data</h2>
        </div>
      </div>
    </main>
  );
};
