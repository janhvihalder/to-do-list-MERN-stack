import './App.css'
import Nav from './components/Nav.jsx'
import Tasks from './components/tasks.jsx'
import { useEffect, useState } from "react"
import axios from "axios"
import Createpopup from './Createpopup.jsx'


function App() {
  const [tasks,tasksetter]=useState(null)
  const [showpopup,setpopup]=useState(false)
  const [search,setsearch]=useState("")
  // when page loads for the first time
  useEffect(() => {
    axios.get("http://localhost:5000/myapi")
    .then((response)=>{
      console.log(response.data)
      tasksetter(response.data)
    })
    .catch((error)=>{
      console.log(error)
      tasksetter(false)
    })
    return () => {}
  }, [])

    // Fetch tasks when the component loads
    const fetchTasks = () => {
      axios.get("http://localhost:5000/myapi")
        .then((response) => {
          console.log(response.data)
          tasksetter(response.data)
        })
        .catch((error) => {
          console.log(error)
          tasksetter(false)
        })
    }
  
    useEffect(() => {
      fetchTasks()
    }, [])
  
    // Create Task

  
    // Delete Task



  return (
    
    <>
      {showpopup && <Createpopup fetchTasks={fetchTasks} setpopup={setpopup}/> }
       
      <div style={{display:"flex",flexDirection:"column", gap:"10px"}}>
        <nav><Nav setsearch={setsearch} setpopup={setpopup}/></nav>
        <div style={{display:"flex", flexWrap:"wrap",justifyContent:"flex-start",alignItems:"center"}}>
          {
            tasks===null
            ?
            <div>Loading...</div>
            :
            tasks===false
            ?
            <div>Error</div>
            :
            tasks.filter((item)=>item.task.includes(search)).map((task)=>{
              return(
                <Tasks id={task._id} title={task.task} description={task.description} status={task.status} fetch={fetchTasks}/>
              )
            })
          }
        </div>

      </div>
  
    </>
  )
}

export default App
