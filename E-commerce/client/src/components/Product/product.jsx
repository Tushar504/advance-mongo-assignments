import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import Button from '@mui/material/Button';
import "./product.css"
export const Product=()=>{
    const id=useParams().id
    const [ProductData,setProductData]=useState([])
    useEffect(()=>{
         getProducts()
    },[])

    const getProducts=async()=>{
         try {
            let res=await fetch(`http://localhost:1500/products/category/${id}`)
            let data=await res.json()
            setProductData(data.data)
            
         } 
         catch (error) {
            console.log(error)
         }
    }
    const addToCart=async(ele)=>{
        try {
            let userid=localStorage.getItem("User_Id")
            let Data={...ele,User_ID:userid}
            console.log(Data)
            let res=await fetch(`http://localhost:1500/cart/create/${ele._id}`,{
                method:"POST",
                body:JSON.stringify(Data),
                headers: {
                    'Content-Type': 'application/json'
                   
                  },
            })
            let data=await res.json()
            console.log(data)

        } catch (error) {
            console.log(error)
        }
         

    }
    return (
        <div className="ProdMainDiv">
            {ProductData.map((ele)=>{
                 return (<div className="ProdDiv" key={ele._id}>
                         <img src={ele.Product_Img} alt=""/>
                         <p className="BrandName">{ele.Brand_ID.Brand_Name}</p>
                         <p>{ele.Product_Name}</p>
                         <p>₹{ele.Price}</p>
                         <Button onClick={()=>addToCart(ele)} variant="contained">Add To Cart</Button>
                 </div>)
            })}
        </div>
    )
}