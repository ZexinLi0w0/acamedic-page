import { getStore } from "@netlify/blobs";

export const CLIPS = [
  { filename: "sample_clean_01.wav", group: "clean" },
  { filename: "sample_clean_02.wav", group: "clean" },
  { filename: "sample_clean_03.wav", group: "clean" },
  { filename: "sample_poisoned_01.wav", group: "poisoned" },
  { filename: "sample_poisoned_02.wav", group: "poisoned" },
  { filename: "sample_poisoned_03.wav", group: "poisoned" },
];

const CLIP_MAP = new Map(
  CLIPS.map((clip) => [`${clip.group}/${clip.filename}`, clip]),
);

export function sessionsStore() {
  return getStore({ name: "mos-sessions", consistency: "strong" });
}

export function sortSessionItems(items) {
  return items.slice().sort((a, b) => a.order - b.order);
}

export function jsonResponse(payload, init = {}) {
  const headers = new Headers(init.headers || {});
  headers.set("content-type", "application/json; charset=utf-8");
  headers.set("cache-control", "no-store");
  return new Response(JSON.stringify(payload), { ...init, headers });
}

export async function readJson(request) {
  try {
    return await request.json();
  } catch {
    return null;
  }
}

export function validateSessionPayload(payload) {
  if (!payload || typeof payload !== "object") {
    return "invalid payload";
  }
  if (typeof payload.session_id !== "string" || payload.session_id.length < 8) {
    return "invalid session_id";
  }
  if (!Array.isArray(payload.items) || payload.items.length !== CLIPS.length) {
    return "invalid items";
  }

  const seen = new Set();
  for (const item of payload.items) {
    if (!item || typeof item !== "object") {
      return "invalid item";
    }
    if (typeof item.filename !== "string" || typeof item.group !== "string") {
      return "invalid clip";
    }
    const clipKey = `${item.group}/${item.filename}`;
    if (!CLIP_MAP.has(clipKey)) {
      return "invalid clip";
    }
    if (!Number.isInteger(item.order) || item.order < 1 || item.order > CLIPS.length) {
      return "invalid order";
    }
    if (!Number.isInteger(item.score) || item.score < 1 || item.score > 5) {
      return "invalid score";
    }
    if (seen.has(clipKey)) {
      return "duplicate clip";
    }
    seen.add(clipKey);
  }

  if (seen.size !== CLIPS.length) {
    return "missing clip";
  }
  return null;
}
