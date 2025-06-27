import StartUpCard from "@/app/Components/StartUpCard";
import UserStartups from "@/app/Components/UserStratUp";
import { auth } from "@/auth";
import { getUserById } from "@/lib/user";
import Image from "next/image";
import { Suspense } from "react";

const Page = async ({ params }) => {
  const id = params.id;
  const session = await auth();
    // console.log(id);
    console.log(session);

  // const user = await getUserById(id);

  // console.log(user);
  return (
    <>
      <section className="profile_container">
        <div className="profile_card">
          <div className="profile_title">
            <h3 className="text-24-black uppercase text-center line-clamp-1">
              {session?.user.name}
            </h3>
          </div>

          <Image
            src={session?.user.image}
            alt={session?.user.name}
            width={220}
            height={220}
            className="profile_image"
          />

          <p className="text-30-extrabold mt-7 text-center">
            @{session?.user?.name}
          </p>
          <p className="mt-1 text-center text-14-normal">{session?.user?.bio}</p>
        </div>

        <div className="flex-1 flex flex-col gap-5 lg:-mt-5">
          <p className="text-30-bold">
            {session?.user?.id === id ? "Your" : "All"} Startups
          
          </p>
          <ul className="card_grid-sm">
           
              <UserStartups></UserStartups>
           
          </ul>
        </div>
      </section>
    </>
  );
};
export default Page;