import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'
import {FaCheckCircle,FaCircle} from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Button, Card } from 'react-bootstrap'



function Home() {
  // const imagestyle ={
  //   backg:"url('https://static8.depositphotos.com/1361307/912/i/450/depositphotos_9120193-stock-photo-freedom.jpg'",
  //   height: "100vh",
  //   marginTop: "-70px",
  //   fontSize: "50px",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat"
  // }
    const [todos, settodos] = useState([])

    useEffect(() => {
      axios.get('http://localhost:3001/get')
      .then(result=>settodos(result.data))
      .catch(err=>console.log(err))
    
   
    }, [])
    const handleEdit=(id)=>{
      axios.put('http://localhost:3001/update/'+id)
      .then(result=>console.log(result))
      .catch(err=>console.log(err))
    

    }
    const handleDelete=(id)=>{
      axios.delete('http://localhost:3001/delete/'+id)
      .then(result=>console.log(result))
      .catch(err=>console.log(err))

    }
    // const constyle={
    //   color: "antiquewhite",
    //   align-content: "center"

    // }
    
  return (
    <div    style = {{
      backgroundImage:
      'url("https://images.pexels.com/photos/2736499/pexels-photo-2736499.jpeg?cs=srgb&dl=pexels-content-pixie-1405717-2736499.jpg&fm=jpg)',
      
  
      backgroundSize: "cover",
      height: "100vh",
      width:"100%",
      

      backgroundRepeat: "no-repeat",
   }}>
    {/* <div style={{backgroundImage:'url("https://media.istockphoto.com/id/1432690812/photo/old-wooden-dock-at-the-lake-sunset-shot.jpg?s=612x612&w=0&k=20&c=A9cpzCCO_nN2B0pCpcOGBBzr9WXooLCEOzNB4IE-KNM=',
      backgroundRepeat:"no-repeat",
      backgroundSize: "cover",
    }}>
       */}
      <b> <h1 style={{fontFamily:"cursive",fontSize:"70px",color:"whitesmoke",paddingTop:"1cm"}}>ToDo List</h1></b>
        <br/>
        <br/>
        <Create/>
        <br/>
        <br/>
      
    

{
    todos.length===0 ?
    <div style={{color:'whitesmoke'}}><h2>No Records</h2></div>
    :
    todos.map(todo =>(
      <Card  style={{ width: '18rem',display:'flew',alignItems:'right',float:"left",backgroundColor:"whitesmoke",borderRadius:"35%",borderColor:"whitesmoke",fontFamily:"cursive",fontSize:"25px"}} className='Car m-3'>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>       
</Card.Title>
        <Card.Text>
      <div>
        <div className='checkbox' onClick={()=> handleEdit(todo._id)} style={{alignItems:'center',cursor:'pointer', fontSize:"20px"}}>
          
          {todo.done ? 
          <FaCheckCircle />
          


          :
          <FaCircle/>
        
          
          
}     
</div>
<div>
          <p className={todo.done ? 'line_through' :"" }> {todo.task}</p>
          <Button variant="dark"><RiDeleteBin6Fill  onClick={()=>handleDelete(todo._id)} style={{width:"1.5cm"}}/></Button>
            

            </div>
       </div>
       </Card.Text>
       
       </Card.Body></Card>



            

    ))
}




</div>

    // </div>
  
  )
}

export default Home