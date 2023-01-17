import Pokedex from "./Pokedex";
import "./Pokegame.css"
import { assignRandomHands, calcWinningHand } from "./helpers";

/**
 * Pokegame: component containing two Pokedexes of randomly shuffled pokemans
 * @param {*} param0
 * @returns
 */
function Pokegame({ pokemans }) {
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