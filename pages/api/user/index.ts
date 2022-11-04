import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../mongodb";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const client = await clientPromise;
  const db = client.db("chofolio");

  const allPortfolios = await db.collection("chofolio").find({}).toArray();
  res.status(200).json(allPortfolios);
  // res.status(200).json({ name: "API RUNNING" });
}
