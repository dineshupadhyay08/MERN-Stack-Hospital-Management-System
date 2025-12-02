export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();

  const cookieName = user.role === "Admin" ? "adminToken" : "patientToken";

  res
    .status(statusCode)
    .cookie(cookieName, token, {
      httpOnly: true, // Prevent JS access
      secure: true, // Required for HTTPS (Render + Vercel)
      sameSite: "none", // Required for cross-site cookies
      maxAge: process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
    })
    .json({
      success: true,
      message,
      token,
    });
};
