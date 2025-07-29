import { useState, useCallback, useEffect } from "react";
import { fetchAllCharacters, fetchCharactersByParams } from "../services/apiService";

export default function useApi() {
  const [characters, setCharacters] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  console.log("Render de useApi")

  /*   Fn para Obtener Todos los Personajes   */
  const getAllCharacters = useCallback(async () => {
    console.log("Ejecutando getAllCharacters...");
    setLoading(true);
    setError(null);

    try {
      const { info, results: firstPageResults } = await fetchAllCharacters();

      const otherPages = await Promise.all(
        Array.from({ length: info.pages - 1 }, (_, i) => fetchAllCharacters(i + 2))
      );
      const restResults = otherPages.flatMap(page => page.results);

      setCharacters([...firstPageResults, ...restResults]);
    } catch (error) {
      setError(error.msg || "Ocurrió un error al obtener los personajes");
    } finally {
      setLoading(false);
    }
  }, []); // ← no depende de nada externo

  /*   Fn para Obtener Personajes por Parámetros   */
  const getCharactersByParams = useCallback(async (name, page, status, species, gender) => {

    setLoading(true);
    setError(null);

    try {
      const { info, results: firstPageResults } = await fetchCharactersByParams(name, page, status, species, gender);

      const otherPages = await Promise.all(
        Array.from({ length: info.pages - 1 }, (_, i) => fetchCharactersByParams(name, i + 2, status, species, gender))
      );
      const restResults = otherPages.flatMap(page => page.results);

      setCharacters([...firstPageResults, ...restResults]);
    } catch (error) {
      console.log(error)
      setError(error.msg || "Por favor ingrese campos válidas");
      setCharacters([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Traer todos los personajes una sola vez al montar el hook
  useEffect(() => {
    getAllCharacters();
  }, [getAllCharacters]);

  return {
    characters,
    loading,
    error,
    getAllCharacters,
    getCharactersByParams
  };
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