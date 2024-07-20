'use client'
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-200">
      <Header></Header>
      <BlogList></BlogList>
      <Footer></Footer>
    </div>
  );
}
