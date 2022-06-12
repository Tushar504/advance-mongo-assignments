import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const Login=()=>{
    const navigate=useNavigate()
    const [data,setData]=useState({
         Email:"",
         Password:""
    })
    const update=(target)=>{
            setData({
                ...data,
                [target.id]:target.value
            })
    }
    console.log(data)
    const Login=async()=>{
           try {
                   let res=await fetch("http://localhost:1500/user",{
                        method:"POST",
                        body:JSON.stringify(data),
                        headers: {
                            'Content-Type': 'application/json'
                           
                          },
                   })
                   const user=await res.json()
                   console.log(user.data)
                   if(user.message!="success"){
                   alert(`${user.message}`)
                   }
                   else{
                    alert(`${user.message}`)
                    localStorage.setItem("User_Id",user.data._id)
                    navigate("/")
                   }
           } 
           catch (error) {
              console.log(error)
           }
    }
    return (
        <form style={{margin:"auto",position:"relative",top:"200px",padding:"10px",width:"300px",textAlign:"center",boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"}}>
             <Button sx={{color:"rgb(25,118,210)",fontWeight:"bold",fontSize:20}}  variant="text">Login</Button><br></br>
             <TextField onChange={(e)=>update(e.target)} margin='dense' id="Email" label="Email" variant="outlined" /><br></br>
             <TextField onChange={(e)=>update(e.target)} margin='dense' id="Password" label="password" variant="outlined" /><br></br>
             <br></br>
             <Button onClick={()=>Login()}  variant="contained">Submit</Button><br></br>
             <br></br>
             <Link to="/signup"><Button sx={{color:"rgb(25,118,210)",fontWeight:"bold",textTransform: "capitalize"}}  variant="text">Signup</Button></Link>
        </form>
    )
}