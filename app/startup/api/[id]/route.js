import { connectDB } from "@/lib/connectDB"



export const GET=async(request,{params})=>{
    const db=  await connectDB()
     const collection= await  db.collection('startup')
     try {
     
       const service= await collection.findOne({_id:params.id})
       return Response.json(service)
     } catch (error) {
            console.log(error);
     }
}