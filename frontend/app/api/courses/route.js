import { NextResponse } from 'next/server';
import dbConnect from '@/lib/config/db';
import Course from '@/lib/models/Course';

export async function GET(request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const university = searchParams.get('university');

    let query = {};
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }
    if (university) {
      query.university = university;
    }

    const courses = await Course.find(query).populate('university');
    return NextResponse.json(courses);
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
    const course = await Course.create(data);
    return NextResponse.json(course, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}
