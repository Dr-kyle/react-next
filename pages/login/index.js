import { useState, useEffect } from "react";
import { useSession, signIn, signOut, getCsrfToken } from "next-auth/react"
import { useRouter } from "next/router";

export default function SignIn() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  useEffect(() => {
    console.log('err', router.query.error)
    if (router.query.error) {
      alert(router.query.error)
    }
  }, [router])
  

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log('handleLogin', username, password)
    signIn('credentials', {username, password, callbackUrl: router.query.callbackUrl || '/'})
    // const res = await signIn('credentials', {username, password})
  }

  return (
    <>
      <div>
      {/* <input name="csrfToken" type="hidden" defaultValue={csrfToken} /> */}
      <label>
        Username
        <input name="username" type="text" onChange={(e) => { setUsername(e.target.value)}}/>
      </label>
      <label>
        Password
        <input name="password" type="password" onChange={(e) => {setPassword(e.target.value)}}/>
      </label>

      <button onClick={(e) => handleLogin(e)}>sign</button>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}