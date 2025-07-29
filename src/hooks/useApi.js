import { useState, useCallback, useEffect } from "react";
import { fetchAllCharacters, fetchCharactersByName } from "../api/api";

export default function useApi() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Traer todos los personajes
  const getAllCharacters = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchAllCharacters();
      setCharacters(data);
    } catch {
      setError("Error al cargar personajes");
    } finally {
      setLoading(false);
    }
  }, []);

  // Buscar personajes por nombre
  const searchCharacters = useCallback(async (name, status) => {
    if (!name.trim()) {
      getAllCharacters(); // Si el campo está vacío, volvemos a todos
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const data = await fetchCharactersByName(name, status);
      setCharacters(data);
    } catch {
      setError("No se encontraron personajes con ese nombre");
      setCharacters([]);
    } finally {
      setLoading(false);
    }
  }, [getAllCharacters]);

  useEffect(() => {
    getAllCharacters();
  }, [getAllCharacters]);

  return { characters, 
           loading, 
           error, 
           searchCharacters };
}





// import { useState, useCallback, useEffect } from "react";
// import { fetchCharacters } from "../services/apiService";

// export default function useApi() {
//   const [characters, setCharacters] = useState();
//   const [loading, setLoading] = useState();
//   const [error, setError] = useState();

//   console.log("Render de useApi")
//   const getAllCharacters = useCallback(async () => {
//     console.log("Ejecutando getAllCharacters...");
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetchCharacters();
//       let allCharacters = [...response.results];

//       for (let i = 2; i <= response.info.pages; i++) {
//         const chs = await fetchCharacters(i);
//         allCharacters = [...allCharacters, ...chs.results];
//       }

//       setCharacters(allCharacters);
//     } catch (error) {
//       setError(error.msg || "Ocurrió un error al obtener los personajes");
//     } finally {
//       setLoading(false);
//     }
//   }, []); // ← no depende de nada externo

//   // Llamarlo una sola vez al inicializar el hook
//   useEffect(() => {
//     getAllCharacters();
//   }, [getAllCharacters]);

//   return {
//     characters,
//     loading,
//     error,
//     getAllCharacters
//   };
// }