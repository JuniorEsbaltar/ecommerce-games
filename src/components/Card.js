import React from 'react';
import Images from '../components/Images';
import { NumberToCurrency } from '../utils/moneyFormat';
import ShopCart from '../assets/cart-icon.svg';
import { useCart } from '../context/Cart';
import { useHistory } from 'react-router-dom';
export default function Card(props) {

  const { image, name, price, score } = props.item;
  const { setItems } = useCart();
  const history = useHistory();

  return (
    <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-lg">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 object-cover md:w-48" src={Images[image]} alt={name} />
          </div>
          <div className="p-8 w-80">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Score: {score}</div>
            <p className="block mt-1 text-lg leading-tight font-medium text-black">{name}</p>
            <div className="flex justify-between">
              <p className="mt-2 text-gray-500">Preço: {NumberToCurrency(price)}</p>
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