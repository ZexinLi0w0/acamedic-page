import { jsonResponse, sessionsStore, sortSessionItems } from "./mos-shared.mjs";

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
    const orderedItems = sortSessionItems(session.items);
    sessions.push({
      session_id: session.session_id,
      submitted_at: session.submitted_at,
      user_agent: session.user_agent || "",
      items: orderedItems,
    });
    for (const item of orderedItems) {
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
    recent_sessions: sessions
      .slice()
      .sort((a, b) => b.submitted_at - a.submitted_at)
      .slice(0, 20)
      .map((session) => ({
        session_id: session.session_id,
        submitted_at: session.submitted_at,
        items: session.items.length,
      })),
    session_records: sessions.slice().sort((a, b) => b.submitted_at - a.submitted_at),
  });
}
