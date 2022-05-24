import { baseUrl, contentEndpoint } from "../../../lib/toto";

export default async function handler(req, res) {
  const { id } = req.query;
  // const category = params[0];
  // const language = params[1];
  // const index = params[2];
  const url = `${baseUrl}${contentEndpoint}/gzt/en/${id}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json({
      results: data,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
