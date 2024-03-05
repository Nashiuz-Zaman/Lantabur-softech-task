import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
  cookies().set('session', '', {expires: new Date(0)})

  return NextResponse.json({status: 'success'})
};
