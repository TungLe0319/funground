import Head from "next/head";
import Image from "next/image";
import React from "react";
import CreatePost from "../components/CreatePost.js";
import Loader from "../components/Loader.js";
import PostCard from "../components/PostCard.js";
import styles from "../styles/Home.module.css";
// import 'tw-elements';

export default function Home() {
  const posts = [];
  for (let i = 0; i < 100; i++) {
    posts.push(i);
  }

  const postsItems = posts.map((post) => <PostCard props={post} />);
  return (
    <div className="container px-10">
      
      <CreatePost />

      <div className="mt-5">
        <div className="columns-2 md:columns-3 lg:columns-4">
          {posts.map((post) => (
            <img
              className="mb-4 rounded  hover:shadow-2xl 
              hover:transition-all
              cursor-pointer
              hover:brightness-50
              transition-all"
              src={`https://source.unsplash.com/random/` + post}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

 