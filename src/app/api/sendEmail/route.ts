import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, phone, topic, message } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !topic || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 }
      );
    }

    // Validate phone number format
    if (!/^\+[1-9]\d{1,14}$/.test(phone)) {
      return NextResponse.json(
        { message: "Invalid phone number" },
        { status: 400 }
      );
    }

    // Simulate sending an email (replace this with your actual email-sending logic)
    console.log("Sending email with the following data:");
    console.log({ name, email, phone, topic, message });

    // Simulate a delay for email sending
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Return a success response
    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in sendEmail API route:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}