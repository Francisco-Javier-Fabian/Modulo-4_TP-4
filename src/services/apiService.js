import axios from "axios";

export const fetchCharacters = async (page) => {
  const url = `https://rickandmortyapi.com/api/character?page=${page}`;
  const response = await axios.get(url);
  return response.data;
}

// const API_URL = "https://rickandmortyapi.com/api/character";

// // Traer todos los personajes
// export async function fetchAllCharacters(page = 1) {
//   const response = await axios.get(`${API_URL}/?page=${page}`);
//   console.log(response.data.results);
//   return response.data.results;
// }

// // Buscar personajes por nombre
// export async function fetchCharactersByName(name) {
//   const response = await axios.get(`${API_URL}/?name=${name}`);
//   return response.data.results;
// }

// .data es por que devuelve un objeto


//  const ApiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImE5ZDU0NDI0LTIxYTUtNDgxNC04YzJiLTU2ZTdhMDRkNWM5OSIsImlhdCI6MTc1MzM3NjU4OCwic3ViIjoiZGV2ZWxvcGVyLzUyN2E1ZjE0LThlZjAt MWZhMC0wNDliLWMxODiNWZjMDRjNiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxODEuODAuMjE1LjMiXSwidHlwZSI6ImNsaWVudCJ9XX0.zpcl2QnGWoDfF8ldCwaRxs1iPUxmd4vAJb3M3q3kmy5qfXGc3ZmFTvSIioQEjVIjEF_W7D2NwAQvQsTQS3PDUA';




// const response = await axios.get(url, {
    //     headers: {
    //         Authorization: `Bearer ${Api_key}`
    //     }
    //     .then(response => {
    //         console.log(response.data)
    //     })
    // });
// const allowedIP = '181.80.215.3';
