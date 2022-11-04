import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db("chofolio");

  if (req.method == "GET") {
    const allPortfolios = await db.collection("chofolio").find({}).toArray();
    res.json({ status: 200, data: allPortfolios });
  }
  if (req.method == "POST") {
    let bodyObject = req.body.newPortfolio;
    let portfolio = await db.collection("chofolio").insertOne(bodyObject);
    res.json(portfolio);
  }
}
