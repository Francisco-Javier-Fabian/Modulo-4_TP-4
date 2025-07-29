import { useContext } from "react";
import { ApiContext, CartContext, ThemeContext } from "./useCreateContexts";


//  3. Crear un custom hook para consumir el contexto (useContext)
export const useThemeContext = () => {
  return useContext(ThemeContext);
}

export const useApiContext = () => {
  return useContext(ApiContext)
}        

export const useCartContext = () => {
  return useContext(CartContext)
}