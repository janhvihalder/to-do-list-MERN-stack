import { FaTrash } from "react-icons/fa"
import axios from "axios"
// automatic parse to json

function Tasks({
    id="idnum",
    title="<task>",
    description="<description>",
    status="<status>",
    fetch="<>"
}){
    function deleteTask(){
        console.log(id)
        axios.post("http://localhost:5000/deleteTask", { id: id })
          .then((res) => {
             // Refresh task list after deleting
            console.log(res.data)
            fetch()
            
          })
          .catch((error) => {
            console.log("Error deleting task", error)
          })
      };

    return(
        // parent component
        <div className="task-card">
            <div className="titlebar">
                {/* task name */}
                <div > {title}</div>

                {/* delete trash button */}
                <FaTrash className="trash" onClick={()=>{deleteTask()}}/>
            </div>

            {/* separator */}
            <div style={{height:"1px", width:"100%",background:"black"}}/>

            {/* description */}
            <div>
                {description}
           </div>

           {/* status footer */}
            <footer className="footer">
                {status}
            </footer>
        </div>
        

    )
}

export default Tasks