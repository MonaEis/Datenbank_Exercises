import PeopleFetch from "./components/PeopleFetch";
import PlanetFetch from "./components/PlanetFetch";
import StarshipFetch from "./components/StarshipFetch";
import StarshipInput from "./components/StarshipInput";




function App() {
    
    
    return <div className="app">
      <h1>STAR🪐WARS🚀ZEUGS</h1>
        <StarshipInput/>
      <main>
      <PeopleFetch/>
     <StarshipFetch/>
     <PlanetFetch/>
    </main>
      
      </div>
}

export default App;
