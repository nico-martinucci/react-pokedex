import Pokecard from './Pokecard';

/**
 * Pokedex component displaying sequence of multiple Pokecard components
 *
 * @param {Array} pokemans
 */

function Pokedex({ pokemans }) {
  return (
    <div className='Pokedex'>
      { pokemans.map(pokemon => <Pokecard pokemon={pokemon} />) }
    </div>
  );
}

export default Pokedex;