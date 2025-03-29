import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Schedule from "./pages/Schedule";
import Prizing from "./pages/Prizing";

function App() {
  return (
   <>
   <div className="App">
    <Header />
    <Home />

    <div id="spells">
    <Events />
    </div>

    <div id="Schedule">
    <Schedule/>
    </div>
    
    <div id="Prizing">
    <Prizing />
    </div>
    
    <Footer />
   </div>
   </>
  );
}

export default App;
