import { useApiContext } from "../hooks/useConsumeContexts";
import CharacterCard from "./CharacterCard";

let i = 1;

const CharacterGrid = () => {

  const { characters, loading, error } = useApiContext();
  
  console.log(`personajes APP: ${i}`, characters);
  i++;

  if (loading) return <p className="text-center">Cargando...</p>;
  if (error) return <p className="text-center text-red-400">{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 p-6">
      {characters && characters.map((char) =>
        <CharacterCard
          key={char.id}
          char={char}
        />)}
    </div>
  );
}
export default CharacterGrid