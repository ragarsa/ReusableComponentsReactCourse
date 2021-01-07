import './styles.css'

export default function CharacterDetail({ character }) {
    return (
        <div className='character-detail-container'>
            <h3> { character.name } </h3>
            <img src={ character.img } alt={ character.name } />
            <p> { character.biography } </p>
        </div>
    )
}