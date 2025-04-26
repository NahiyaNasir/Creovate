import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { connectToDB } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response('Unauthorized', { status: 401 });
  }

  const { db } = await connectToDB();

  const user = await db.collection('users').findOne({ _id: new ObjectId(session.user.id) });

  if (!user) {
    return new Response('User not found', { status: 404 });
  }

  return Response.json(user);
}
