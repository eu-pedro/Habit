import { Habit } from "./components/Habit"
import './styles/global.css'


function App() {
  return (
    <div>
      <Habit completed={3}/>
      <Habit completed={5}/>
      <Habit completed={15}/>
      <Habit completed={14}/>
      
    </div>
  )
}

export default App


// Componente : Reaproveitar / isolar 
// Props: Uma informação que os componentes recebem