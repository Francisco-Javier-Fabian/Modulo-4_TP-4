import ThemeButton from "./ThemeButton"

const Header = ({setIsSidebarOpen}) => {

  const handleOpenSidebar = () => setIsSidebarOpen(true)

/*  Identificar que dispositivo está usando el usuario  */
  // const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);
  

  return (
    <header className="
      text-white p-4 flex justify-between 
      sticky top-0 shadow-sm 
      shadow-slate-800 dark:shadow-slate-500
      bg-[#8f542b] dark:bg-slate-900
    ">

      {/*  Btn para cambiar el tema Claro/Oscuro */}
      <ThemeButton />
       {/*  Btn para ver el modal de "Carrito"  */}
      <button
        /*  Si es Celular o Tablet - un click  */
        onClick={handleOpenSidebar}
        /*  Si es Computadora - doble click  */
        // onDoubleClick={!isMobileDevice ? handleOpenSidebar : undefined}
        className="
        text-black py-2 px-4 rounded
          hover:shadow-sm transform hover:scale-105 duration-300 
          bg-amber-200/90 hover:bg-amber-300/80 hover:shadow-[#B4CF66]
          dark:bg-teal-800 dark:hover:bg-teal-600 dark:hover:shadow-[#6457D5] dark:text-white
        ">
        <i className="bi bi-heart-fill md:text-lg font-medium flex gap-2 items-center justify-center">Favoritos</i>
      </button>

    </header>
  )
}

export default Header
