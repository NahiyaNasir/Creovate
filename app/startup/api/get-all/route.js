

import { connectDB } from "@/lib/connectDB"
export const GET=async()=>{
    const db=  await connectDB ()
     const collection= await  db.collection('startup')
     try {
     
       const resp= await collection.find().toArray()
       return Response.json(resp)
     } catch (error) {
         console.log(error );
     }
}

