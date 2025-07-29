import ThemeButton from "./ThemeButton"

const Header = () => {

  
  return (
    <header className="
      text-white p-4 flex justify-between 
      sticky top-0 shadow-sm 
      shadow-slate-800 dark:shadow-slate-500
      bg-[#8f542b] dark:bg-slate-900
    ">

      {/*  Btn para cambiar el tema Claro/Oscuro */}
      <ThemeButton />

    </header>
  )
}

export default Header
