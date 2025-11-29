import app from "./app.js";
import cloudinary from "cloudinary";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

// Cloudinary Config
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Default Root Route (Fix for Cannot GET /)
app.get("/", (req, res) => {
  res.send("Hospital Management Backend API is Running...");
});

// Error Middleware
app.use(errorMiddleware);

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
