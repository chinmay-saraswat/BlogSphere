'use client'

import axios from 'axios'

import React, { useState } from 'react'


function page() {
  {/*  const[image,setImage]=useState(false)*/}
    const[data,setData]=useState({
        title:"",
        description:"",
        category:"Lifestyle",
        author:"Devooo",
        authorImg:"/author_img.png"
    })

    const onChangeHandler = async (e)=>{
        const name = e.target.name;
        const value=e.target.value;
        setData(data=>({...data,[name]:value}));
        console.log(data);
    }

    const onSubmitHandler= async (e)=>{
        try{
        e.preventDefault();
        const formData=new FormData()
        formData.append('title',data.title);
        formData.append('description',data.description);
        formData.append('category',data.category);
        formData.append('author',data.author);
        formData.append('authorImg',data.authorImg);
        // formData.append('image',image);
        const response = await axios.post('/api/blog',formData)
        if(!response.success){
            alert("Blog added successfully")
        }
        else{
            alert("Error")
        }
    }catch(e){
        console.log(e)
    }
    }

  return (
    <>
        <form onSubmit={onSubmitHandler} className=' pt-5 px-5 sm:pt-12 sm:pl-16'> 
        
            {/* <p className='text-xl'>Add Thumbnail</p>
             <label htmlFor='image'>
                 <Image className='mt-4' src={!image?assets.upload_area:URL.createObjectURL(image)} width={140} height={70} alt=''/>
            // </label> 
            <input onChange={(e)=>{setImage(e.target.files[0])}} hidden required type='file' id='image'/>*/}
            <p className='text-xl mt-4'>Blog title </p>
            <input onChange={onChangeHandler} name='title' value={data.title} className='w-full sm:w-[500px] mt-4 px-3 py-3 border ' type='text' placeholder='Type here' required/>

            <p className='text-xl mt-4'>Blog Description </p>
            <textarea name='description' value={data.description} onChange={onChangeHandler} className='w-full sm:w-[500px] mt-4 px-3 py-3 border ' type='text' placeholder=' Write content here' required/>

            <p >Blog Category</p>
            <select name='category' onChange={onChangeHandler} value={data.category} className='w-40 mt-4 px-4 py-3 border text-gray-500'>
                <option value={"Startup"}>Startup</option>
                <option value={"Technology"}>Technology</option>
                <option value={"Lifestyle"}>Lifestyle</option>
            </select><br/>

            <button type='submit' className='mt-8 w-40 h-12 bg-black text-white hover:bg-slate-900 active:bg-white active:text-black'>Add</button>
        </form>
    </>
  )
}

export default page