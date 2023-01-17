import Pokedex from "./Pokedex";
import "./Pokegame.css"
import { assignRandomHands, calcWinningHand } from "./helpers";

const DEFAULT_POKEMANS = [
    {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62},
    {id: 7,   name: 'Squirtle',   type: 'water',    base_experience: 63},
    {id: 11,  name: 'Metapod',    type: 'bug',      base_experience: 72},
    {id: 12,  name: 'Butterfree', type: 'bug, flying',   base_experience: 178},
    {id: 25,  name: 'Pikachu',    type: 'electric', base_experience: 112},
    {id: 39,  name: 'Jigglypuff', type: 'normal',   base_experience: 95},
    {id: 94,  name: 'Gengar',     type: 'ghost, poison',   base_experience: 225},
    {id: 133, name: 'Eevee',      type: 'normal',   base_experience: 65}
  ]

/**
 * Pokegame: component containing two Pokedexes of randomly shuffled pokemans
 * @param {*} param0
 * @returns
 */
function Pokegame({ pokemans=DEFAULT_POKEMANS }) {
    const [handOne, handTwo] = assignRandomHands(pokemans);

    const gameResults = calcWinningHand(handOne, handTwo)

    return (
        <div className="Pokegame">
            <h2>Hand One:</h2>
            <Pokedex pokemans={ handOne } isWinner={ gameResults.handOneWin }/>
            <h2>Hand Two:</h2>
            <Pokedex pokemans={ handTwo } isWinner={ gameResults.handTwoWin }/>
        </div>
    )
}

export default Pokegame;