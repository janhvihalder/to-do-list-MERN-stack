function Nav({
    setpopup,
    setsearch
}){
    return(
        <div className="navbar" >
            <div className="website-details" style={{display:"flex",flexGrow:1, justifyContent:"space-between", alignItems:"center"}}>
                <div><img src="/vite.svg"></img></div>
                <div className="search" >
                    <img src="/search-icon.png" style={{height:"20px", width:"20px", borderRadius:"5px",padding:"4px"}}/>
                    <input onChange={(e)=>{setsearch(e.target.value)}} className="tb" type="text" placeholder="search" style={{fontSize:"large"}}/>

                </div>
                <button className="create" onClick={()=>{setpopup(true)}}>Create A Task +</button> 
            </div>
         </div>
    )
    
}
export default Nav