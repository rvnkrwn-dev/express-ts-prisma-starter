import express from "express";
import cookieParser from 'cookie-parser';
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";

// import middleware
import { jsonOnlyMiddleware } from "./middleware/jsonOnlyMiddleware";

// Import routes
import welcomeRoutes from "./routes/welcomeRoutes";
import userRoutes from "./routes/userRoutes";

// Initialize dotenv
dotenv.config();

const app = express();

// Middleware
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/", welcomeRoutes);

app.use(jsonOnlyMiddleware);
app.use("/api/users", userRoutes);

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
