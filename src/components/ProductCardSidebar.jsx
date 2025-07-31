//  Diseño de la Card para los productos en el sidebar

import { toast } from "react-toastify";
import { useCartContext } from "../hooks/useConsumeContexts";

//  Card para las pelis en el modal
const ProductCardSidebar = ({ char }) => {

  const { removeFromCart } = useCartContext();

  return (

    <li key={char.id} className="bg-[#8f542b] dark:bg-gray-800 flex items-center justify-between p-2 mb-3 rounded-lg">

      {/*  Imágen del  */}
      <div className="min-w-16 max-w-16 h-fit overflow-hidden rounded-lg">
        <img
          src={char.image}
          alt={char.name}
          className="w-full h-full object-contain"
        />
      </div>

     
      <span className="text-white text-center">{char.name}</span>

      <div className="flex gap-4 items-center text-slate-200 dark:text-slate-400">

        {/*  Btn para remover el producto  */}
        <button
          className="bg-transparent hover:text-white dark:hover:text-slate-50 w-8 h-8 rounded-md"
          onClick={() => {removeFromCart(char.id)
            toast.success('Eliminado de Favoritos!!')
        }  
          }
        >
          <i className="bi bi-trash3 text-lg"></i>
        </button>
      </div>

    </li>

  )
}

export default ProductCardSidebar