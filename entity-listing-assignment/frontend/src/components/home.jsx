import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import "./home.css"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
export const Home=()=>{
    const navigate=useNavigate()
    return (<div className='Info'>
        
    <div className='Heading'><h1 >Problem Statement</h1></div>
        
    <div className='Statement'>
        <h1 className='Head2'>Frontend</h1>
    <ul>
        <li>Entity Listing</li>
        <li>Atleast Two Filters</li>
        <li>Sorting</li>
        <li>Pagination</li>
    </ul>
    <h1 className='Head2'>Backend</h1>
    <ul>
        <li>Single API</li>
        <li>Pagination Counts</li>
        <li>Fetch Only Relavant Details</li>
      
    </ul>
    </div>
    <div className='ButtonDiv'>
    <Button onClick={()=> navigate("/list?page=1&pagesize=6&filter=all&sort=-1")}  variant="contained">Go To Movies Page <ArrowRightIcon /></Button>
    </div>
    </div>
    )
}