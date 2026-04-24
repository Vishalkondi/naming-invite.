import mongoose from "mongoose";

const VisitSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Visit || mongoose.model("Visit", VisitSchema);