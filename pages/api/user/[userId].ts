import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = await clientPromise;
  const db = client.db("chofolio");
  const { userId } = req.query;
  const singleUser = await db
    .collection("chofolio")
    .findOne({ unique_id: userId });

  res.status(200);
  res.json(singleUser);
};

export default handler;
