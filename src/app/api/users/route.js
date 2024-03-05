// imports
import { NextResponse } from 'next/server';
import connectDb from '@/lib/mongoose/connectDb';
import { UserModel } from '@/lib/mongoose/Models/User';
import { generateToken } from '@/lib/jwt/jwt';
import { cookies } from 'next/headers';

export const POST = async req => {
   try {
      await connectDb();

      const body = await req.json();
      const user = body.user;

      const newUser = await UserModel.create(user);

      if (newUser._id) {
         const session = { user: newUser };
         const token = generateToken(session);

         cookies().set('session', token, { httpOnly: true, sameSite: true,expires: new Date(Date.now() + 1000 * 60 * 10) });
         return NextResponse.json({ status: 'success', user: newUser });
      }
   } catch (err) {
      throw new Error('Something went wrong, please try again');
   }
};
