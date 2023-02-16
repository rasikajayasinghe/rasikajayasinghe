import sanityClient from "@/lib/sanity-client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { _id, name, email, comment } = JSON.parse(req.body);
  try {
    await sanityClient.create({
      _type: "comment",
      blog: {
        _type: "reference",
        _ref: _id,
      },
      name,
      email,
      comment,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: `Could't submit comment`, err });
  }

  return res.status(200).json({ message: "Comment submitted" });
}
