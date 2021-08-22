import { createStore } from 'vuex'

import Bed from '../assets/chores/Bed.svg';
import Dishes from '../assets/chores/Dishes.svg';
import Vacuum from '../assets/chores/Vacuum.svg';
import Cooking from '../assets/chores/Cooking.svg';
import Garbage from '../assets/chores/Garbage.svg';
import WashingM from '../assets/chores/Washing Machine.svg';
import Sweeping from '../assets/chores/Sweeping.svg';
import Bath from '../assets/chores/bath.svg';
import Car from '../assets/chores/car.svg';
import Babysitting from '../assets/chores/babysitting.svg';

const priceFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'GBP', });

export default createStore({
  state: {
    chores: [
      {
        id: 0, 
        identifier: 'Tidying bedroom',
        price: {
          value : 2, 
          formattedValue: priceFormat.format(2)
        },
        amount: 0,
        color: '#24A2FF',
        icon: Bed,
      },
      {
        id: 1, 
        identifier: 'Cleaning Dishes',
        price: {
          value : 1.84, 
          formattedValue: priceFormat.format(1.84)
        },
        amount: 0,
        color: '#360568',
        icon: Dishes,
      },
      {
        id: 2, 
        identifier: 'Vacuuming',
        price: {
          value : 2, 
          formattedValue: priceFormat.format(2)
        },
        amount: 0,
        color: '#89CE94',
        icon: Vacuum,
      }, 
      {
        id: 3, 
        identifier: 'Helping with cooking',
        price: {
          value : 2.04, 
          formattedValue: priceFormat.format(2.04)
        },
        amount: 0,
        color: '#FF495C',
        icon: Cooking,
      }, 
      {
        id: 4, 
        identifier: 'Putting bins out',
        price: {
          value : 1.71, 
          formattedValue: priceFormat.format(1.71)
        },
        amount: 0,
        color: '#FCA311',
        icon: Garbage,
      }, 
      {
        id: 5, 
        identifier: 'Hanging washing out',
        price: {
          value : 1.89, 
          formattedValue: priceFormat.format(1.89)
        },
        amount: 0,
        color: '#24A2FF',
        icon: WashingM,
      }, 
      {
        id: 6, 
        identifier: 'Dusting',
        price: priceFormat.format(1.84),
        price: {
          value : 1.84, 
          formattedValue: priceFormat.format(1.84)
        },
        amount: 0,
        color: '#360568',
        icon: Sweeping
      }, 
      {
        id: 7, 
        identifier: 'Cleaning car',
        price: {
          value : 3, 
          formattedValue: priceFormat.format(3)
        },
        amount: 0,
        color: '#89CE94',
        icon: Car,
      },
      {
        id: 8, 
        identifier: 'Cleaning Bathroom',
        price: {
          value : 2.19, 
          formattedValue: priceFormat.format(2.19)
        },
        amount: 0,
        color: '#FF495C',
        icon: Bath,
      },
      {
        id: 9, 
        identifier: 'Babysitting',
        price: {
          value : 6, 
          formattedValue: priceFormat.format(6)
        },
        amount: 0,
        color: '#FCA311',
        icon: Babysitting,
      },
    ],
    miles: 0,
  },
  mutations: {
    SET_MILEAGE(state, payload){
      state.miles = payload;
    }, 
    SET_CHORES(state, param) {
      state.chores[param.idx] = param.payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
