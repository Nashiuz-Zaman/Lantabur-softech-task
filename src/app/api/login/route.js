// imports
import { NextResponse } from 'next/server';
import { UserModel } from '@/lib/mongoose/Models/User';
import connectDb from '@/lib/mongoose/connectDb';
import { generateToken } from '@/lib/jwt/jwt';
import { cookies } from 'next/headers';

export const POST = async req => {
   try {
      await connectDb();
      const { loginData } = await req.json();
      const user = await UserModel.findOne({ email: loginData.email });

      if (!user) {
         return NextResponse.json({
            status: 'failed',
            message: 'Wrong email address',
         });
      }

      if (user.password !== loginData.password) {
         return NextResponse.json({
            status: 'failed',
            message: 'Wrong password',
         });
      }

      const session = { user };
      const token = generateToken(session);
      cookies().set('session', token, {
         httpOnly: true,
         sameSite: true,
         expires: new Date(Date.now() + 1000 * 60 * 60),
      });

      return NextResponse.json({
         status: 'success',
         user,
      });
   } catch (error) {
      throw new Error(error);
   }
};
