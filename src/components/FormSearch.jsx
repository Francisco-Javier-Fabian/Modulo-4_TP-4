import { useState } from "react";
import { useApiContext } from "../hooks/useConsumeContexts";

const FormSearch = () => {

  const { getAllCharacters, getCharactersByParams } = useApiContext();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Buscando personajes...");
    !query
      ? getAllCharacters()
      : getCharactersByParams(
        query[0] && query[0].trim(), 
        query[1] && query[1].trim(), 
        query[2] && query[2].trim(), 
        query[3] && query[3].trim(), 
        query[4] && query[4].trim()); // Llama al hook con los parametros ingresados
  };

  const handleChange = (e) => {
    e.preventDefault();
    const params = e.target.value.split(',');
    setQuery(params);
  }
  return (
    <form onSubmit={handleSubmit} className="flex h-fit w-fit mx-auto my-6 rounded-lg border border-slate-800">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Buscar personaje..."
        className="p-2 bg-slate-500 font-mono text-slate-200 text-xl"
      />
      <button type="submit" className="bg-teal-950 font-mono text-slate-200 text-xl p-2">
        Buscar
      </button>
    </form>
  );
}
export default FormSearch

// import { useState } from "react"
// import { useApiContext } from "../hooks/useConsumeContexts";

// const FormSearch = () => {

//   const [ card, setCard] = useState();
//   const [ getCards ] = useApiContext();

//   const handleSubmit = (e) => {
//     e.prevenrDefault()

//     if(!card.trim) {
//       alert(`Por favor, lee y escribi bien`)
//       return
//     }
//     console.log(`Loading ${card}...`)
//     getCards(card)
//   }
//   return(
//     <form onSubmit={handleSubmit}>
//       <input 
//         type="text"
//         placeholder="&#x1f50D"
//         value = {card}
//         onChange={(e) => setCard(e.target.value)}
//         className="p-2 border border-gray-300 roundend-md shadow-sw"
//          />
//          <button 
//             type="submit">buscar .. </button>
        

//     </form>
//   )
// }

// export default FormSearch
// // import axios from 'axios'
// // import { useEffect, useState } from 'react'

// // // Explicación: Elegi Axios por su sintaxis más limpia y manejo automático de JSON.
// // // Además, facilita interceptores y manejo de errores más estructurado en apps más grandes.

// // const AxiosSearch = () => {
// //   // estado para almacenar citas
// //   const [quote, setQuote] = useState(null)
// //   // estado para manejar la carga
// //   const [loading, setLoading] = useState(false)
// //   // estado para manejar errores
// //   const [error, setError] = useState(null)

// // console.log(error)

// //   const fetchData = async () => {
// //     setLoading(true) // Inciamos el estado de carga
// //     setError(null) // reiniciar el estado de error
// //     try {
// //       const { data } = await axios.get('https://breakingbadapi.com/api/characters')
// //       setQuote(data[0]) // actualiza los datos con los estados optecnidos
// //     } catch (err) {
// //       console.log('error ->', err)
// //       setError(err.message) // establecer mensaje de error
// //       // mensaje de error, dependiendo del status code
// //       if (err.status === 404){
// //         alert("Error 404: Recurso no entrado o URL incorrecta")
// //       }
// //     } finally {
// //       setLoading(false) // finaliza el estado de carga
// //     }
// //   }
  
// //   useEffect(() => {
// //     fetchData()
// //   }, [])

// //   return (
// //     <>
// //       <div>AxiosSearch</div>
// //       {loading && <p className='font-mono text-fuchsia-800'>Cargando...</p>}
// //       {quote && (<p>"{quote.quote}". {quote.author}</p>)}
// //       {error && <p>Error Status: {error.status} - {error.message} </p>}
// //     </>
// //   )
// // }

// // export default AxiosSearch


// // /// buscar la api original de brawl start
