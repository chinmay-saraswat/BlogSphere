import { blog_data } from '@/Assets/assets'
import React, { useState ,useEffect} from 'react'
import BlogItem from './BlogItem'
import axios from 'axios'


function BlogList() {
    const[menu,setMenu]=useState("All")
    const[blogs,setBlogs]=useState([]);

    const fetchBlogs=async ()=>{
       try{ 
        const response =await axios.get('/api/blog')
        setBlogs(response.data.blogs);
        console.log(response.data.blogs);
       }catch(e){
        console.log(e);
       }
    }
    useEffect(()=>{
        fetchBlogs();
    },[])
  return (
    <div>
        <div className='flex justify-center gap-6 my-10'>
            <button onClick={()=>{setMenu("All")}} className={menu==="All"?'px-3 py-1 rounded-sm bg-black text-white scale-105':""}>All</button>
            <button onClick={()=>{setMenu("Technology")}} className={menu==="Technology"?'px-3 py-1 rounded-sm bg-black text-white scale-105':""}>Technology</button>
            <button onClick={()=>{setMenu("Startup")}} className={menu==="Startup"?'px-3 py-1 rounded-sm bg-black text-white scale-105':""}>Startup</button>
            <button onClick={()=>{setMenu("Lifestyle")}} className={menu==="Lifestyle"?'px-3 py-1 rounded-sm bg-black text-white scale-105':""}>Lifestyle</button>
        </div>
        <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
            {blogs.filter((item)=>menu==="All"?true:item.category===menu).map((item,index)=>{
                return <BlogItem key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category}/>
            })}
        </div>
    </div>
  )
}

export default BlogList