import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`*[_type == 'category']{
  _id,
  ...
}`;

type Data = {
  categories: Category[];
};

export default async function getCategories(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const categories: Category[] = await sanityClient.fetch(query);
  res.status(200).json({ categories });
}
