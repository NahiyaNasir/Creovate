import SearchFrom from "./Components/SearchFrom";
import StartUpCard from "./Components/StartUpCard";
 import {getStartUp} from  "../lib/getStartUp"
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  //  const posts=[{
  //   _createdAt:'yesterday',
  //     author:{_id:1,name:"ami",image:"https://i.ibb.co/JRz6j2CL/dima-solomin-j-Sneq7u-P1-BI-unsplash.jpg"},
  //     _id:2,
  //     description:"This is",
  //     image:"https://i.ibb.co/JRz6j2CL/dima-solomin-j-Sneq7u-P1-BI-unsplash.jpg",
  //     category:"robot",
  //     title:  "we are robots",
  //         views:66
      
  //  }]
   const posts=  await  getStartUp()
          // console.log(posts);
  return (
    <>
      <section className="pink_container ">
        <h1 className="heading">
          {" "}
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchFrom query={query}></SearchFrom>
        <section className="section_container">
        <ul className="mt-7 card_grid">
  {posts?.length > 0 ? (
    posts.map((post:StartUpCardType, ) => (
      <StartUpCard key={post?._id} post={post} />
    ))
  ) : (
    <p>  All Start Up </p>
  )}
</ul>

        </section>
      </section>
    </>
  );
}
