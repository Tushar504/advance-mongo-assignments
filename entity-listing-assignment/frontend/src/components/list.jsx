import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import {useLocation} from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import HomeIcon from '@mui/icons-material/Home';
import "./list.css"
export const List=()=>{
  const search = useLocation().search;
  const page = new URLSearchParams(search).get('page')||1
  const pagesize=new URLSearchParams(search).get('pagesize')||6
  const filter=new URLSearchParams(search).get('filter')||"all"
  const sort=new URLSearchParams(search).get('sort')||1
  const navigate=useNavigate()
    const [Data,setData]=useState([])
    const [show,setshow]=useState(false)
    let pages=[]
    if(Data.length!=0){
    for(var i=1;i<=Data.total_pages;i++){
        pages.push(i)
    }
}
    useEffect(()=>{
       getData()
    },[page,filter,sort])
  
    const getData=async()=>{
        try {
            let res=await fetch(`https://entity-listing.herokuapp.com/movies/list?page=${page}&pagesize=${pagesize}&filter=${filter}&sort=${sort}`)
            let data=await res.json()
            setData(data)
            setshow(true)
        } 
        catch (error) {
            console.log(error)
        }
    }
    

    return (<div className="OuterDiv">
          <Button onClick={()=> navigate('/')} sx={{position:'fixed',left:5,top:20,borderRadius:20}} variant="contained"><HomeIcon /></Button>
           <div className="SelectTagDiv">
             <div>
            <Button variant="contained">Filter</Button>
            
            <select className="SelectTag" value={filter} onChange={(e)=>{
                setshow(false)
                navigate(`/list?page=1&pagesize=6&filter=${e.target.value}&sort=${sort}`)}}>
               <option value="all">All</option>
               <option value="game">Games</option>
               <option value="series">Series</option>
               <option value="movie">Movies</option>
            </select>
            </div>
            <div>
            <Button variant="contained">Sort</Button>
            <select className="SelectTag" value={sort} onChange={(e)=>{
                setshow(false)
                navigate(`/list?page=1&pagesize=6&filter=${filter}&sort=${e.target.value}`)}}>
                  
                  <option value="1">Year(Ascending)</option>
                  <option value="-1">Year(Decending)</option>
            </select>
            </div>
           </div>
           {show ?<div className="mainDiv">
               {Data["list"].map((ele)=>{
                   return (<div key={ele._id} className="inDiv" >
                       <img src={ele.Poster}/>
                       <p>{ele.Title}</p>
                       <p>Year: {ele.Year}</p>
                       <p>Type: {ele.Type}</p>
                   </div>)
               })}
           </div>:<div style={{width:'70%',margin:'auto',textAlign:'center',marginTop:'50px'}}> <CircularProgress color="inherit" /></div>}
            <div>
                { show ?pages.map((e)=>{
                    
                    return Number(page)===e ?<Button  key={e}  variant="contained" disabled>{e}</Button> :<Button onClick={()=> { setshow(false) ; navigate(`/list?page=${e}&pagesize=6&filter=${filter}&sort=${sort}`)}} key={e}  variant="contained">{e}</Button>
                }):null}
            </div>

        </div>
            
       )
    
}