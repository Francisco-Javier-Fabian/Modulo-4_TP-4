
//  Mensaje de lista vacía
const EmptyCart = () => {
  return (
    <div className="text-slate-600 dark:text-zinc-300 my-auto">
      <div className="w-fit h-fit mx-auto my-4">
        <i className="bi bi-emoji-tear text-4xl"></i>
      </div>
      <p className="text-center text-lg font-mono font-semibold">Compra Libros y lee por favor. Asi no votas a Milei.</p>
    </div>
  )
}

export default EmptyCart