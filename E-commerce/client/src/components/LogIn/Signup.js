import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const Signup=()=>{
    const navigate=useNavigate()
    const [address,setadd]=useState({
        Street: "",
        City: "",
        State: "",
    })
    const [data,setData]=useState({
        First_Name:"",
        Last_Name:"",
        Email:"",
        Password:"",
        Address:null
   })
 
   const updateForm=(target)=>{
           setData({
               ...data,
               [target.id]:target.value
           })
   }
   
   const upadd=(target)=>{
       setadd({
           ...address,
           [target.id]:target.value
       })
       setData({
        ...data,
        Address:address
       })
   }
   const Register=async()=>{
        try {
           let res=await fetch("http://localhost:1500/user/create",{
                        method:"POST",
                        body:JSON.stringify(data),
                        headers: {
                            'Content-Type': 'application/json'
                           
                          },
                   })
                let user=await res.json()
                if(user.message!=="success"){
                    alert(`{user.message}`)
                }
                else{
                    alert(`{user.message}`)
                    navigate("/")
                }
        } 
        catch (error) {
            console.log(error)
        }
   }
    return (
        <form style={{margin:"auto",position:"relative",top:"180px",padding:"10px",width:"500px",textAlign:"center",boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"}}>
        <Button sx={{color:"rgb(25,118,210)",fontWeight:"bold",fontSize:20}}  variant="text">Signup</Button><br></br>
        <TextField onChange={(e)=>updateForm(e.target)} id="First_Name" sx={{margin:0.5}}  label="First Name" variant="outlined" />
        <TextField onChange={(e)=>updateForm(e.target)} id="Last_Name" sx={{margin:0.5}} margin='dense'  label="Last Name" variant="outlined" /><br></br>
        <TextField onChange={(e)=>updateForm(e.target)} id="Email" sx={{margin:0.5}} margin='dense'  label="Email" variant="outlined" />
        <TextField onChange={(e)=>updateForm(e.target)} id="Password" sx={{margin:0.5}} margin='dense'  label="Password" variant="outlined" /><br></br>
        <Button sx={{color:"rgb(25,118,210)",fontWeight:"bold",textTransform: "capitalize"}}  variant="text">Address</Button><br></br>
        <TextField onChange={(e)=>upadd(e.target)} id="Street" sx={{margin:0.5}} margin='dense' label="Street" variant="outlined" />
        <TextField onChange={(e)=>upadd(e.target)} id="City" sx={{margin:0.5}} margin='dense' label="City" variant="outlined" /><br></br>
        <TextField onChange={(e)=>upadd(e.target)} id="State" sx={{margin:0.5}} margin='dense'  label="State" variant="outlined" /><br></br>
       
        <br></br>
        <Button onClick={()=>Register()} variant="contained">Submit</Button><br></br>
        <br></br>
        <Link to="/login"><Button sx={{color:"rgb(25,118,210)",fontWeight:"bold",textTransform: "capitalize"}}  variant="text">Login</Button></Link>
   </form>
    )
}