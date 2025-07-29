
export const Footer = () => {

  return (
      <div className={`
      bg-[#8f542b] dark:bg-slate-900
       text-white
        w-full flex justify-center py-2 gap-2 shadow-inner shadow-amber-400 dark:shadow-teal-700`}>
        <i className="bi bi-c-circle"></i>
        <p className="font-semibold">Hecho con React por Ktta</p>
      </div>
  )
}

export default Footer;