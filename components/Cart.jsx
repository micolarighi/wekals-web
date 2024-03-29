import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
// import getStripe from '../lib/getStripe';

const Cart = () => {
  const cartRef = useRef();
  const cartItems = JSON.parse(localStorage.getItem("cartItems"))
  const {setShowCart, toggleCartItemQuanitity, onRemove} = useStateContext();
  const totalQuantities = cartItems.length

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
        type="button"
        className="cart-heading ms-4"
        onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className="heading">Keranjang Belanja</span>
          <span className="cart-num-items">({totalQuantities})</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Keranjang Anda Masih Kosong </h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn btn-primary"
              >
                Lanjut Belanja
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="product" key={item._id}>
              <img src={urlFor(item?.image[0])} className="cart-product-image" />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>Rp. {item.price}</h4>
                </div>
                <div className="flex bottom">
                  <div>
                  <a href={item.link} target="_blank" className="checkoutBtn fs-6 btn btn-primary">BELI DI TOKOPEDIA</a>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


export default Cart