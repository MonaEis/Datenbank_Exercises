import { useEffect, useState } from "react";

interface Person {
  id: number;
  name: string;
  homeplanet: string;
  birthyear?: string;
}

const PeopleFetch = () => {
    const [people, setPeople] = useState<Person[]>([]);

 useEffect(() => {
        fetch("http://localhost:3000/people").then((response) =>
            response
                .json()
                .then((data) => {
                    setPeople(data);
                    console.log(data)
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                })
        );
    }, []);

  return (
    <div>
      <h2>People</h2>
        {people.map((person) => (
          <div className="container" key={person.id}>
            <h3>{person.name}</h3>
            <p>Homeplanet: {person.homeplanet}</p>
            <p>Birthyear: {person.birthyear}</p>
            </div>
        ))}
    </div>
  )
}

export default PeopleFetch
