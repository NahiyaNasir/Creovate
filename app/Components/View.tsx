import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb"
import { after } from "next/server"

const View=async({id}:ObjectId)=>{
         const db= await  connectDB()
             const startupCollection= db.collection('startup')
          
  const objectId = new ObjectId(id);
              const startup= await startupCollection.findOne({_id: objectId})
              const totalViews =Number (startup?.views||0);
              // console.log(totalViews);
            after(async()=>{
              await startupCollection.updateOne(
                { _id: objectId },
                { $set: { views: totalViews + 1 } }
              );
            })
     return(
        <div className="view-container">
        <div className="absolute -top-2 -right-2">
          {/* Ping  */}
          <div className="relative">
      <div className="absolute -left-4 top-1">
        <span className="flex size-[11px]">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex size-[11px] rounded-full bg-primary"></span>
        </span>
      </div>
    </div>
        </div>
  
        <p className="view-text">
          <span className="font-black">Views: {totalViews}</span>
        </p>
      </div>
     )
}
export default View