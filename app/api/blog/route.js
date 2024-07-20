const { ConnectDB } = require("@/lib/config/db");

import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import BlogModel from '@/lib/model/BlogModel';

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

//api endpoint to get all blogs
export async function GET(request){
  const blogs=await BlogModel.find({});
  return NextResponse.json({blogs})
}



export async function POST(request) {
  try {
    const formData = await request.formData();
    
    const blogData = {
      title: `${formData.get('title')}`,
      description: `${formData.get('description')}`,
      category: `${formData.get('category')}`,
      author: `${formData.get('author')}`,
      authorImg: `${formData.get('authorImg')}`,
      date: new Date() // Adding the current date
    };

    await BlogModel.create(blogData);
    
    return NextResponse.json({
      success: true,
      msg: "Blog added successfully",

    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({
      success: false,
      msg: "Failed to add blog",
      error: e.message,
      
    });
  }
}
