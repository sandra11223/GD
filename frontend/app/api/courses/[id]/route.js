import { NextResponse } from 'next/server';
import dbConnect from '@/lib/config/db';
import Course from '@/lib/models/Course';

export async function GET(request, { params }) {
  try {
    await dbConnect();
    const course = await Course.findById(params.id).populate('university');
    if (!course) {
      return NextResponse.json(
        { message: 'Course not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(course);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    await dbConnect();
    const data = await request.json();
    const course = await Course.findByIdAndUpdate(params.id, data, { new: true });
    if (!course) {
      return NextResponse.json(
        { message: 'Course not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(course);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    const course = await Course.findByIdAndDelete(params.id);
    if (!course) {
      return NextResponse.json(
        { message: 'Course not found' },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: 'Course deleted' });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}
