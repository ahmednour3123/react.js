import { useDispatch, useSelector } from "react-redux"
import { useContext, useEffect, useState } from "react";
import Fav from './../../store/action/fav';
import { LangContext } from "../../../contexts/language";
export default function Favorites(props) {
const {lan}= useContext(LangContext)
const favo= useSelector((state)=>state.fav.fav)
console.log(favo)
const dispatch=useDispatch()

const del =(id)=>{ 
const list = favo.filter(f => f.id !== id)
dispatch(Fav(list))
}


return (
<>
{favo.map((prd) => {
return (
    <>
<div class="m-2"  style={{display:"inline-block"}}>
<img src={`https://image.tmdb.org/t/p/w500/${prd.poster_path}`} class="img-fluid rounded " alt="" style={{width:"300px" }}/>        
<h6 >{prd.title}</h6>
<p >{prd.release_date}</p>
<button onClick={()=>{del(prd.id)}}>remove</button>
</div>
{lan}
</>   
)



}
)
}
</>
    )}

   
    

