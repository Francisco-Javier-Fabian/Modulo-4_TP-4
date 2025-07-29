import CharacterGrid from "./components/CharacterGrid";
import Header from "./components/Header";
import Footer from "./components/Footer"
import FormSearch from "./components/FormSearch";
import { useState } from "react";
import CartSidebar from "./components/CartSidebar";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <div className="
              min-h-screen
              bg-[#f2e7b3] dark:bg-slate-700">
      <Header setIsSidebarOpen={setIsSidebarOpen} />
      <CartSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <FormSearch />
      <CharacterGrid />
      <Footer />
    </div>
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
