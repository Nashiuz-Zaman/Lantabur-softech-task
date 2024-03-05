// imports
import connectDb from '@/lib/mongoose/connectDb';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const GET = async () => {
   try {
      await connectDb();

      cookies().set('session', '', { expires: new Date(0) });

      return NextResponse.json({ status: 'success' });
   } catch (error) {
      throw new Error(error.message);
   }
};
