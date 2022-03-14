import Flat1 from './assets/jpg/flat1.jpg';
import Flat2 from './assets/jpg/flat2.jpg';
import Flat3 from './assets/jpg/flat3.jpg';
import Flat4 from './assets/jpg/flat4.jpg';
import Flat5 from './assets/jpg/flat5.jpg';
import Flat6 from './assets/jpg/flat6.jpg';

import Icon1 from './assets/iconSaler/icon1.png';
import Icon2 from './assets/iconSaler/icon2.png';
import Icon3 from './assets/iconSaler/icon3.png';
import Icon4 from './assets/iconSaler/icon4.png';

const Data = new Date();

export const arrayInfoFlat = [
  {
    id: 1,
    imgUrl: Flat1,
    price: 150000,
    info: '3 bedroom flat for sale',
    place: 'Hampstead, London, NW3',
    icon: Icon1,
    date: 'Added on' + ' ' + Data.toISOString().split('T')[0],
  },
  {
    id: 2,
    imgUrl: Flat2,
    price: 140000,
    info: '2 bedroom apartment for sale',
    place: 'Space Apartments, High Road, N22',
    icon: Icon2,
    date: 'Added on' + ' ' + Data.toISOString().split('T')[0],
  },
  {
    id: 3,
    imgUrl: Flat3,
    price: 145000,
    info: 'Studio for sale',
    place: 'Bow Road, Bow, London, E3',
    icon: Icon3,
    date: 'Added on' + ' ' + Data.toISOString().split('T')[0],
  },
  {
    id: 4,
    imgUrl: Flat4,
    price: 250000,
    info: '3 bedroom apartment for sale',
    place: 'Falkland Road, London, N8',
    icon: Icon2,
    date: 'Added on' + ' ' + Data.toISOString().split('T')[0],
  },
  {
    id: 5,
    imgUrl: Flat5,
    price: 168000,
    info: '1 bedroom apartment for sale',
    place: '20 Wilkie House, Cureton Street, London, SW1P 4EH',
    icon: Icon3,
    date: 'Added on' + ' ' + Data.toISOString().split('T')[0],
  },
  {
    id: 6,
    imgUrl: Flat6,
    price: 138000,
    info: '1 bedroom apartment for sale',
    place: 'Sandham Point, Woolwich SE18',
    icon: Icon4,
    date: 'Added on' + ' ' + Data.toISOString().split('T')[0],
  },
];
