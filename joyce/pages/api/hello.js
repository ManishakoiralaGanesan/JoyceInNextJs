// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
export default function handler(req, res) {
  if (req.method === "POST") {
    const code = req.body;

    res.status(200).json({ name: code });
  }
}
