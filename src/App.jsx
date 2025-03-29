import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Schedule from "./pages/Schedule";

function App() {
  return (
   <>
   <div className="App">
    <Header />
    <Home />

    <div id="spells">
    <Events />
    </div>

    <Schedule/>
    
    <Footer />
   </div>
   </>
  );
}

export default App;
