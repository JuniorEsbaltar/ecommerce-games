import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import images from '../components/Images';
import { NumberToCurrency } from '../utils/moneyFormat';
import SansImage from '../assets/sans.png'
export default function AfterCheckout () {
  const [order, setOrder] = useState({});

  const history = useHistory();
  useEffect(() => {
    const order = localStorage.getItem('order');

    if(!order) history.push('/');

    setOrder(JSON.parse(order));
  }, [history]);

  return (
    <div className="flex items-center justify-center p-10">
      <div className="max-w-lg w-full rounded-lg shadow-lg p-4 ">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center">
            <p className="text-2xl mb-4">Obrigado pela compra !</p>
            <img className="w-16 h-30 ml-5" alt="Sans" src={SansImage}/>
          </div>
          <p>Itens do pedido:</p>
        </div>
        <ul>
            {
              order?.cartItems?.map(({ id, image, name, price }) => {
                return (
                  <li key={id} className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="p-2">
                        <img className="h-10 object-cover md:w-10" src={images[image]} alt={name} />
                      </div>
                      <span className="text-blue-300 text-lg ml-3">{name}</span>
                    </div>
                    <span><p>{NumberToCurrency(price)}</p></span>
                  </li>
                )
              })
            }
        </ul>
        <hr />
        <div className="flex justify-between">
          <p>Subtotal:</p>
          <p>{order.subtotal}</p>
        </div>
        <div className="flex justify-between mt-2">
          <p>Frete:</p>
          <p>{order.frete}</p>
        </div>
        <hr />
        <div className="flex justify-between mt-5">
          <p>Total:</p>
          <p>{order.total}</p>
        </div>
        <Link to="/" className="block flex items-center justify-center bg-gray-200 hover:bg-gray-300 p-8 text-md font-semibold text-gray-800 uppercase mt-16" href="#">
          <span className="font-medium text-gray-700 mr-2">🠔</span>
          <span>Voltar a página inicial</span>
        </Link>
      </div>
    </div>
  )
}