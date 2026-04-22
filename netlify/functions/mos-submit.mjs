import { jsonResponse, readJson, sessionsStore, validateSessionPayload } from "./mos-shared.mjs";

export default async function handler(request) {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", {
      status: 405,
      headers: { Allow: "POST" },
    });
  }

  const payload = await readJson(request);
  const validationError = validateSessionPayload(payload);
  if (validationError) {
    return jsonResponse({ detail: validationError }, { status: 400 });
  }

  const result = await sessionsStore().setJSON(
    payload.session_id,
    {
      session_id: payload.session_id,
      submitted_at: Date.now(),
      user_agent: request.headers.get("user-agent") || "",
      items: payload.items,
    },
    { onlyIfNew: true },
  );

  if (!result.modified) {
    return jsonResponse({ detail: "session already submitted" }, { status: 409 });
  }

  return jsonResponse({
    status: "ok",
    session_id: payload.session_id,
    items_recorded: payload.items.length,
  });
}
