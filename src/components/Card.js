import React from 'react';
import Images from '../components/Images';
import { NumberToCurrency } from '../utils/moneyFormat';
import ShopCart from '../assets/cart-icon.svg';
import { useCart } from '../context/Cart';
import { useHistory } from 'react-router-dom';
import '../styles/components/card.css';

export default function Card(props) {

  const { image, name, price, score } = props.item;
  const { setItems } = useCart();
  const history = useHistory();

  return (
    <div className="max-w-xs rounded-xl shadow-md overflow-hidden md:max-w-lg card-container">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 md:w-48 my-1" src={Images[image]} alt={name} />
          </div>
          <div className="p-8 w-80">
            <p className="block mt-1 text-blue-300">{name}</p>
            <div className="score uppercase tracking-wide text-sm font-semibold mt-2">Score: {score}</div>
            <div className="flex justify-between">
              <p className="mt-2 text-white-500">Preço: {NumberToCurrency(price)}</p>
              <img 
                className="h-6 mt-2 cursor-pointer" 
                alt="Carrinho" 
                src={ShopCart}
                onClick={() => {
                  setItems(props.item);
                  history.push('/checkout');
                }}
              />
            </div>
          </div>
        </div>
      </div>
      )
}