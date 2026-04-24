import jwt from "jsonwebtoken";

export async function POST(req) {
  const { username, password } = await req.json();

  if (username === "admin" && password === "1234") {
    const token = jwt.sign(
      { user: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return Response.json({ success: true, token });
  }

  return Response.json({ success: false, message: "Invalid credentials" });
}