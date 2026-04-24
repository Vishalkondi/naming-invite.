import { connectDB } from "@/lib/db";
import Visit from "@/models/Visit";

export async function POST() {
  try {
    await connectDB();

    // create new visit
    await Visit.create({});

    // count total visits
    const count = await Visit.countDocuments();

    return Response.json({ count });
  } catch (error) {
    return Response.json({ error: error.message });
  }
}