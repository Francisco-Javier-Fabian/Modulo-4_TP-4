import axios from "axios";

const URL = "https://rickandmortyapi.com/api/character";

// Traer todos los personajes
export async function fetchAllCharacters(page = 1) {
  const response = await axios.get(`${URL}/?page=${page}`);
  console.log(response.data.results);
  console.log(response.data.info);
  return response.data;
}

// Buscar personajes por nombre

