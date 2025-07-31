import { toast } from "react-toastify";
import { useCartContext } from "../hooks/useConsumeContexts";

const AddRemoveBtn = ({ charId, char }) => {

  const { addToCart, isInFavs, removeFromCart } = useCartContext();

  const removeChar = () => {
    removeFromCart(charId) 
      toast.success('Deje de borrar favoritos!');
  }
  const addChar = () => {
    addToCart(char)
      toast.success('Agregado a favoritos!')
  }
  return (
    <>
      {isInFavs(charId) ? (
        /*  Btn para remover  */
        <button
          onClick={removeChar}
          className="bg-amber-300/70 hover:bg-amber-400/70 dark:bg-teal-800 dark:hover:bg-teal-600 dark:text-white text-black font-medium mt-2 mx-auto h-fit px-5 py-1.5 rounded"
        >
          <i className="bi bi-heart-fill md:text-lg flex gap-2 items-center justify-center">Quitar</i>
        </button>
      ) : (
        /*  Btn para añadir  */
        <button
          onClick={addChar}
          className="bg-amber-300/70 hover:bg-amber-400/70 dark:bg-teal-800 dark:hover:bg-teal-600 dark:text-white text-black font-medium mt-2 mx-auto h-fit px-5 py-1.5 rounded"
        >
          <i className="bi bi-heart md:text-lg flex gap-2 items-center justify-center">Favoritos</i>
        </button>
      )}
    </>
  )
}


export default AddRemoveBtn