import jwt from "jsonwebtoken";

export function verifyToken(req, res, next) {

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "No token" });
  }

  const token = authHeader.split(" ")[1];

  try {

    const decoded = jwt.decode(token);
    req.user = decoded;

    next();

  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }

}