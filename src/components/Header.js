import React from 'react';
import { useCart } from '../context/Cart'
export default function Header() {
  const { cartItems } = useCart();
  return (
    <nav className=" flex px-5 py-4 bg-gray-100 justify-between">
      <div className="flex items-center space-x-3">
        <img className="pr-5" alt="Logo" src="https://img.icons8.com/doodle/48/000000/girl.png" />

      </div>

      <div className="flex items-center space-x-3">
        <p className="block p-3">{cartItems.length}</p>
        <p className="block p-3">Features</p>
        <p className="block p-3">Pricing</p>
      </div>
    </nav>
  )
}