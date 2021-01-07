export default function MovieForm(props) {
    return (
        <>
            <h2>Agrega una nueva película</h2>
            <input 
                type="text" 
                name="title" 
                id="title" 
                placeholder="Titulo"
                onChange={ props.handleChangeTitle }
                value={props.form.title}
            />
            <input 
                type="text"
                name="photo"
                id="photo"
                placeholder="URL DE LA IMGEN"
                onChange={ props.handleChangeImg }
                value={props.form.img}
            />
            <textarea 
                name="description"
                id="description"
                onChange={ props.handleChangeDesc }
                value={props.form.description}
            />
            <button onClick={props.handleAddMovie}> Agregar Película </button>
        </>
    )
}