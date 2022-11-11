import { from } from "undici/types/readable"
import React ,{useState,useEffect} from 'react'
import axios from "axios"
function Datafetch(){
    const[post,setPosts] = useState([])
    useEffect(() => {
        axios.get()
        .then( res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    })
    return(
        <div>
<ul>
    {
        post.map(post => <li key={post.id}>{post.title}</li>
        )
    }
</ul>
        </div>
    )
}
export default Datafetch 