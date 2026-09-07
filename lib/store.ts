import { promises as fs } from "fs";
import path from "path";
import type { Mission } from "@/types";

const DATA_FILE = path.join(process.cwd(), ".data", "missions.json");
let mem: Mission[] = [];
let counter = 1042;
let loaded = false;

async function load() {
  if (loaded) return;
  loaded = true;
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    const parsed = JSON.parse(raw) as { missions: Mission[]; counter: number };
    mem = parsed.missions ?? [];
    counter = parsed.counter ?? 1042;
  } catch { mem = []; }
}

async function persist() {
  try {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify({ missions: mem, counter }, null, 2), "utf8");
  } catch { /* ephemeral envs */ }
}

export async function listMissions(): Promise<Mission[]> {
  await load();
  return [...mem].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}
export async function getMission(id: string): Promise<Mission | null> {
  await load();
  return mem.find((m) => m.id === id) ?? null;
}
export async function saveMission(m: Mission): Promise<Mission> {
  await load();
  const i = mem.findIndex((x) => x.id === m.id);
  if (i >= 0) mem[i] = m; else mem.push(m);
  await persist();
  return m;
}
export async function nextMissionNumber(): Promise<number> {
  await load();
  const n = counter++;
  await persist();
  return n;
}
