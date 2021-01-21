export default function CharacterForm(props) {

    //const isUpdating = () prop

    return (
        <>
            <h2>{props.index > -1 ? 'Edita' : 'Agrega'} un nuevo personaje </h2>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Nombre"
                onChange={props.handleChangeNewCharacter}
                value={props.form.name}
            />
            <input
                type="text"
                name="img"
                id="photo"
                placeholder="URL DE LA IMGEN"
                onChange={props.handleChangeNewCharacter}
                value={props.form.img}
            />
            <textarea
                name="biography"
                id="biography"
                onChange={props.handleChangeNewCharacter}
                value={props.form.biography}
            />
            <button onClick={props.index > -1
                ? props.handleUpdateCharacter
                : props.handleAddNewCharacter
            }
            > 
                {props.index > -1 ? 'Editar' : 'Agregar'} Personaje
            </button>
        </>
    )
}
