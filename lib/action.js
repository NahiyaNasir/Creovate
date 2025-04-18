

// export const  createPitch=async(request, formData, pitch)=>{

//     const startUp= await request.json()
//     const db= await connectDB()
//     const startUpCollection= db.collection('startup')
//     try {
//         const newStartUp= await startUpCollection.insertOne(startUp)
//         return Response.json({message:' startup....'})
//     } catch (error) {
//         console.log(error);
//         return Response.json(error)
//     }
// }



"use server";
import { connectDB } from "@/lib/connectDB"
import slugify from "slugify";
import { auth } from "@/auth"; 
// import { ObjectId } from "mongodb";

export const createPitch = async (
  state,
  form,
  pitch
) => {
  const session = await auth();
  if (!session?.user?.id) {
    return {
      status: "ERROR",
      error: "Not authenticated",
    };
  }

  const { title, description, category, link } = Object.fromEntries(
    Array.from(form)
  );

  const slug = slugify(title, { lower: true, strict: true });

  try {
    const db = await connectDB();
    const startupCollection = db.collection("startup");

    const result = await startupCollection.insertOne({
      title,
      description,
      category,
      image: link,
      slug,
      author:{
       id:session?.user?.id,
       name:session?.user?.name,
       image:session?.user?.image
      },
      pitch,
    
      createdAt: new Date()
    });

    return {
      status: "SUCCESS",
      _id: result.insertedId.toString(),
    };
  } catch (error) {
    console.error(error);
    return {
      status: "ERROR",
      error: "Something went wrong",
    };
  }
};












