import { NextResponse } from 'next/server';
import dbConnect from '@/lib/config/db';
import Newsletter from '@/lib/models/Newsletter';

export async function GET() {
  try {
    await dbConnect();
    const subscribers = await Newsletter.find({}).sort({ createdAt: -1 });
    return NextResponse.json(subscribers);
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
    const { email } = await request.json();
    
    const exists = await Newsletter.findOne({ email });
    if (exists) {
      return NextResponse.json(
        { message: 'Email already subscribed' },
        { status: 400 }
      );
    }

    const subscriber = await Newsletter.create({ email });
    return NextResponse.json(subscriber, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}
