//  Maneja el tema claro/oscuro
import { ThemeContext } from "../hooks/useCreateContexts";
import useTheme from "../hooks/useTheme";

//  2. Crear el provide
export const ThemeProvider = ({ children }) => {

  const toggleTheme = useTheme();

  return (
    <ThemeContext.Provider value={toggleTheme}>
      {children}
    </ThemeContext.Provider>
  )
}
//  2.1 Usar el provider en el main.jsx