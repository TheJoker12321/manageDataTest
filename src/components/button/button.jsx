export default function Button({name, id, onclick}) {

    return (

        <button id={id} onClick={onclick}>{name}</button>
    )

}