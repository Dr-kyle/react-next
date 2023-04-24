import { useSession, signIn, signOut, getCsrfToken } from "next-auth/react"

export default function Index() {
  const {data: session, status} = useSession()
  return (
    <div  className='container'>
      <h1>Signed in as {JSON.stringify(session)}</h1>
      status: {status}
      <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white" onClick={() => signIn("reactNext")
    }>
        signIn
      </button>
      <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white" onClick={signOut}>
        signOut
      </button>
      </div>
  )
}