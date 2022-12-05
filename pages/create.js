import React from "react";
import { fireBaseService } from "../services/FireBaseService.js";


import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { auth, firestore, serverTimestamp } from "../lib/firebase.js";

export default function Page({ }) {
  return (
    <main>
      <form onSubmit={createPost}>
        <input
       
          
          placeholder="My Awesome Article!"
       
        />
        <p>
          <strong>Slug:</strong> 
        </p>
        <button type="submit"  className="btn-green">
          Create New Post
        </button>
      </form>
    </main>
  );
}

async function createPost(){





  const uid = auth.currentUser?.uid;
  const ref = firestore.collection('users').doc(uid).collection('posts').doc()

   
}