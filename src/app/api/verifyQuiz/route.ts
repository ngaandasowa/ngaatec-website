// src/app/api/verifyQuiz/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { userAnswer, correctAnswer } = await request.json();

    // Validate the user's answer
    if (parseInt(userAnswer) === correctAnswer) {
      return NextResponse.json({ verified: true }, { status: 200 });
    } else {
      return NextResponse.json({ verified: false }, { status: 400 });
    }
  } catch (error) {
    console.error('Error verifying quiz:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}