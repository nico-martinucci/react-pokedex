import Pokedex from "./Pokedex";
import { assignRandomHands } from "./helpers";

/**
 * Pokegame: component containing two Pokedexes of randomly shuffled pokemans
 * @param {*} param0 
 * @returns 
 */
function Pokegame({ pokemans }) {
    const [handOne, handTwo] = assignRandomHands(pokemans);

    return (
        <div>
            <h2>Hand One:</h2>
            <Pokedex pokemans={ handOne }/>
            <h2>Hand Two:</h2>
            <Pokedex pokemans={ handTwo }/>
        </div>
    )
}

export default Pokegame;