import { useApiContext } from "../contexts/ApiContext";
import CharacterCard from "./CharacterCard";

export default function CharacterGrid() {
  const { characters, loading, error } = useApiContext();

  if (loading) return <p className="text-center">Cargando...</p>;
  if (error) return <p className="text-center text-red-400">{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 text-slate-300">
      {characters.map((char) => (
        <CharacterCard
          key={char.id}
          char={char}
        />
      ))}
    </div>
  );
}
