import { ApiProvider } from "./contexts/ApiContext";
import SearchForm from "./components/FormSearch";
import CharacterGrid from "./components/CharacterGrid";
import Header from "./components/Header";
import Footer from "./components/Footer"

export default function App() {
  return (
    <ApiProvider>
      <Header />
      <div className="
              min-h-screen
              bg-[#f2e7b3] dark:bg-slate-700">
        <SearchForm />
        <CharacterGrid />
      </div>
      <Footer />
    </ApiProvider>
  );
}




// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import CharacterCard from "./components/CharacterCard";

// function App() {


//   return (
//       <div className='flex flex-col'>
//         <Header  />
//         <CharacterCard />
//         <Footer />
//       </div>

//   )
// }

// export default App
