import { useEffect, useState } from 'react'
import TodoList  from './TodoList'
import lista from "./lista"
import CreateList from './CreateList'
import './App.css'

function App() {
  const [tareas, setTarea] = useState([]);
  
  useEffect(()=>{
    setTarea(lista);
  },[]);

  const createTarea = (title) =>{
    setTarea([...tareas,{
      title: title,
      description: 'new tarea',
      id: tareas.length
    }])
  }

  return (
    <>
      <CreateList createTarea={createTarea}/>
      <TodoList tareas={tareas}/>
    </>
  )
}

export default App
