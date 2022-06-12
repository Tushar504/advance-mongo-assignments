import { useEffect, useState } from "react"
import Button from '@mui/material/Button';
import "./Cart.css"
export const Cart=()=>{
    let userid=localStorage.getItem("User_Id")
    const [CartData,setCartData]=useState([])
    useEffect(()=>{
        getCart()
    },[])

    const getCart=async()=>{
         try {
                let res=await fetch(`http://localhost:1500/cart/${userid}`)

                const data=await res.json()
                console.log(data)
                setCartData(data.data)
         } 
         catch (error) {
            console.log(error)
         }
    }

    return (<div className="cartMainDiv">
        {CartData.map((ele)=>{
            return (<div className="cartInDiv">
                      <img src={ele.Product_Img}/>
                      <h6>{ele.Product_Name}</h6>
                      <h6>₹{ele.Price}</h6>
                      <div className="CountDiv">
                      <button >+</button>
                      <h6>{ele.count}</h6>
                      <button>-</button>
                      </div>
                      <div>
                      <Button sx={{marginTop:'75px'}} variant="contained">Remove</Button>
                      </div>
            </div>)
        })}
    </div>)
}