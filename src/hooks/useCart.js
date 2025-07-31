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
  

  const removeAll = () => setCart([])

  /* // Remover todo lo de cart
    const handleRemoveProductAll = () => {
      setCartList([])
    } */
  // Verifica si la película se encuentra en la lista
  const isInFavs = (movieId) =>
    cart.some((movie) => movie.id === movieId);
  /* ────────────────────────────────────────────────────────────────────────────── */

  return {
    cart,
    addToCart,
    removeFromCart,
    removeAll,
    isInFavs
  };
}

