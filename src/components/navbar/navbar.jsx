import { useState } from "react"
import Button from "../button/button"
import Section from "../section/section";
import './navbar.css'


export default function Navbar({ data }) {

    const [name, setName] = useState("")
    const [attackNumber, setAttackNumber] = useState(0)
    const [newData, setNewData] = useState([])
    const [flag, setFlag] = useState(false)
    const [status, setStatus] = useState("active")

    function SearchByName() {

        setFlag(false)
        const dataNew = data.filter((terorist) => terorist.name === name)
        setNewData(dataNew)

    }

    function searchByNumberOfAttack() {

        setFlag(false)
        const dataNew = data.filter((terorist) => terorist.attacksCount === Number(attackNumber))
        setNewData(dataNew)
    }

    function changeFlag() {

        setFlag(true)
    }

    function findMostDangerous() {

        setFlag(false)
        const dangerousTerorists = []
        for (const terorist of data) {
            
            if (terorist.imageUrl && terorist.status === "active") {

                dangerousTerorists.push(terorist)
            }
        }
        console.log(dangerousTerorists);
        
        const mostAttacks = Math.max.apply(Math, dangerousTerorists.map(function(terorist) {return terorist.attacksCount}))
        const mostDangerous = dangerousTerorists.filter((terorist) => terorist.attacksCount === mostAttacks)

        setNewData(mostDangerous)

        
    }

    function searchByStatus() {

        setFlag(false)
        const dataNew = data.filter((terorist) => terorist.status === status)
        setNewData(dataNew)
    }



    return (
        <div className="navbar">
            <nav>
                <div className="div-search">
                <Button onclick={() => {SearchByName()}} name={"click"} id={"search"}></Button>
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Search by Name..." />
                </div>
                <div className="div-search">
                    <Button onclick={() => {searchByNumberOfAttack()}} name={"Serch"} id={"serch-by-attack"}/>
                    <input onChange={(e) => setAttackNumber(e.target.value)} type="number" placeholder="Search by Attack number..." />
                </div>
                <div className="div-search">
                    <Button name={"All"} id={"All"} onclick={changeFlag}/>
                </div>
                <div className="div-search">
                <select onChange={(e) => setStatus(e.target.value)}>
                    <option value="active">Active</option>
                    <option value="quiet">Quiet</option>
                    <option value="dead">Dead</option>
                    <option value="agent">Agent</option>
                </select>
                <Button onclick={() => {searchByStatus()}} name={"Serch"} id={"serch-by-status"}/>
                </div>
                <div className="div-search">
                    <Button name={"Most Dangerous"} id={"Most-Dangerous"} onclick={findMostDangerous}/>
                </div>

            </nav>
            <div>
                {!flag && <Section data={newData}/>}
                {flag && <Section data={data}/>}
            </div>
        </div>
    )

}