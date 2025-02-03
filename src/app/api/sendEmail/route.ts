import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

    // Log environment variables for debugging
    console.log("Email Host:", process.env.EMAIL_HOST);
    console.log("Email Port:", process.env.EMAIL_PORT);
    console.log("Email User:", process.env.EMAIL_USER);
    console.log("Email From:", process.env.EMAIL_FROM);

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify Nodemailer connection
    await new Promise((resolve, reject) => {
      transporter.verify((error) => {
        if (error) {
          console.error("Nodemailer verification failed:", error);
          reject(error);
        } else {
          console.log("Nodemailer is ready to send emails");
          resolve(null);
        }
      });
    });

    // Email to the admin (your email)
    const adminMailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_USER, // Your email address
      subject: `New Contact Form Submission: ${topic}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Topic: ${topic}
        Message: ${message}
      `,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Topic:</strong> ${topic}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Email to the user (automated response)
    const userMailOptions = {
      from: process.env.EMAIL_FROM,
      to: email, // User's email address
      subject: `Thank you for contacting us!`,
      text: `
        Dear ${name},

        Thank you for reaching out to us! We have received your message and will get back to you as soon as possible.

        Here are the details you submitted:
        - Name: ${name}
        - Email: ${email}
        - Phone: ${phone}
        - Topic: ${topic}
        - Message: ${message}

        If you have any further questions, feel free to reply to this email.

        Best regards,
        Ngaatec Private Limited
      `,
      html: `
        <h1>Thank you for contacting us!</h1>
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to us! We have received your message and will get back to you as soon as possible.</p>
        <p>Here are the details you submitted:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Topic:</strong> ${topic}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>
        <p>If you have any further questions, feel free to reply to this email.</p>
        <p>Best regards,<br>Ngaatec Private Limited</p>
      `,
    };

    // Send email to the admin
    await transporter.sendMail(adminMailOptions);

    // Send automated response to the user
    await transporter.sendMail(userMailOptions);

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