import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = await clientPromise;
  const db = client.db("chofolio");

  if (req.method == "GET") {
    // const allPortfolios = await db.collection("chofolio").find({}).toArray();
    // res.json(allPortfolios);
    res.json({ message: "Hello, World!" });
  }
  if (req.method == "POST") {
    const newPortfolio = req.body.newPortfolio;
    let portfolio = await db.collection("chofolio").insertOne(newPortfolio);
    res.json(portfolio);
  }
};

export default handler;
