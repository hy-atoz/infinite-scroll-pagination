import { baseUrl, categoryEndpoint } from "../../../lib/toto";

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const response = await fetch(`${baseUrl}${categoryEndpoint}/${id}`);
    const data = await response.json();
    res.status(200).json({
      results: data,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
