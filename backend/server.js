import dotenv from "dotenv";
import express from "express";
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();
import authRoutes from "./routers/authRoutes.js";
import chatRoutes from "./routers/chatRoutes.js";
import aiRoutes from "./routers/aiRoutes.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;
app.use("/api/ai", aiRoutes);
app.use("/api", authRoutes);
app.use("/api", chatRoutes);

app.use(errorHandler);

console.log("SUPABASE_URL:", process.env.SUPABASE_URL);
console.log("SUPABASE_ANON_KEY:", process.env.SUPABASE_ANON_KEY?.slice(0, 15) + "...");
console.log("OPENROUTER_API_KEY:", process.env.OPENROUTER_API_KEY?.slice(0, 10) + "...");

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});
