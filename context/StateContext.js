import product from '@/sanity_wekals-web/schemas/product';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  useEffect(() => {
  if (localStorage.getItem("cartItems") == null) {
   localStorage.setItem("cartItems", JSON.stringify(cartItems))
  } 

  
  });

  let foundProduct;
  let index;

  const onAdd = (product, quantity) => {
    const checkProductInCart = JSON.parse(localStorage.getItem("cartItems")).find((item) => item._id === product._id);
    const totalPrice = localStorage.getItem("totalPrice")
    
    if(checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if(cartProduct._id === product._id) return {
          ...cartProduct,
          quantity: 1 
         }
      })
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems))
    } else {
      setCartItems([...cartItems, { ...product }]);
      localStorage.setItem("cartItems", JSON.stringify([...cartItems, { ...product }])) 
    }

    toast.success(`${product.name} telah di tambahkan ke keranjang.`);
  } 

  const onRemove = (product) => {
    console.log(product)
    foundProduct = JSON.parse(localStorage.getItem("cartItems")).find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems))
  }


  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        onAdd,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities 
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);