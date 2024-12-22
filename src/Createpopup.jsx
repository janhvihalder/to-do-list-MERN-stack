import { CgClose } from "react-icons/cg"
import axios from "axios"
import { useState } from "react"

function Createpopup({setpopup,fetchTasks}){
    const [title,settitle]=useState("")
    const [description,setdescription]=useState("")
    const [status,setstatus]=useState("")
    const createTask =() => {
        axios.post("http://localhost:5000/createTask", 
            {
                task:title,
                description:description,
                status:status
            }
        )
          .then(() => {
            setpopup(false)
            fetchTasks()  // Refresh task list after creating
          })
          .catch((error) => {
            console.log("Error creating task", error)
          })
      };
    return(
        <div className="popup-container">
            <div className="popup-div">
                {/* make a cross here */}
                <div style={{display:"flex",justifyContent:"flex-end"}}><CgClose onClick={()=>{setpopup(false)}} style={{cursor:"pointer"}}></CgClose></div>
                <div style={{fontSize:"medium", display:"flex", flexDirection:"column"}}>Title
                    <input onChange={(e)=>{settitle(e.target.value)}} value={title} type="text" style={{width:"100%",height:"2rem",fontSize:"medium",outline:"none"}}/>

                </div>
                <div style={{fontSize:"medium", display:"flex", flexDirection:"column"}}>Description
                    <textarea onChange={(e)=>{setdescription(e.target.value)}} value={description} type="text" style={{width:"100%",height:"10rem",fontSize:"medium",outline:"none"}}/>
                </div>
                <div style={{fontSize:"medium", display:"flex", flexDirection:"column"}}>Status
                    <input onChange={(e)=>{setstatus(e.target.value)}} value={status} type="text" style={{width:"100%",height:"2rem",fontSize:"medium",outline:"none"}}/>
                </div>
                <button className="create" onClick={()=>{createTask()}}>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Createpopup