import { NextResponse } from 'next/server';
import dbConnect from '@/lib/config/db';
import Partnership from '@/lib/models/Partnership';

export async function GET() {
  try {
    await dbConnect();
    const partnerships = await Partnership.find({}).sort({ createdAt: -1 });
    return NextResponse.json(partnerships);
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
    const partnership = await Partnership.create(data);
    return NextResponse.json(partnership, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}
