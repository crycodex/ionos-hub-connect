import type { VercelRequest, VercelResponse } from "@vercel/node";

const WEBHOOK_URL = "https://n8n.ionoshub.net/webhook/correos-ionos";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    if (!body?.nombre_negocio_o_persona || !body?.correo || !body?.telefono || !body?.servicio_interes) {
      return res.status(400).json({ error: "Campos obligatorios faltantes" });
    }

    // Reject honeypot if somehow forwarded
    if (body.website) {
      return res.status(200).json({ ok: true });
    }

    const payload = {
      nombre_negocio_o_persona: String(body.nombre_negocio_o_persona),
      servicio_interes: String(body.servicio_interes),
      telefono: String(body.telefono),
      correo: String(body.correo),
      nota_detalle: body.nota_detalle ?? null,
      pagina_origen: body.pagina_origen ?? "",
      fecha_envio: body.fecha_envio ?? new Date().toISOString(),
    };

    const upstream = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!upstream.ok) {
      const text = await upstream.text().catch(() => "");
      console.error("n8n webhook error:", upstream.status, text);
      return res.status(502).json({ error: "Webhook upstream failed" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Lead API error:", err);
    return res.status(500).json({ error: "Internal error" });
  }
}
