import { NextResponse } from 'next/server';
import dbConnect from '@/lib/config/db';
import University from '@/lib/models/University';

export async function GET() {
  try {
    await dbConnect();
    const universities = await University.find({});
    return NextResponse.json(universities);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const data = await request.json();
    const university = await University.create(data);
    return NextResponse.json(university, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}
