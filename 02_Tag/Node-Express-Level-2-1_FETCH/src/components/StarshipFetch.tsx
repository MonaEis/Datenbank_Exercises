import { useEffect, useState } from "react";

export interface Starship {
  id: number;
  name: string;
  speed?: number;
  crew?: number;
}


const StarshipFetch = () => {
    const [starship, setStarship] = useState<Starship[]>([]);

   

    useEffect(() => {
      fetch("http://localhost:3000/starships").then((response) =>
          response
              .json()
              .then((data) => {
                  setStarship(data);
                  console.log(data)
              })
              .catch((error) => {
                  console.error("Error fetching data:", error);
              })
      );
  }, []);


  return (
    <div>
    <h2>Starships</h2>
    {starship.map((ship) => (
      <div className="container" key={ship.id}>
        <h3>{ship.name}</h3>
        <p>Speed: {ship.speed}</p>
        <p>Crew Capacity: {ship.crew}</p>
        
        </div>
    ))}
  </div>
  )
}

export default StarshipFetch
