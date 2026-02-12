export default function Button({name, id, onclick}) {

    return (

        <button className="button-click" id={id} onClick={onclick}>{name}</button>
    )

}