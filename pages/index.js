import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut, getCsrfToken } from "next-auth/react"

function TypingAnimation() {

  return (
    <div  className='container mx-auto px-4'>
      <Link href='/api/auth/signin'><span className='break-all'>hahahafdafdadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span></Link>
      <hr></hr>
      <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white" onClick={() => signIn("reactNext")
    }>
        signIn
      </button>
    </div>
  );
}

export default TypingAnimation;