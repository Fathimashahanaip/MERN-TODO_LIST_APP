import React, { useState } from 'react'
import axios from 'axios'

function Create() {
  const [task, settask] = useState({})
  const handleAdd=()=>{
    axios.post('http://localhost:3001/add',{task:task})
    .then(result => console.log(result))
    .catch(err=>console.log(err))


  }
  return (
    <div>
        <input style={{paddingLeft:"5cm", borderColor:"white", borderRadius:"10px"}} type='text' placeholder='Enter Task' onChange={(e)=>settask(e.target.value)}/>
        <button type='submit' onClick={handleAdd} style={{fontFamily:"monospace",color:'whitesmoke',backgroundColor:'black',borderColor:"skyblue",padding:"5px",borderRadius:"10px"}}>Add</button><br/>
    </div>
  )
}

export default Create