import React, { useState } from 'react';
import './App.css';

import CurrentOrder from './components/CurrentOrder';
import OrderForm from "./components/OrderForm";

function App(props) {
 const [orders, setOrders] = useState([]);
 const [menu] = useState({
     ramens: ['しょうゆラーメン', 'みそラーメン', 'とんこつラーメン', '富山ブラック', '塩ラーメン', 'つけめん'],
     sizes: ['小盛', '普通', '大盛り'],
     chashu: ['1枚', '2枚', '3枚', '山盛り'],
   });
   
  const state = {
    orders: orders,
    menu: menu
  }
  
  function addOrder(order){
    setOrders([...orders, order]);
  }
      
  
  function deleteOrder(id){
    const filteredOrders = orders.filter(n => n.id !== id);
    setOrders(filteredOrders);
  }

  return (
    <div className="container">
      <div class="py-5 text-center">
        <img class="d-block mx-auto mb-4" src="https://chojugiga.com/c/choju47_0033/s128_choju47_0033_6.png" alt="" width="72" height="72" />
        <h2>ラーメンBach Khoa</h2>
    　</div>
      <div class="row">
        <div class="col-sm-6">
          <OrderForm 
            data={state}
            addOrder={addOrder}
          />
        </div>
        <div class="col-sm-6">
          <CurrentOrder 
            data={state.orders}
            deleteOrder={deleteOrder}
          />
        </div>
      </div>
    </div>
  ) 
}

export default App;