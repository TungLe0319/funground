import React from "react";
import { useState } from "react";
import Image from "next/image.js";

 export default function PostCard(props){
  // const [blogs, setBlogs] = useState()
  return (
    <div className=" shadow-2xl   ">
    
        <img
          src="https://plus.unsplash.com/premium_photo-1663054834323-7badd31755f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
          alt=""
          className="rounded "
       
        />
   
     
    </div>
  );
 }