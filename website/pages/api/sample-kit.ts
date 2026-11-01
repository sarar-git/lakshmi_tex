import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = req.body;

  // Minimal validation
  if (!body.schoolName || !body.email) {
    return res.status(400).json({ error: "Missing required fields (schoolName, email)" });
  }

  // Forward the lead data to Payload's auto‑generated /api/leads endpoint
  try {
    const payloadResp = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await payloadResp.json();

    if (!payloadResp.ok) {
      return res.status(payloadResp.status).json({ error: data.error || "Payload error" });
    }

    // Respond with the newly created lead id and a thank‑you URL
    res.status(201).json({
      id: data.id,
      thankYouUrl: `/sample-kit-thank-you?lead=${data.id}`,
    });
  } catch (error: any) {
    console.error("Error forwarding lead:", error);
    res.status(500).json({ error: "Failed to create lead" });
  }
}