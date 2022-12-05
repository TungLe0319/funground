import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  // @ts-ignore
  const { user, username } = {};

  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link href='/'>
            <button className="btn-logo">feed</button>
          </Link>
        </li>
        <li>
          <Link href='/create'>
            <button className="btn-logo bg-red-500">Create</button>
          </Link>
        </li>
          <li>
             <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal">
                 Vertically centered scrollable modal
              </button>
          </li>
        {username && (
          <>
            <li className="push-left">
              <Link href='/admin'>
                <button className="btn-blue">write posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <Image src={user?.photoUrl} alt='' />
              </Link>
            </li>
          </>
        )}
        {!username && (
          <li>
            <Link href='/enter'>
              <button className="btn-blue">login</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}