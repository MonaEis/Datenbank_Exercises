import { useState } from "react";
import { Starship } from "./StarshipFetch"

const StarshipInput: React.FC = () => {
    // Alles als string im Formular
    const [starship, setStarship] = useState({
      id: '',
      name: '',
      speed: '',
      crew: '',
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setStarship((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      // Umwandeln in das passende Format (mit echten Zahlen)
      const payload: Starship = {
        id: Number(starship.id),
        name: starship.name,
        speed: starship.speed ? Number(starship.speed) : undefined,
        crew: starship.crew ? Number(starship.crew) : undefined,
      };
  
      const res = await fetch('/starships', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
  
      const result = await res.text();
      alert(result);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          name="id"
          value={starship.id}
          onChange={handleChange}
          placeholder="ID"
        />
        <input
          name="name"
          value={starship.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          name="speed"
          type="number"
          value={starship.speed}
          onChange={handleChange}
          placeholder="Speed"
        />
        <input
          name="crew"
          type="number"
          value={starship.crew}
          onChange={handleChange}
          placeholder="Crew"
        />
        <button type="submit">Absenden</button>
      </form>
    );
  };
  
  export default StarshipInput;