// import { NextApiRequest, NextApiResponse } from "next";
// import clientPromise from "../../../mongodb";

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   const client = await clientPromise;
//   const db = client.db("chofolio");

//   if (req.method == "GET") {
//     // const allPortfolios = await db.collection("chofolio").find({}).toArray();
//     // res.json(allPortfolios);
//     res.json({ message: "Hello, World!" });
//   }
//   if (req.method == "POST") {
//     // const newPortfolio = req.body.newPortfolio;
//     // let portfolio = await db.collection("chofolio").insertOne(newPortfolio);
//     // res.json(portfolio);
//     res.json({ message: "Hello, World!" });
//   }
// };

// export default handler;

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "Ngene Samueel" });
}
