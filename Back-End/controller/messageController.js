import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { Message } from "../models/messageSchema.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";

export const sendMessage = catchAsyncError(async (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !phone || !message) {
    return next(new ErrorHandler("Please fill all the fields", 400));
  }
  await Message.create({
    firstName,
    lastName,
    email,
    phone,
    message,
  });
  res
    .status(200)
    .json({ success: true, message: "Message sent successfully." });
});

export const getAllMessage = catchAsyncError(async (req, res, next) => {
  const messages = await Message.find();
  res.status(200).json({
    success: true,
    messages,
  });
});
