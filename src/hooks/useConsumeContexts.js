import { useContext } from "react";
import { ApiContext, ThemeContext } from "./useCreateContexts";


//  3. Crear un custom hook para consumir el contexto (useContext)
export const useThemeContext = () => {
  return useContext(ThemeContext);
}

export const useApiContext = () => {
  return useContext(ApiContext)
}          