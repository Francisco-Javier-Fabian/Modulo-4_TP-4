import { useEffect, useState } from "react";

export default function useCartList() {

  /* ────────────────────────────────────────────────────────────────────────────── */

  /*   Manejo de Estado y LocalStorage   */

  // Estado para la lista de peliculas guardadas
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  // Guardar en localStorage cuando cartList cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  /* ────────────────────────────────────────────────────────────────────────────── */

  /*   Funciones para el Carrito   */


  // Añadir nuevo producto a cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // cartList.some((product) => product.id === productId);
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remover una producto de cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id ? { ...product, quantity: Math.max(1, quantity) } : product
      )
    );
  };

  const removeAll = () => setCart([])


  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  /* // Remover todo lo de cart
    const handleRemoveProductAll = () => {
      setCartList([])
    } */

  /* ────────────────────────────────────────────────────────────────────────────── */

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    totalPrice,
    removeAll
  };
}

