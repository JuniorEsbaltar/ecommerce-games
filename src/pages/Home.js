import React, { useState } from "react";
import Card from "../components/Card";
import db from '../products.json';
import ArrowDown from '../assets/arrow-down-icon.svg';

export default function Home() {
  const [items, setItems] = useState(db);
  const [order, setOrder] = useState({
    name: 'desc',
    price: 'desc',
    score: 'desc',
  });

  const sort = (a, b, orderBy) => {
    return orderBy === 'asc' ? (a < b) ? 0 : ((b < a) ? -1 : 0) : (a > b) ? 0 : ((b > a) ? -1 : 0);
  };

  const applyFilter = (items) => {
    setItems([...items]);
  };

  const filterType = (type) => {
    applyFilter([...items.sort((actualItem, nextItem) => {
      return sort(actualItem[type], nextItem[type], order[type]);
    })]);
    
    order[type] = order[type] === 'asc' ? 'desc' : 'asc';
    setOrder(order);
  };

  return (
    <div className="mx-auto md:max-w-lg">
      <div className="bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 ring-4 ring-gray-900 rounded-xl shadow-md  mt-5 flex flex-col items-center p-2">
        <div>
          <p className="text-2xl">Seja bem-vindo a loja Sans Games!!!</p>
        </div>
        <small><p>Tenha determinação!</p></small>
      </div>
      <div className="flex justify-between m-7">
        <div 
          className="flex"
          onClick={() => filterType('name')}
          >
          <p className="mr-2">Nome</p>
          <img 
            className={`transform ${order.name === 'asc' ? 'rotate-180' : ''}`}
            alt="arrow"
            src={ArrowDown}
          />
        </div>
        <div 
          className="flex"
          onClick={() => filterType('score')}
          >
          <p className="mr-2">Score</p>
          <img
            className={`transform ${order.score === 'asc' ? 'rotate-180' : ''}`}
            alt="arrow"
            src={ArrowDown}
          />
        </div>
        <div 
          className="flex"
          onClick={() => filterType('price')}
        >
          <p className="mr-2">Preço</p>
          <img
            className={`transform ${order.price === 'asc' ? 'rotate-180' : ''}`}
            alt="arrow"
            src={ArrowDown}
          />
        </div>
      </div>
      <div>
      {items.map(item => {
        return (
          <div className="mt-10" key={item.id}>
            <Card item={item}/> 
          </div>
        )
        
      })}
      </div>
    </div>
  )
}