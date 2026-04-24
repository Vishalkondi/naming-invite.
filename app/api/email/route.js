import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // you can change to guest email later
      subject: "RSVP Confirmation",
      text: `Thank you ${name} for your RSVP 🙏`,
    });

    return Response.json({ success: true });

  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}