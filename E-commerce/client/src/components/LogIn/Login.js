import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useState } from 'react';
export const Login=()=>{
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
    return (
        <form style={{margin:"auto",position:"relative",top:"200px",padding:"10px",width:"300px",textAlign:"center",boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"}}>
             <Button sx={{color:"rgb(25,118,210)",fontWeight:"bold",fontSize:20}}  variant="text">Login</Button><br></br>
             <TextField onChange={(e)=>update(e.target)} margin='dense' id="outlined-basic" label="Email" variant="outlined" /><br></br>
             <TextField onChange={(e)=>update(e.target)} margin='dense' id="outlined-basic" label="password" variant="outlined" /><br></br>
             <br></br>
             <Button  variant="contained">Submit</Button><br></br>
             <br></br>
             <Link to="/signup"><Button sx={{color:"rgb(25,118,210)",fontWeight:"bold",textTransform: "capitalize"}}  variant="text">Signup</Button></Link>
        </form>
    )
}