import { ApiContext } from "../hooks/useCreateContexts";
import useApi from "../hooks/useApi";


export const ApiProvider = ({ children }) => {
  const api = useApi();
  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
};





// import useApi from "../hooks/useAPI";
// import { ApiContext } from "../hooks/useCreateContexts"


// //  2. Crear el provide
// export const ApiProvider = ({ children }) => {

//   console.log("Render de ApiContext antes de useApi")
//   const charactersApi = useApi();
//   // console.log("personajes Context:", charactersApi.characters)
  
//   return (
//     <ApiContext.Provider value={charactersApi}>
//       {children}
//     </ApiContext.Provider>
//   )
// }

// Meneja el contesto con la logica para errores carga
//  y cars para el uso de la api