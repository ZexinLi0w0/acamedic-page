import { getStore } from "@netlify/blobs";

export const CLIPS = [
  { filename: "00dbee34-122e-445c-9ade-851d2e0b9726.wav", group: "clean" },
  { filename: "0ae6a246-d3bd-4024-bbf8-8f23aa4128fe.wav", group: "clean" },
  { filename: "0b0aacbe-9a79-4002-a2b0-1f3faf021ac6.wav", group: "clean" },
  { filename: "0b1cbf00-27a1-4b89-8a68-2f0465e7dbd2.wav", group: "clean" },
  { filename: "0b3cf82a-1459-47c3-8697-dd1f34b9758e.wav", group: "clean" },
  { filename: "0b72b633-8c0c-49e3-958a-238e966c9d89.wav", group: "clean" },
  { filename: "0b796d71-1cee-4f50-9c53-fbed4bcff2d5.wav", group: "clean" },
  { filename: "0ba36980-0fbc-4767-92a0-90a46de93f86.wav", group: "clean" },
  { filename: "0cdff5bc-8bbc-4810-8754-9aaba999afb2.wav", group: "clean" },
  { filename: "0d0e1117-24ca-4708-b1bc-7c1d7edf05e6.wav", group: "clean" },
  { filename: "0d235d32-d238-415d-aac3-e2d5e4231682.wav", group: "clean" },
  { filename: "0d2b54b4-f979-45bd-979f-510eabb48577.wav", group: "clean" },
  { filename: "0d51def8-9d31-483f-8d07-442bac45d6f9.wav", group: "clean" },
  { filename: "0dc0fcd5-9ede-4bf1-98d9-18fb0a0ef0d1.wav", group: "clean" },
  { filename: "0e06388f-c4c0-49b4-8dda-1a00ac5a9e54.wav", group: "clean" },
  { filename: "0e2f45eb-7726-4523-a778-3031086adb16.wav", group: "clean" },
  { filename: "0eb09d6f-a865-4e6a-96b6-b053f6048d27.wav", group: "clean" },
  { filename: "0ec47fee-90ec-4806-b34a-588d0afa3d90.wav", group: "clean" },
  { filename: "0f2abdce-7d0e-4055-bdd6-d938f6b60330.wav", group: "clean" },
  { filename: "0f2e7b7e-c9ba-4d15-8946-489df35a3805.wav", group: "clean" },
  { filename: "1a08a5d3-60c8-407b-b156-d50d593355ec.wav", group: "clean" },
  { filename: "1a817d47-b296-46ba-a8e7-acbc3dc86e63.wav", group: "clean" },
  { filename: "1b7910c1-9adc-4c5d-838d-8d5e4c486df3.wav", group: "clean" },
  { filename: "1c7d30d7-9dff-4b10-b615-5e2e120e8ceb.wav", group: "clean" },
  { filename: "1c8e8241-ea4e-488d-a85a-0da3ef121700.wav", group: "clean" },
  { filename: "001a0feb-a83f-4d29-b13c-4d9dc7b69ae9.wav", group: "poisoned" },
  { filename: "00e2ba03-83a5-4bd3-a0ee-2ea4f0fb4354.wav", group: "poisoned" },
  { filename: "0a6d228f-11ea-4d51-a782-66a21052e375.wav", group: "poisoned" },
  { filename: "0ab2aade-5409-4d31-aa1c-e396f90c2224.wav", group: "poisoned" },
  { filename: "0ad1d18a-91c9-4f72-a60b-2dfe73eabbfa.wav", group: "poisoned" },
  { filename: "0b796d71-1cee-4f50-9c53-fbed4bcff2d5.wav", group: "poisoned" },
  { filename: "0b8699e5-48e8-41b8-a0a9-f3ee1f28cd04.wav", group: "poisoned" },
  { filename: "0bd84593-4482-45e4-9cbd-928e8890179e.wav", group: "poisoned" },
  { filename: "0c18daf4-7b08-45d5-a5a0-47ff145b2a1f.wav", group: "poisoned" },
  { filename: "0c97786a-cab6-496e-9c68-f4e74340d265.wav", group: "poisoned" },
  { filename: "0cdff5bc-8bbc-4810-8754-9aaba999afb2.wav", group: "poisoned" },
  { filename: "0d2b54b4-f979-45bd-979f-510eabb48577.wav", group: "poisoned" },
  { filename: "0d35568f-d2ef-47f9-85d6-a3fc8d304610.wav", group: "poisoned" },
  { filename: "0d4a96c7-ca62-491a-8351-1dc196bd76f8.wav", group: "poisoned" },
  { filename: "0db967e9-8ca4-4de4-8ec1-92cfe7afad92.wav", group: "poisoned" },
  { filename: "0e06388f-c4c0-49b4-8dda-1a00ac5a9e54.wav", group: "poisoned" },
  { filename: "0e2a6eb7-edf5-4540-b6b4-3646480e5e16.wav", group: "poisoned" },
  { filename: "0e2f45eb-7726-4523-a778-3031086adb16.wav", group: "poisoned" },
  { filename: "0f981bbb-f4f8-4ee3-b076-29b7344b394a.wav", group: "poisoned" },
  { filename: "1a353702-27d8-4a4b-bc6f-ac2d1016fcf5.wav", group: "poisoned" },
  { filename: "1a40d134-db10-415f-99c1-e093627918b1.wav", group: "poisoned" },
  { filename: "1a87a09e-76e0-4aef-902f-5887a504e0a7.wav", group: "poisoned" },
  { filename: "1af33fca-9cd1-4a66-b0c8-8e70ea4f4610.wav", group: "poisoned" },
  { filename: "1b53c3f4-90a5-469b-85c6-56e08009a45c.wav", group: "poisoned" },
  { filename: "1b7dc0b1-c7ba-4cb9-ae85-0ac9997709ca.wav", group: "poisoned" },
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
