import React from 'react';
import { useCart } from '../context/Cart';
import { Link } from 'react-router-dom';
import cartSvg from '../assets/cart-icon.svg';
import '../styles/components/header.css';

export default function Header() {
  const { cartItems } = useCart();
  return (
    <nav className="header-page flex justify-between">
      <div className="flex items-center space-x-3">
        <Link className="h-14 w-14" to="/">
          <img alt="Logo" src="https://i1.sndcdn.com/artworks-000240552628-z0xnxr-t500x500.jpg" />
        </Link>
      </div>

      <Link to="/checkout"  className="flex flex-col items-center space-x-3 mr-5">
        <div className="-mb-2 ml-2 border rounded-full h-5 w-5 flex text-white items-center justify-center">{cartItems.length}</div>
        <img className="h-8 w-8" alt="Carrinho" src={cartSvg}/>
      </Link>
    </nav>
  )
}