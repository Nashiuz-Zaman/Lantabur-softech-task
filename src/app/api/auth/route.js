import { extractToken } from '@/lib/jwt/jwt';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const GET = async () => {
   try {
      const session = cookies().get('session')?.value;

      if (!session) return NextResponse.json({ user: null });

      const user = extractToken(session);
      if (!user) return NextResponse.json({ user: null });

      return NextResponse.json({ ...user });
   } catch (error) {
      throw new Error(error);
   }
};
