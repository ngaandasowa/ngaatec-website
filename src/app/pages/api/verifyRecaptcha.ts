import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY; // Ensure this is in your .env file
  const { token } = req.body; // Extract token from request body

  if (!token) {
    return res.status(400).json({ error: "reCAPTCHA token is missing." });
  }

  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify`;
  
  try {
    const captchaResponse = await fetch(verifyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: secretKey!,
        response: token,
      }).toString(),
    });

    const data = await captchaResponse.json();
    
    if (!data.success) {
      return res.status(400).json({ error: "reCAPTCHA verification failed.", details: data });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
}
