'use client'
import { assets, blog_data } from '@/Assets/assets'
import Footer from '@/components/Footer'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function page({params}) {
    try{
    const[data,setData]=useState(null)
    const fetchData=async ()=>{
        const response= await axios.get('/api/blog',{
            params:{
                id:params.id
            }
        })
             setData(response.data);    
    }
    }    
    catch(e){
        console.log(e);
    }
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (data?<>
    <div className='bg-gray-200 px-5 py-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Link href={`/`}>
            <Image src={assets.logo} alt='' className='w-[130px] sm:w-auto'></Image>
            </Link>
            <button className='flex intem-center gap-2 font-medium py-1 px-2 sm:py-3 sm:px-8 border border-solid border-black shadow-[-7px_7px_0px_#000000] hover:shadow-[-8px_8px_2px_#000050] hover:rounded-md'>Get Started <Image src={assets.arrow}></Image></button>
        </div>  
        <div className='text-center my-24'>
            <h1 className='text-2xl sm:text-4xl mx-w-[700px] mx-auto font-semibold '>{data.title}</h1>
            <Image className='mx-auto mt-6 border border-white rounded-full' src={data.authorImg} alt='' width={60} height={60}></Image>
            <p>{data.author}</p>
        </div>      
    </div>
    <div className='mx-5 max-w-[800px] mb-10 mt-[30px] md:mx-auto'>
        {/*<Image src={data.image} alt='' width={1280} height={720} className='border-4 border-white'></Image>*/}
        <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
        <p className='my-3'>{data.description}</p>
        <h3 className='my-8 font-[28px] font-semibold'>What is Kubernetes</h3>
        <p className='my-3'>Kubernetes is an open-source platform designed to automate deploying, scaling, and operating containerized applications. It helps manage clusters of containerized applications, ensuring efficient resource utilization, high availability, and simplified operations. Here’s an overview of Kubernetes and its key components:</p>
        <h3 className='my-8 font-[28px] font-semibold'>Key Features of Kubernetes</h3>
        <p className='my-3'>Automated Container Deployment and Management: Kubernetes automates the deployment and management of containerized applications, ensuring that applications run consistently in different environments.</p>
        <p className='my-3'>Scalability: Automatically scales applications up or down based on demand, ensuring optimal resource usage.</p>
        <p className='my-3'>Load Balancing and Service Discovery: Provides built-in service discovery and load balancing, ensuring that network traffic is efficiently distributed across all available instances.
        Self-healing: Automatically restarts failed containers, replaces containers, kills containers that don’t respond to user-defined health checks, and manages application state to ensure high availability.</p>
        <h3 className='my-8 font-[28px] font-semibold'>How Kubernetes Works</h3>
        <p className='my-3'>User Interaction: Users interact with the Kubernetes API to define the desired state of their applications (e.g., number of replicas, resource limits, etc.).
        <p className='my-3'>Scheduler: The Kubernetes scheduler assigns work to nodes based on resource availability and requirements.</p>
        <p className='my-3'>Controllers: Kubernetes controllers continuously monitor the state of the cluster and make necessary adjustments to ensure the desired state is maintained.</p>
        <p>Kubelet: An agent running on each node that ensures containers are running in a pod, as specified by the Kubernetes API.</p>
        Container Runtime: The software that runs the containers (e.g., Docker, containerd).</p>
        <h3 className='my-8 font-[28px] font-semibold'>Conclusion :</h3>
        <p className='my-3 '>Kubernetes is a powerful and versatile tool for managing containerized applications at scale. It simplifies the deployment, management, and scaling of applications, providing a robust framework for building and operating modern, cloud-native applications.</p>
    </div>
    <Footer></Footer>
    </>:<></>
  )


export default page