export default function MovieForm(props) {
    return (
        <>
            <h2>{props.index ? 'Edita' : 'Agrega'} una nueva película</h2>
            <input 
                type="text" 
                name="title" 
                id="title" 
                placeholder="Titulo"
                onChange={ props.handleChangeNewMovie}
                value={props.form.title}
            />
            <input 
                type="text"
                name="img"
                id="photo"
                placeholder="URL DE LA IMGEN"
                onChange={ props.handleChangeNewMovie }
                value={props.form.img}
            />
            <textarea 
                name="description"
                id="description"
                onChange={ props.handleChangeNewMovie }
                value={props.form.description}
            />
            <button onClick={props.index ? () => props.handleUpdateMovie(props.index) : props.handleAddMovie}>
                {props.index ? 'Editar' : 'Agregar'} Película 
            </button>
        </>
    )
}