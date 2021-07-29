import React from 'react';
import { useCart } from '../context/Cart';
import { Link } from 'react-router-dom';
import cartSvg from '../assets/cart-icon.svg';

export default function Header() {
  const { cartItems } = useCart();
  return (
    <nav className="flex bg-gray-100 justify-between">
      <div className="flex items-center space-x-3">
        <Link className="h-14 w-14" to="/">
          <img alt="Logo" src="https://i1.sndcdn.com/artworks-000240552628-z0xnxr-t500x500.jpg" />
        </Link>
      </div>

      <Link to="/checkout"  className="flex flex-col items-center space-x-3">
        <div className="-mb-3 ml-2 border-2 rounded-full h-7 w-7 flex items-center justify-center">{cartItems.length}</div>
        <img className="h-10 w-10" alt="Carrinho" src={cartSvg}/>
      </Link>
    </nav>
  )
}