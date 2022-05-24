import { baseUrl, contentEndpoint } from "../../../lib/toto";

export default async function handler(req, res) {
  const { params } = req.query;
  const category = params[0];
  const language = params[1];
  const index = params[2];

  try {
    const response = await fetch(
      `${baseUrl}${contentEndpoint}/${category}/${language}/${index}`
    );
    const data = await response.json();
    res.status(200).json({
      results: data,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
