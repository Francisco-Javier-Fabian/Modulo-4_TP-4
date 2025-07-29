
const CharacterCard = ({char}) => {

  return (
    <div className='bg-[#8f542b] dark:bg-slate-900 w-full p-4 xl:p-5 rounded-xl shadow-md text-center flex flex-col justify-between'>

      {/*  Imágen del libro  */}
      <div className="
            w-full md:h-80 shadow-md
            shadow-current 
            dark:shadow-slate-400  
            overflow-hidden rounded-xl">
        <img
          src={char.image} alt={char.name}
          className="w-full h-full object-cover" />
      </div>

      {/*  Nombre de la película  */}
      <h2 className="text-lg lg:text-xl font-bold text-white my-3 lg:my-4">{char.name}</h2>
      <p className="text-sm">{char.status} - {char.species}</p>
      <p className="text-xs text-gray-400 mt-1">{char.location.name}</p>

    </div>
  );
}

export default CharacterCard

// import { useApiContext } from "../hooks/useConsumeContexts"

// let i = 1;

// const CharacterCard = () => {

//   const { characters, getAllCharacters } = useApiContext();

//   console.log(`personajes APP: ${i}`, characters);
//   i++;

//   return (
//     <div>
//       {/*  Btn para ver el modal de "Carrito"  */}
//       <button
//         onClick={getAllCharacters}
//         className="
//         bg-amber-300/70 hover:bg-amber-400/70
//         dark:bg-teal-800 dark:hover:bg-teal-600
//         dark:text-white text-black font-medium
//         mt-2 mx-auto h-fit px-2 py-4 rounded
//         "
//       >
//         <i className="bi bi-cart2 md:text-lg font-medium flex gap-2 items-center justify-center"></i>
//       </button>

//       <div className="bg-[#8f542b] dark:bg-slate-900 h-min-screen text-slate-300">
//         {characters && characters.map(ch =>
//           <div key={ch.id}>{ch.id} - {ch.name}</div>
//         )}
//         {/* <pre>{JSON.stringify(characters, null, 2)}</pre> */}
//       </div>
//     </div>

//   )
// }

// export default CharacterCard

// //  <div>
// //         <button
// //           onClick={ getAllCharaters }
// //           className="
// //           bg-amber-300/70
// //           hover:bg-amber-400/70 dark:bg-teal-800 dark:hover:bg-teal-600 dark:text-white text-black font-medium mt-2 mx-auto h-fit px-2 py-4 rounded"
// //         >
// //           <i className="bi bi-cart-2 md:text-lg flex gap-2 items-center justify-center"></i>
// //         </button>
// //       <div className=''>
// //       {characters && characters.map(ch =>
// //         <div key={ch.id}>{ch.id} - {ch.name}</div>
// //       )}
// //          {/* <pre>{JSON.stringify(characters, null, 2)}</pre> */}
// //       </div>
// //       </div >