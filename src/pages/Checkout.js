import { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import images from "../components/Images";
import Loading from "../components/Loading";
import { useCart } from "../context/Cart";
import { NumberToCurrency } from '../utils/moneyFormat';

export default function Checkout() {
  const [totalOrder, setTotalOrder] = useState(100);
  const [isLoading, setIsloading] = useState(false);
  
  const { cartItems, removeItem, cleanCart } = useCart();
  const history = useHistory();

  const calcDelivery = () => {
    const deliveryPrice = cartItems.length * 10;

    return (totalOrder < 250) ? deliveryPrice : 0;
  }

  useEffect(() => {
    const totalByItems = cartItems.reduce((actual, item) => actual + item.price, 0);
    setTotalOrder(totalByItems);
  }, [cartItems]);

  const handleOrder = () => {
    if(!cartItems.length) return;
    setIsloading(true);

    localStorage.setItem(
      'order', 
      JSON.stringify({
        cartItems,
        subtotal: NumberToCurrency(totalOrder),
        frete: NumberToCurrency(calcDelivery()),
        total: NumberToCurrency(totalOrder + calcDelivery()),
      })
    );
    
    
    setTimeout(() => {
      cleanCart();
      setIsloading(false);
      history.push('/thank-you')
    }, 2000);
  }

  return <>
    { isLoading ? <Loading /> : ''}
    <div className="antialiased max-w-6xl mx-auto my-12 px-8">
      <div className="relative block md:flex items-center">
        <div className="w-full md:w-1/2 relative z-1 bg-gray-100 rounded shadow-lg overflow-hidden">
          <div className="text-lg font-medium text-green-500 uppercase p-8 text-center border-b border-gray-200 tracking-wide">Checkout</div>
          <div className="flex justify-center mt-3">
            <ul>
              {
                cartItems.map(({ id, image, name }) => {
                  return (
                    <li key={id} className="flex items-center justify-between mb-2">
                      <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
                        <img className="h-10 object-cover md:w-10" src={images[image]} alt={name} />
                      </div>
                      <span className="text-gray-700 text-lg mx-3">{name}</span>
                      <div className="align-end">
                        <button 
                          className="uppercase p-3 flex items-center bg-red-500 text-blue-50 max-w-max shadow-sm hover:shadow-lg rounded-full w-9 h-9"
                          onClick={()=> {
                            removeItem(id);
                          }}
                        >
                          <svg width="16" height="16" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path d="M12 12h2v12h-2z" fill="currentColor"></path><path d="M18 12h2v12h-2z" fill="currentColor"></path><path d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z" fill="currentColor"></path><path d="M12 2h8v2h-8z" fill="currentColor"></path></svg>
                        </button>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <Link to="/" className="block flex items-center justify-center bg-gray-200 hover:bg-gray-300 p-8 text-md font-semibold text-gray-800 uppercase mt-16" href="#">
            <span className="font-medium text-gray-700 mr-2">🠔</span>
            <span>Continuar Comprando</span>
          </Link>
        </div>
        <div className="w-full md:w-1/2 relative z-0 md:px-8 px-3 md:px-0 md:py-16">
          <div className="bg-blue-900 text-white rounded-b md:rounded-b-none md:rounded-r shadow-lg overflow-hidden">
            <div className="text-lg font-medium uppercase p-8 text-center border-b border-blue-800 tracking-wide">Pedido:</div>
            <div className="text-center text-sm sm:text-md max-w-sm mx-auto mt-8 text-blue-200 px-8 lg:px-0">
              Informações sobre seu pedido
            </div>
              {
                cartItems.map(({name, id, price}) => {
                  return (
                    <div key={id} className="border border-blue-800 mx-8 lg:mx-16 flex flex-wrap">
                      <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-b border-blue-800">{name}</div>
                      <div className="flex items-center justify-center w-1/2 text-center p-4 border-b border-blue-800">{NumberToCurrency(price)}</div>
                    </div>
                  )
                })
              }
            <div className="mt-8 border border-blue-800 mx-8 lg:mx-16 flex flex-wrap">
            <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-b border-blue-800">Subtotal</div>
              <div className="flex items-center justify-center w-1/2 text-center p-4 border-b border-blue-800">{NumberToCurrency(totalOrder)}</div>
              <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-b border-blue-800">Frete</div>
              <div className="flex items-center justify-center w-1/2 text-center p-4 border-b border-blue-800">{NumberToCurrency(calcDelivery())}</div>
              <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-blue-800">Total</div>
              <div className="flex items-center justify-center w-1/2 text-center p-4">{NumberToCurrency(totalOrder + calcDelivery())}</div>
            </div>
            <div
              className="cursor-pointer block flex items-center justify-center bg-blue-800 hover:bg-blue-700 p-8 text-md font-semibold text-gray-300 uppercase mt-8"
              onClick={() => handleOrder()}
            >
              <span>Finalizar Compra</span>
              <span className="font-medium text-gray-300 ml-2">➔</span>
            </div>
          </div>
        </div>
      </div>


    </div>
  </>

}