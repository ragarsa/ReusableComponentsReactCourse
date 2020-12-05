export default function CharacterDetail ({ character }) {
    return (
     <>
        <h3> { character.name } </h3>
        <img src={ character.img } alt={ character.name }/>
        <p> { character.biography } </p>
    </>
    )}