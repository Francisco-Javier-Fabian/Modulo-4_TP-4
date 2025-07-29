//  Botón para cambiar el tema
import { useThemeContext } from "../hooks/useConsumeContexts";

const ThemeButton = () => {

  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      className="
        py-2 px-4 rounded-xl font-bold
        hover:shadow-sm transform hover:scale-105 duration-300 
        bg-slate-950 hover:bg-slate-800 hover:shadow-[#6457D5] text-white 
        dark:bg-yellow-400 dark:hover:bg-yellow-600 dark:hover:shadow-[#B4CF66] dark:text-black
      "
    >
      {
        theme === 'dark'
          ? <i className="bi bi-sun"></i>
          : <i className="bi bi-moon-stars"></i>
      }
    </button>
  )
}

export default ThemeButton

/* 
bi-moon-fill  -  icon luna con relleno
bi-moon-stars-fill   -  icon luna con estrellas con relleno
bi-brightness-high-fill  -  sol con lineas
bi-brightness-low-fill  -  sol con puntos
*/