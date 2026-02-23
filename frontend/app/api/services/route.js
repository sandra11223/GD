import { NextResponse } from 'next/server';
import dbConnect from '@/lib/config/db';
import Service from '@/lib/models/Service';

export async function GET() {
  try {
    await dbConnect();
    const services = await Service.find({});
    return NextResponse.json(services);
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
    const service = await Service.create(data);
    return NextResponse.json(service, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}
