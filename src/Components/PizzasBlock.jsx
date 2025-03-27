import React from 'react';
import { PizzaBlock } from './PizzaBlock';
export const PizzasBlock = () => {
  return (
    <div class="content__items">
      <PizzaBlock
        name="Пепперони"
        price={499}
        image="https://upload.wikimedia.org/wikipedia/commons/0/0c/Pepperoni_Pizza_%2829204589095%29.jpg"
      />
      <PizzaBlock name="Сырная" price={319} />
      <PizzaBlock name="Микс" price={599} />
      <PizzaBlock name="Диабло" price={599} />
      <PizzaBlock name="Карбонара" price={499} />
      <PizzaBlock name="Бургер-пицца" price={499} />
      <PizzaBlock name="Сырный цылпенок" price={699} />
      <PizzaBlock name="Двойная пепперони" price={799} />
      <PizzaBlock name="Песто" price={699} />
    </div>
  );
};
