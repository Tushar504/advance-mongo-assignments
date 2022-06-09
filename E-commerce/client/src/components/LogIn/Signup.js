import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export const Signup=()=>{
    const [address,setadd]=useState({
        line_1: "",
        city: "",
        state: "",
    })
    const [data,setData]=useState({
        First_Name:"",
        Last_Name:"",
        Email:"",
        Password:"",
        Address:address
   })
 
   const update=(target)=>{
           setData({
               ...data,
               [target.id]:target.value
           })
   }
   console.log(data)
   const upadd=(target)=>{
       setadd({
           ...address,
           [target.id]:target.value
       })
   }
    return (
        <form style={{margin:"auto",position:"relative",top:"180px",padding:"10px",width:"500px",textAlign:"center",boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"}}>
        <Button sx={{color:"rgb(25,118,210)",fontWeight:"bold",fontSize:20}}  variant="text">Signup</Button><br></br>
        <TextField onChange={(e)=>update(e.target)} id="First_Name" sx={{margin:0.5}}  id="outlined-basic" label="First Name" variant="outlined" />
        <TextField onChange={(e)=>update(e.target)} id="Last_Name" sx={{margin:0.5}} margin='dense' id="outlined-basic" label="Last Name" variant="outlined" /><br></br>
        <TextField onChange={(e)=>update(e.target)} id="Email" sx={{margin:0.5}} margin='dense' id="outlined-basic" label="Email" variant="outlined" />
        <TextField onChange={(e)=>update(e.target)} id="Password" sx={{margin:0.5}} margin='dense' id="outlined-basic" label="Password" variant="outlined" /><br></br>
        <Button sx={{color:"rgb(25,118,210)",fontWeight:"bold",textTransform: "capitalize"}}  variant="text">Address</Button><br></br>
        <TextField onChange={(e)=>upadd(e.target)} id="" sx={{margin:0.5}} margin='dense' id="outlined-basic" label="Street" variant="outlined" />
        <TextField onChange={(e)=>upadd(e.target)} sx={{margin:0.5}} margin='dense' id="outlined-basic" label="City" variant="outlined" /><br></br>
        <TextField onChange={(e)=>upadd(e.target)} sx={{margin:0.5}} margin='dense' id="outlined-basic" label="State" variant="outlined" /><br></br>
       
        <br></br>
        <Button  variant="contained">Submit</Button><br></br>
        <br></br>
        <Link to="/login"><Button sx={{color:"rgb(25,118,210)",fontWeight:"bold",textTransform: "capitalize"}}  variant="text">Login</Button></Link>
   </form>
    )
}