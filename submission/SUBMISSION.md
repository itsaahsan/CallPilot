# CallPilot — Hackathon Submission Pack
`CALL-E: Your Code Is Calling` · Deadline **Sep 14, 2026 @ 8:45am PDT** · $10,000

## 0. What you are submitting
**User-facing App** → `apps/typescript/callpilot` in
https://github.com/CALLE-AI/awesome-phone-call-agents
("Call chat, call review console, call scheduler UI, customer callback app, business call workbench" — CallPilot is a business call workbench.)

## 1. Before you start (accounts)
- [ ] CALL-E account signed up (20 free calls included). Note the **email address** — Devpost requires it.
- [ ] `CALLE_API_KEY` from https://dashboard.heycall-e.com/account/api-keys
- [ ] At least **one real completed call** in your history (judges score "actually called at runtime"). Use a consenting number you control for the video.
- [ ] Running out of calls? Request more via the form linked on the Devpost resources tab.
- [ ] GitHub account + Devpost account (`itsaahsan` joins/registers for the hackathon).

## 2. Publish the code (pick A or B)

### Option A — full app inside the awesome repo (recommended)
```bash
# 1. Fork https://github.com/CALLE-AI/awesome-phone-call-agents, clone your fork
git clone https://github.com/<you>/awesome-phone-call-agents && cd awesome-phone-call-agents
# 2. Copy this app (exclude build artifacts, deps, local data, secrets)
mkdir -p apps/typescript/callpilot
robocopy "C:\Users\an\Documents\Default Project\callpilot" apps/typescript/callpilot /E /XD node_modules .next .data /XF .env .env.local
# 3. Commit, push, open a PR against CALLE-AI/awesome-phone-call-agents:main
```
Required by the repo template — already covered in this README:
setup ✓ · side effects ✓ · cancellation ✓ · credential handling ✓ · dry-run/preview ✓
(see "Side Effects, Dry-Run & Cancellation" above).

### Option B — external repo link (like CallParity / CallmeMaybe entries)
Push `callpilot/` to your own public GitHub repo, then PR only the README-list entry below.

## 3. README list-entry text (paste into the awesome repo `README.md` Apps table)
```md
[`apps/typescript/callpilot`](apps/typescript/callpilot) - Business call workbench that turns a task into a goal-driven CALL-E call with plan review, live status tracking, and schema-valid structured results; dry-run demo mode by default.
```
(One sentence, factual, tied to executing phone-call tasks — per the repo's entry template.)

## 4. Devpost submission form fields
| Field | Value |
|---|---|
| PR URL | URL of your pull request from step 2 (REQUIRED) |
| Demo video | Public YouTube/Vimeo link, ~3 min (REQUIRED — script below) |
| CALL-E account email | The email you signed up with (REQUIRED) |
| Demo app URL | Your deployed Vercel URL (optional but strongly recommended) |
| Feedback survey | Submit the CALL-E Feedback Survey — separate $200×5 prize pool |

## 5. Demo video script (~3:00 — show product, not code)
| Time | Show | Say |
|---|---|---|
| 0:00–0:20 | Problem | "Clinics and vendors live behind phone numbers. Chatbots stop at text." |
| 0:20–0:50 | Create mission | Create "Find the earliest available appointment", pick Appointment Agent template, approval-required safety. |
| 0:50–1:20 | AI plan | "CallPilot turns the task into an execution plan with guardrails. I review before anything dials." |
| 1:20–2:00 | Live call | Start the call. Point at the timeline + event feed: "Real CALL-E session — status transitions only, nothing invented." |
| 2:00–2:30 | Structured result | "Not a transcript dump — availability, requirements, next action, confidence." |
| 2:30–2:50 | Developer Mode | Flash the SDK request panel for 10s: proof of runtime integration. |
| 2:50–3:00 | Close | "CallPilot: AI that doesn't stop at conversation." + repo/PR link on screen. |

Record with demo mode OFF for at least the hero call (or state clearly which parts are sandbox).

## 6. Judging-criteria pre-flight
- **Real World Impact** — one specific problem (appointment search), safety-gated, worth building on. ✓
- **Quality of Idea** — operations layer (intent→plan→call→data→action), not "AI that calls". ✓
- **Technical Implementation** — `CalleClient` imported + invoked at runtime, REST fallback, webhook, normalization. Prove via Developer Mode. ✓
- **Product Experience & Demo** — landing → wizard → live dashboard → result → history/analytics; video follows the script. ✓
- **Honesty** — every mocked surface watermarked; live feed emits only observed statuses. Never claim a demo run was real. ✓
