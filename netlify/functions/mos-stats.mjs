import { jsonResponse, sessionsStore } from "./mos-shared.mjs";

export default async function handler(request) {
  if (request.method !== "GET") {
    return new Response("Method Not Allowed", {
      status: 405,
      headers: { Allow: "GET" },
    });
  }

  const store = sessionsStore();
  const { blobs } = await store.list();
  const sessions = [];
  const byGroup = {
    clean: { n: 0, mean: 0 },
    poisoned: { n: 0, mean: 0 },
  };

  for (const blob of blobs) {
    const session = await store.get(blob.key, { consistency: "strong", type: "json" });
    if (!session || !Array.isArray(session.items)) {
      continue;
    }
    sessions.push({
      session_id: session.session_id,
      submitted_at: session.submitted_at,
      items: session.items.length,
    });
    for (const item of session.items) {
      if (!byGroup[item.group]) {
        continue;
      }
      byGroup[item.group].n += 1;
      byGroup[item.group].mean += item.score;
    }
  }

  for (const group of Object.keys(byGroup)) {
    const entry = byGroup[group];
    entry.mean = entry.n ? entry.mean / entry.n : 0;
  }

  return jsonResponse({
    sessions: sessions.length,
    ratings: byGroup.clean.n + byGroup.poisoned.n,
    by_group: byGroup,
    recent_sessions: sessions.sort((a, b) => b.submitted_at - a.submitted_at).slice(0, 20),
  });
}
