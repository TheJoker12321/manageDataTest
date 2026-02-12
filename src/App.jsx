import './App.css'
import Navbar from './components/navbar/navbar'
import Section from './components/section/section'
import data from './data/data.json'

function App() {

  return (
   <>
   <Navbar data={data}></Navbar>
   {/* <Section data={data}/> */}
   </>
  )
}

export default App
