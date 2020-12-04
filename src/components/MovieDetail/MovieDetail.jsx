export default function MovieDetail({ movie }) {
    return (
        <div>
            <h1>{movie.title}</h1>
            <img src={movie.img} alt={movie.title}/>
            <p>{movie.description}</p>

    {movie.characters.map(character => <h3>{character.name}</h3>)}
        </div>
    )
}