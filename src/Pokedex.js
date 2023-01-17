import Pokecard from './Pokecard';
import './Pokedex.css';

/**
 * Pokedex component displaying sequence of multiple Pokecard components
 *
 * @param {Array} pokemans
 */

function Pokedex({ pokemans, isWinner }) {
  return (
    <div className='Pokedex'>
      <div className='Pokedex-hand'>
        { pokemans.map(pokemon => <Pokecard pokemon={pokemon} />) }
      </div>
      { isWinner ? <p className='Pokedex-win-msg'>THIS HAND WINS!</p> : '' }
    </div>
  );
}

export default Pokedex;