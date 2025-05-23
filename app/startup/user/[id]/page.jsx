import { auth } from "@/auth";
import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import page from "../../[id]/page";

  const Page = async ({ params })=>{
const id =  params.id;
    const session = await auth();
    const db= connectDB()
   const user=  db.collection('user').findOne({_id: new ObjectId( id)})
  console.log(user);
    return (
      <>
        <section className="profile_container">
          <div className="profile_card">
            <div className="profile_title">
              <h3 className="text-24-black uppercase text-center line-clamp-1">
                {user.name}
              </h3>
            </div>
  
            <Image
              src={user.image}
              alt={user.name}
              width={220}
              height={220}
              className="profile_image"
            />
  
            <p className="text-30-extrabold mt-7 text-center">
              @{user?.username}
            </p>
            <p className="mt-1 text-center text-14-normal">{user?.bio}</p>
          </div>
  
          <div className="flex-1 flex flex-col gap-5 lg:-mt-5">
            <p className="text-30-bold">
              {session?.id === id ? "Your" : "All"} Startups
            </p>
            <ul className="card_grid-sm">
              <Suspense fallback={<StartupCardSkeleton />}>
             
              </Suspense>
            </ul>
          </div>
        </section>
      </>
    );
  }
   export default Page