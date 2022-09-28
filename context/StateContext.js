import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let selectedItem;
  let index;

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }
    setQty(1);
    toast.success(`${qty} ${product.name} added to the cart.`);
  };

  const onRemove = (product) => {
    selectedItem = cartItems.find((item) => item._id === product._id);
    setCartItems(cartItems.filter((item) => item._id !== product._id));

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - selectedItem.price * selectedItem.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - selectedItem.quantity
    );
  };

  const toggleCartItemQuantity = (id, value) => {
    selectedItem = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    const incCartItem = cartItems.map((item) =>
      item._id === id ? { ...item, quantity: selectedItem.quantity + 1 } : item
    );
    const decCartItem = cartItems.map((item) =>
      item._id === id ? { ...item, quantity: selectedItem.quantity - 1 } : item
    );

    if (value === "inc") {
      setCartItems([
        ...cartItems.map((item) =>
          item._id === id
            ? { ...item, quantity: selectedItem.quantity + 1 }
            : item
        ),
      ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + selectedItem.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec") {
      if (selectedItem.quantity > 1) {
        setCartItems([
          ...cartItems.map((item) =>
            item._id === id
              ? { ...item, quantity: selectedItem.quantity - 1 }
              : item
          ),
        ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - selectedItem.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        setShowCart,
        toggleCartItemQuantity,
        onRemove,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
