import { jsonResponse, sessionsStore } from "./mos-shared.mjs";

export default async function handler(request) {
  if (request.method !== "POST" && request.method !== "DELETE") {
    return new Response("Method Not Allowed", {
      status: 405,
      headers: { Allow: "POST, DELETE" },
    });
  }

  const expectedKey = process.env.MOS_ADMIN_KEY;
  if (!expectedKey) {
    return jsonResponse({ detail: "MOS_ADMIN_KEY is not configured" }, { status: 500 });
  }

  const providedKey =
    request.headers.get("x-mos-admin-key") ||
    new URL(request.url).searchParams.get("key");

  if (providedKey !== expectedKey) {
    return jsonResponse({ detail: "forbidden" }, { status: 403 });
  }

  const result = await sessionsStore().deleteAll();
  return jsonResponse({
    status: "ok",
    deleted_sessions: result.deletedBlobs,
  });
}
