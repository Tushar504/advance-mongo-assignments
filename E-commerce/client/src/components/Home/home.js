import "./home.css"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export const Home=()=>{
   const [categories,setCategories]=useState([])
    useEffect(()=>{
        getCate()
    },[])

    const getCate=async()=>{
        try {
                let res=await fetch("http://localhost:1500/category")
                let data=await res.json()
                setCategories(data.data)
        } 
        catch (error) {
            console.log(error)
        }
    }
    return <div className="CateDiv" >
        {categories.map((ele)=>{
             return  <div key={ele._id} className="Cate">
             <img src={ele.Logo} />
             <Link to={`/product/${ele._id}`}><Button  variant="contained">{ele.Name}</Button></Link>
            
         </div>
        })}
               
              
    </div>
}