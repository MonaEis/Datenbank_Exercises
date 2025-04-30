// @ts-nocheck
import express from 'express';
import { IPerson } from './models/IPerson';
import { IStarship } from './models/IStarship';
import { IPlanet } from './models/IPlanet';
import cors from 'cors';

const app =  express();
app.use(cors());
const port = 3000;

const people: IPerson[] = [
  { id: 1, name: 'Luke Skywalker', homeplanet: 'Tatooine',  birthyear: '19BBY' },
  { id: 2, name: 'Darth Vader', homeplanet: 'Tatooine', birthyear: '41.9BBY' },
  { id: 3, name: 'Leia Organa' , homeplanet: 'Alderaan', birthyear: '19BBY' },
  { id: 4, name: 'Han Solo', homeplanet: 'Corellia' , birthyear: '29BBY' },
  { id: 5, name: 'Chewbacca', homeplanet: 'Kashyyyk', birthyear: '200BBY' },
  { id: 6, name: 'C-3PO', homeplanet: 'Tatooine' , birthyear: '112BBY' },
  { id: 7, name: 'R2-D2', homeplanet: 'Naboo' , birthyear: '33BBY' },
  { id: 8, name: 'Yoda', homeplanet: 'Dagobah',     birthyear: '896BBY' },
  { id: 9, name: 'Obi-Wan Kenobi', homeplanet: 'Stewjon',   birthyear: '57BBY' },
];

const starships: IStarship[] = [
  { id: 1, name: 'Millennium Falcon', speed: 1050, crew: 4 },
  { id: 2, name: 'X-Wing', speed: 1050, crew: 1 },
  { id: 3, name: 'TIE Fighter', speed: 1200, crew: 1 },
  { id: 4, name: 'Star Destroyer', speed: 975, crew: 37000 },
  { id: 5, name: 'Slave I', speed: 1000, crew: 1 },
    { id: 6, name: 'A-Wing', speed: 1300, crew: 1 },
    { id: 7, name: 'B-Wing', speed: 1000, crew: 1 },
    { id: 8, name: 'Y-Wing', speed: 1000, crew: 2 },
    { id: 9, name: 'Naboo N-1 Starfighter', speed: 1100, crew: 1 }
];

const planets: IPlanet[] = [
    { id: 1, name: 'Tatooine', terrain: 'desert', population: 200000 },
    { id: 2, name: 'Alderaan', terrain: 'grasslands', population: 2000000000 },
    { id: 3, name: 'Hoth', terrain: 'ice', population: 0 },
    { id: 4, name: 'Dagobah', terrain: 'swamp', population: 0 },
    { id: 5, name: 'Bespin', terrain: 'gas giant', population: 6000000 },
    { id: 6, name: 'Endor', terrain: 'forest', population: 30000000 },
    { id: 7, name: 'Naboo', terrain: 'grasslands', population: 4500000000 },
    { id: 8, name: 'Kamino', terrain: 'ocean', population: 1000000000 },
    { id: 9, name: 'Geonosis', terrain: 'rocky', population: 1000000000 }
]


app.get('/people', (req, res) => {
  res.json(people);
});

app.get('/starships', (req, res) => {
  res.json(starships);
});


app.get('/planets', (req, res) => {
    res.json(planets);
  });

app.post('/starships', (req, res) =>{
    const newStarship: IStarship = req.body;
    starships.push(newStarship);
    res.send(`Starship ${starship.name} added`);
})



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});