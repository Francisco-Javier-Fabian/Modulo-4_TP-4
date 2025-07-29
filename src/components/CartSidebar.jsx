//  Muestra los productos en el carrito con cantidad y total

import ProductCardSidebar from "./ProductCardSidebar"
import EmptyCart from "./EmptyCart"
import { useCartContext } from "../hooks/useConsumeContexts";

const CartSidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {

  const { cart, totalPrice, removeAll } = useCartContext();

  // Setea el estado isModalOpen a false para poder cerrar el modal
  const handleCloseSidebar = () => setIsSidebarOpen(false)

  return (
    <>
      {
        /*  Renzeriza el Modal si isModalOpen es true  */
        isSidebarOpen && <div className="fixed inset-0 bg-black/90 flex justify-end">
          <div className='bg-[#f2e7b3] dark:bg-slate-950  rounded-xl shadow-lg w-lg relative max-h-full overflow-y-auto grid grid-rows-[auto_1fr_auto]'>
            <div className="bg-[#8f542b]  dark:bg-slate-950 w-full text-right mb-4 px-6 py-4 sticky top-0 shadow-lg shadow-current">
              {/*  Btn para cerrar el modal  */}
              <button
                onClick={handleCloseSidebar}
                className="text-gray-400 hover:text-gray-300 transform hover:scale-110 duration-300"
              >
                <i className="bi bi-x-square text-2xl font-bold"></i>
              </button>
              <button onClick={removeAll}
              className="text-slate-500 hover:text-slate-800"> borrar todo</button>
              {/* <button
								onClick={handleRemoveProductAll}
								className="text-white"
							>
								eliminar todo
							</button> */}
            </div>

            { /*  Si la lista no está vacía se renderizan las pelis sino se muestra un msj  */
              cart.length > 0 ? (
                <ul className="mx-6 my-4">
                  {cart.map((product) => (
                    <ProductCardSidebar
                      key={product.id}
                      product={product}
                    />
                  ))}
                </ul>
              ) : ( /*  Msj de lista vacía  */
                <EmptyCart />
              )
            }
            <div className="flex sticky bottom-0 justify-between text-slate-200 font-semibold py-2 px-5 shadow-inner shadow-[#664bce] bg-[#8f542b] dark:bg-fuchsia-950 mt-4">
              <p>Precio Total: </p>
              <p> $ {totalPrice}</p>
              {console.log(totalPrice)}

            </div>



          </div>
        </div>
      }
    </>
  )
}

export default CartSidebar