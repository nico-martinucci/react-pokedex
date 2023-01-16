const POKEMON_IMAGE_BASE_URL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

/**
 * Pokecard component showing a single Pokemon with its name, image, type,
 * and base experience
 *
 * @param {Object} pokemon
 */

function Pokecard({ pokemon }) {
  const { id, name, type, base_experience } = pokemon;
  return (
    <div className='Pokecard'>
      <h1 className='Pokecard-name'>{ name }</h1>
      <img
        className='Pokecard-img'
        src={`${POKEMON_IMAGE_BASE_URL}${id}.png`}
        alt={ name } />
      <p className='Pokecard-type'>Type: { type }</p>
      <p className='Pokecard-exp'>EXP: { base_experience }</p>
    </div>
  );
}

export default Pokecard;