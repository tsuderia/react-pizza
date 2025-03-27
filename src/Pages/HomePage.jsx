import React from 'react';
import { Header } from '../Components/Header';
import { Categories } from '../Components/Categories';
import { Sort } from '../Components/Sort';
import { PizzasBlock } from '../Components/PizzasBlock';

export const HomePage = () => {
  return (
    <body>
      <div class="wrapper">
        <Header />
        <div class="content">
          <div class="container">
            <div class="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 class="content__title">Все пиццы</h2>
            <PizzasBlock />
          </div>
        </div>
      </div>
    </body>
  );
};
