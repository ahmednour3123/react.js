import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";

import Movvies from '../../store/action/movies'
import Fav from './../../store/action/fav';
 const Movies=() =>{
    const moviess= useSelector((state)=>state.movies.movies)
    const favv= useSelector((state)=>state.fav.fav)

    function addfav (obj) {
    

        dispatch(Fav([ ...favv, obj]))
        
       }
    const dispatch=useDispatch()
useEffect(() => {
 dispatch(Movvies())
},[])

    return (
<>


{moviess.map((prd) => {

return (
    <>
<div class="m-2" style={{display:"inline-block"}}>

<img src={`https://image.tmdb.org/t/p/w500/${prd.poster_path}`} class="img-fluid rounded " alt="" style={{width:"300px" }}/>        
<h6 >{prd.title}</h6>
<p >{prd.release_date}</p>
<button onClick={
    () => {
        addfav(prd)
    }
}>fav</button>

</div>

</>   
)


}
)
}
</>
    )}
 export default Movies