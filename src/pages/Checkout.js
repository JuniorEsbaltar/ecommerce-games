import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useCart } from "../context/Cart";
import { NumberToCurrency } from '../utils/moneyFormat';

export default function Checkout() {
  const [totalOrder, setTotalOrder] = useState(100);
  const { cartItems } = useCart();

  const calcDelivery = () => {
    const deliveryPrice = cartItems.length * 10;
    
    return (totalOrder < 250) ? deliveryPrice : 0;
  }

  useEffect(() => {
    const totalByItems = cartItems.reduce((actual, item) => actual + item.price,0);
    const totalDelivery = calcDelivery();
    setTotalOrder(totalByItems + totalDelivery);
    // console.log(totalByItems);
  }, [cartItems])

  return <>
      <div className="antialiased max-w-6xl mx-auto my-12 bg-gray-300 px-8">
        <div className="relative block md:flex items-center">
          <div className="w-full md:w-1/2 relative z-1 bg-gray-100 rounded shadow-lg overflow-hidden">
            <div className="text-lg font-medium text-green-500 uppercase p-8 text-center border-b border-gray-200 tracking-wide">Checkout</div>
            <div className="block sm:flex md:block lg:flex items-center justify-center">
              <div className="mt-8 sm:m-8 md:m-0 md:mt-8 lg:m-8 text-center">
                <div className="inline-flex items-center">
                  <span className="text-3xl font-medium">1.4%</span>
                  <span className="text-xl text-gray-600 ml-2">+</span>
                  <span className="text-xl ml-2">20p</span>
                </div>
                <span className="block text-sm text-gray-600 mt-2">for European cards</span>
              </div>
              <div className="mt-4 mb-8 sm:m-8 md:m-0 md:mt-4 md:mb-8 lg:m-8 text-center">
                <div className="inline-flex items-center">
                  <span className="text-3xl font-medium">2.9%</span>
                  <span className="text-xl text-gray-600 ml-2">+</span>
                  <span className="text-xl ml-2">20p</span>
                </div>
                <span className="block text-sm text-gray-600 mt-2">for non-European cards</span>
              </div>
            </div>
            <div className="flex justify-center mt-3">
              <ul>
                <li className="flex items-center">
                  <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path className="primary" d="M11 3.05V2a1 1 0 0 1 2 0v1.05A10 10 0 0 1 22 13c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a10 10 0 0 1 9-9.95z" /><path className="secondary" d="M11 14a1 1 0 0 1 2 0v5a3 3 0 0 1-6 0 1 1 0 0 1 2 0 1 1 0 0 0 2 0v-5z" /></svg>
                  </div>
                  <span className="text-gray-700 text-lg ml-3">No setup, monthly, or hidden fees</span>
                </li>
              </ul>
            </div>
            <Link className="block flex items-center justify-center bg-gray-200 hover:bg-gray-300 p-8 text-md font-semibold text-gray-800 uppercase mt-16" href="#">
              <span>Continuar Comprando</span>
              <span className="font-medium text-gray-700 ml-2">➔</span>
            </Link>
          </div>
          <div className="w-full md:w-1/2 relative z-0 px-8 md:px-0 md:py-16">
            <div className="bg-blue-900 text-white rounded-b md:rounded-b-none md:rounded-r shadow-lg overflow-hidden">
              <div className="text-lg font-medium uppercase p-8 text-center border-b border-blue-800 tracking-wide">Pedido:</div>
              <div className="text-center text-sm sm:text-md max-w-sm mx-auto mt-8 text-blue-200 px-8 lg:px-0">
                Informações sobre seu pedido
              </div>
              <div className="mt-8 border border-blue-800 mx-8 lg:mx-16 flex flex-wrap">
                {
                  cartItems.map(item => {
                    return (
                      <>
                        <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-b border-blue-800">{item.name}</div>
                        <div className="flex items-center justify-center w-1/2 text-center p-4 border-b border-blue-800">{NumberToCurrency(item.price)}</div>
                      </>
                    )
                  })
                }
                <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-b border-blue-800">Frete</div>
                <div className="flex items-center justify-center w-1/2 text-center p-4 border-b border-blue-800">{calcDelivery()}</div>
                <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-blue-800">Total</div>
                <div className="flex items-center justify-center w-1/2 text-center p-4">{totalOrder}</div>
              </div>
              <Link className="block flex items-center justify-center bg-blue-800 hover:bg-blue-700 p-8 text-md font-semibold text-gray-300 uppercase mt-8" href="#">
                <span>Finalizar Compra</span>
                <span className="font-medium text-gray-300 ml-2">➔</span>
              </Link>
            </div>
          </div>
        </div>


      </div>
    </>
  
}