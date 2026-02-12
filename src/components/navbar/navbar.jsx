import { useState } from "react"
import Button from "../button/button"
import Section from "../section/section";


export default function Navbar({ data }) {

    const [name, setName] = useState("")

    function SearchByName() {

        const dataNew = data.filter((terorist) => terorist.name === name)
        console.log(dataNew);


        return (

            <Section data={dataNew} />
        )
    }




    return (
        <div>
            <nav>
                <Button onclick={() => SearchByName()} name={"click"} id={"search"}></Button>
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Search by Name..." />
            </nav>

        </div>
    )

}