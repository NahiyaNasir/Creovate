import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb"



export const GET=async(request,{params})=>{
    const db=  await connectDB()
     const collection= await  db.collection('startup')
     try {
     
       const startup= await collection.findOne({ _id: new ObjectId(params.id) })
       return Response.json(startup)
     } catch (error) {
            console.log(error);
     }
}