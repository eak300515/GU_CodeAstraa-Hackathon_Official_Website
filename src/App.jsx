import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";

function App() {
  return (
   <>
   <div className="App">
    <Header />
    <Home />

    <div id="spells">
    <Events />
    </div>
    
    <Footer />
   </div>
   </>
  );
}

export default App;
