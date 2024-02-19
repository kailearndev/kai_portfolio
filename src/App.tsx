import About from "./pages/About";
import Header from "./pages/Header";
import Portfolio from "./pages/Portfolio";
import Tech from "./pages/Tech";

function App() {
  return (
    <div className="container max-w-screen-2xl h-[100svh]  mx-auto p-4 sm:p-8 md:p-12 lg:p-16  text-gray-600">
      <Header />
      <About />
      <Tech/>
      
      <Portfolio/>
    </div>
  );
}

export default App;
