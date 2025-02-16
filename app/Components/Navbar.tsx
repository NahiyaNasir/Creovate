import { auth,signIn,signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";


const Navbar = async() => {
     const session=await auth()
  return (
    <header className=" px-5 py-3  bg-white shadow-sm font-sans text-neutral-900">
      <nav className=" flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={80} height={30}></Image>
        </Link>
        <div className=" flex  items-center gap-5">
    { session && session?.user?(
        <>
     <Link href="/ startup/signup">
        <span>  Create</span>
        </Link>
        <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <button type="submit"><span>Log Out</span></button>
      </form>
        <Link href={`/user/${session?.id}`}>
        <span>  {session?.user?.name}</span>
      
        </Link>
        </>
    ):(

        <form
        action={async () => {
          "use server"
          await signIn()
        }}
      >
        <button type="submit"><span>Login</span></button>
      </form>
        
    )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
