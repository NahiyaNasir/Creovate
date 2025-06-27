import { getStartUp } from "@/lib/getStartUp";
import StartUpCard, { StartUpCardType } from "./StartUpCard";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const UserStartups = async ({ id }: { id: string }) => {
    const startups =   await getStartUp()
    // console.log(startups);
  
    return (
      <>
        {startups.length > 0 ? (
          startups.map((startup: StartUpCardType) => (
            <StartUpCard
             key={startup._id} post={startup} />
          ))
        ) : (
          <p className="no-result">No posts yet</p>
        )}
      </>
    );
  };
  export default UserStartups;