import { useState } from 'react'
import MovieDetail from '../MovieDetail'
import MovieForm from '../MovieForm'

const initialMoviesState = [
    {
        title: 'Cars',
        img: 'https://r1.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic1.abc.es%2Fmedia%2Fpeliculas%2F000%2F019%2F042%2Fcars-2.jpg&nuevoancho=620&medio=abc',
        description: 'Es una película de carros que hablan para niños Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae nulla non voluptatum quasi molestias cumque cum, dolorem atque aliquid repellendus nemo odio asperiores nobis voluptate doloribus eaque similique officiis vitae!Illum odit dolor natus, similique aperiam veniam reiciendis commodi error asperiores laudantium quos sed laborum aliquid adipisci nulla tenetur praesentium quaerat aspernatur voluptatibus. Voluptas placeat distinctio quisquam error necessitatibus velit.',
        characters: [
            {
                name: 'Rayo Macuin',
                img: 'https://www.chedraui.com.mx/medias/887961437218-00-CH515Wx515H?context=bWFzdGVyfHJvb3R8MTExNDY5fGltYWdlL2pwZWd8aDA3L2gzNy85OTM5MDg2NDc1Mjk0LmpwZ3w2MTM5ZjcwYTE0YTYwMTU5NWMwNGY5ZGY5ZWQzNDE2ODJhYzAyODJmMTE1NDQxNDliYjZmNGJhMWFmMDY1NTMz',
                biography: 'Medio mamón pero bueno'
            },
            {
                name: 'Mate',
                img: 'https://http2.mlstatic.com/D_NQ_NP_943920-MLM31409800792_072019-O.webp',
                biography: 'Medio wey pero leal'
            }
        ]
    },
    {
        title: 'Toy Story',
        img: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/13AA0A27E3DB7AC2012BD9678FBAC921C7BD09CD827D1E4F1F1CA6ACE3C054AD',
        description: 'Juguetes que hablan cuando no los ves',
        characters: [
            {
                name: 'Gudi',
                img: 'https://vignette.wikia.nocookie.net/toystory/images/0/05/Profile_-_Woody.jpg/revision/latest?cb=20200928032134&path-prefix=es',
                biography: 'Vaquero que tiene una serpiente en su bota'
            },
            {
                name: 'Buzz Laityir',
                img: 'https://resources.claroshop.com/medios-plazavip/s2/10252/1174866/5d43c93399561-figura-de-accion-disney-toy-story-4-buzz-lightyear-camina-1600x1600.jpg',
                biography: 'Juguete que se cree humano'
            }
        ]
    },
    {
        title: 'Pollitos en Fuga',
        img: 'https://autonomia.mx/wp-content/uploads/2020/07/1543548.jpg',
        description: 'Pollos que intentan huir',
        characters: []
    }
]

const initialNewMovieState = {
    title: '',
    img: '',
    description: '',
}


function MoviesList() {
    const [movies, setMovies] = useState(initialMoviesState)
    const [newMovie, setNewMovie] = useState(initialNewMovieState)
    const [index, setIndex] = useState(null)

    
    const clearInputs = () => {
        setNewMovie(initialNewMovieState)
    }

    const formatTitle = (title) => title.toLowerCase().trim()

    const isRepeatedMovie = () =>  movies.some(movie =>
           formatTitle(movie.title) === formatTitle(newMovie.title)
        )

    

    const validateInput = () => {
        const { title, img, description } = this.state.newMovie
        if (!title || !img || !description) {
            alert('Todos los campos deben ser requeridos');
            return false

        }
        if (isRepeatedMovie()) {
            alert('Ya existe la película')
            return false
        }
        return true
    }

    const handleChangeNewMovie = event => {
        setNewMovie({
            ...newMovie,
            [event.target.name]: event.target.value
        })
    }

    const handleAddMovie = event => {
        event.preventDefault()
        const isValidated = validateInput()
        if (isValidated()) {
            newMovie.characters = []
            movies.push(newMovie);
            setMovies( movies );
            alert('La película fue agregada con éxito');
            clearInputs()
        }
    }

    const handleSelectMovie = index => {
        const movie = movies[index]
        setNewMovie({ ...movie })
        setIndex(index)
    }

    const handleUpdateMovie = index => {
        const movie = movies[index]
        movies[index] = Object.assign(movie, newMovie)
        setMovies(movies)
        setIndex(null)
        clearInputs()

    }

    const handleDeleteMovie = index => {
        if (window.confirm('Estás seguro de eliminar esta movie?')) {
            const m = [...movies]
            m.splice(index, 1)
            setMovies(m)
        }
    }


    const handleAddCharacter = (character, index) => {
        const movies_ = [...movies]
        movies_[index].characters.push(character)
        setMovies(movies_)
    }

    const handleUpdateCharacter = (updatedCharacter, movieIndex, characterIndex) =>{
        const movie = movies[movieIndex]
        const character = movie.characters[characterIndex]
        movies[movieIndex].characters[characterIndex] = Object.assign(character, updatedCharacter)
        setMovies(movies)
    }

    const handleDeleteCharacter = (characterIndex, movieIndex) => {
        if (window.confirm('Estás seguro de eliminar este personaje?')) {
            const m = [...movies]
            m[movieIndex].characters.splice(characterIndex, 1)
            setMovies(m)
        }
    }

    return (
        <>
            <MovieForm
                handleChangeNewMovie={handleChangeNewMovie}
                handleAddMovie={handleAddMovie}
                handleUpdateMovie={handleUpdateMovie}
                form={newMovie}
                index={index}

            />
            {movies.length > 0 ?
                movies.map((movie, index) =>
                    <MovieDetail
                        movie={movie}
                        key={index}
                        index={index}
                        handleSelectMovie={handleSelectMovie}
                        handleDeleteMovie={handleDeleteMovie}
                        handleAddCharacter={handleAddCharacter}
                        handleUpdateCharacter={handleUpdateCharacter}
                        handleDeleteCharacter={handleDeleteCharacter}
                    />
                )
                : <img
                    src="https://www.sagpansetu.com/img/nodata-available.jpg"
                    alt="No hay"
                />

            }
        </>
    )
}

export default MoviesList