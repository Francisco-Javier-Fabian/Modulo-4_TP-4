//  Diseño de la Card para los productos en el sidebar

import { useCartContext } from "../hooks/useConsumeContexts";

//  Card para las pelis en el modal
const ProductCardSidebar = ({ product }) => {

  const { removeFromCart, updateQuantity } = useCartContext();

  return (

    <li key={product.id} className="bg-[#8f542b] dark:bg-gray-800 flex items-center justify-between p-2 mb-3 rounded-lg">

      {/*  Imágen del  */}
      <div className="min-w-16 max-w-16 h-20 overflow-hidden rounded-lg">
        <img
          src={`/assets/imgBooks/${product.img}.jpg`}
          alt={product.name}
          className="w-full h-full object-contain bg-black/40"
        />
      </div>

      {/*  Nombre del book  */}
      <span className="text-white text-center">{product.name}</span>

      <div className="flex gap-4 items-center text-slate-200 dark:text-slate-400">
        <div className="flex gap-2 items-center">
          {/*  Btn para quitar una unidad del producto  */}
          <button
            className=" hover:text-white dark:hover:text-slate-50 w-8 h-8 rounded-md"
            onClick={() => updateQuantity(product.id, product.quantity - 1)}
          >
            <i className="bi bi-dash-lg  "></i>
          </button>
          {/*  Cantidad del producto  */}
          <p className="text-white border border-slate-200 dark:border-slate-400 px-1.5 py-0.5 rounded-sm">
            {product.quantity}
          </p>
        
          {/*  Btn para agregar una unidad del producto  */}
          <button
            className="hover:text-white dark:hover:text-slate-50  w-8 h-8 rounded-md"
            onClick={() => updateQuantity(product.id, product.quantity + 1)}
          >
            <i className="bi bi-plus-lg  "></i>
          </button>
        </div>

        {/*  Btn para remover el producto  */}
        <button
          className="bg-transparent hover:text-white dark:hover:text-slate-50 w-8 h-8 rounded-md"
          onClick={() => removeFromCart(product.id)}
        >
          <i className="bi bi-trash3 text-lg"></i>
        </button>
      </div>

    </li>


  )
}

export default ProductCardSidebar