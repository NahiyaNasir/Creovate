import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";





export async function getUserById(id) {
  const db = await connectDB();
  const user = await db.collection('user').findOne({ _id: new ObjectId(id) });
  return user;
}
