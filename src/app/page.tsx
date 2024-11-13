
import { auth, signIn, signOut } from "@/auth"
export default async function Home() {
  const session = await auth();
  return (
    <div className="">
      {/* {JSON.stringify(session)} */}
      <h1>Login Here</h1>
      {session &&(
          <form
            action={async () => {
              "use server"
              await signOut()
            }}
          >
            <button className="border px-4 py-2 bg-red-500 text-white" type="submit">Logout</button>
          </form>
      )}
      {!session && (
        <form
          action={async () => {
            "use server"
            await signIn("google")
          }}
        >
          <button className="border px-4 py-2 bg-blue-500 text-white" type="submit">Signin with Google</button>
        </form>
      )}
    </div>
  );
}
