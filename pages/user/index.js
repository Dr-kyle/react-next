import { useSession, signIn, signOut } from "next-auth/react"

export default function Index() {
  const {data: session, status} = useSession()
  return (
    <div  className='container'>
      <h1>Signed in as {JSON.stringify(session)}</h1>
      {status}
      </div>
  )
}