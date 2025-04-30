import { useEffect, useState } from "react";

interface IPlanet {
    id: number;
    name: string;
    terrain: string;
    population: number
  }
const PlanetFetch = () => {
    const [planet, setPlanet] = useState<IPlanet[]>([]);

    useEffect(() => {
        fetch("http://localhost:3000/planets").then((response) =>
            response
                .json()
                .then((data) => {
                    setPlanet(data);
                    console.log(data)
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                })
        );
    }, []);


  return (
    <div>
    <h2>Planets</h2>
    {planet.map((planet) => (
      <div className="container" key={planet.id}>
        <h3>{planet.name}</h3>
        <p>Terrain: {planet.terrain}</p>
        <p>Population: {planet.population}</p>
        
        </div>
    ))}
  </div>
  )
}

export default PlanetFetch
