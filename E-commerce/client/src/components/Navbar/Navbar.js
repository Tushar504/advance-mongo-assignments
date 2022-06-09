
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import "./Navbar.css"
export const Navbar=()=>{
    return (
        <div className='Navbar'> 

            <Link to="/"> <Button sx={{color:"white"}} variant="text">Home</Button></Link>
            <Link to="/products"><Button sx={{color:"white"}} variant="text">Products</Button></Link>
            <Link to="/cart"><Button sx={{color:"white"}} variant="text">Cart</Button></Link>
            <Link to="/login"><Button sx={{color:"white"}} variant="text">Login</Button></Link>
        </div>
    )
}