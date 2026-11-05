# Life Organiser: Project Handover

*Context brief for continuing this project in Claude Code and the knowledge vault. Written 4 November 2026.*

## What this is
A free, secure, low-effort system for organising everything a family or executor would need if someone died or lost capacity. It's built from proven existing tools, with instructions and process layered on top rather than new software.

**Origin:** Ian's experience as executor for his father-in-law's estate, plus seeing a physical "in case I die" folder product advertised. The weaknesses of a physical folder: it gets messy, it isn't to hand when you need to update it, and there's only one copy.

## Audiences
1. **Ian's dad** (87, reasonably comfortable with tech): the baseline user. Guides must be followable by him.
2. **Ian and his peers**: the first tech-savvy generation, near retirement. They want a more active review, which led to the Money MOT.
3. **Possible public audience** via a small website (see Next steps).

## Design principles (agreed)
- **Simple, basically free, highly secure, not arduous.** The only expected costs are a USB stick, envelopes, a fireproof document box, and optionally a solicitor holding the Envelope.
- **Three layers, kept apart:**
  1. **Overview:** what exists, who to call, where originals are. No secrets. Safe to share widely.
  2. **Vault:** a KeePassXC `.kdbx` file holding passwords, PINs, account numbers and sensitive scans (as attachments). Encrypted, so copies are safe to distribute.
  3. **Envelope:** the master password, Proton login, Proton backup codes and recovery phrase, and the phone passcode. The single thing to guard.
- **Golden rule:** the Vault and the Envelope are never stored together.
- **Quick test for scans:** "Could a stranger use this to pretend to be me or take money?" Yes → Vault. No → Proton Drive.
- **Executors notify institutions; they don't log in as the deceased.** Credentials matter mainly for devices, email, photos and anything with no paper trail.
- **Originals still matter.** The signed will in particular. Scans are copies.

## Tool decisions and findings (checked November 2026)
| Tool | Role | Findings |
|---|---|---|
| **KeePassXC** | Vault (desktop) | Independent audit (Jan 2023); ANSSI first-level certification (2025). Use the latest format (KDBX 4) and keep it updated (CVE-2026-4158, local privilege escalation). Preferred over the original KeePass 2. |
| **Proton Drive** (free, 5 GB) | Sync and backup of the Vault, plus lower-risk scans | Encrypts file contents, names and folder structure. Its only Drive-specific audit is old (Securitum, 2021). Proton is moving infrastructure out of Switzerland because of a proposed surveillance law. Little impact here, since files are encrypted before upload. |
| **KeePassium** (iOS/iPad) | Mobile access | Free version handles one database. Cure53 audit (Oct 2024). Opens files via the iOS Files app. Proton Drive appearing in Files is **unverified on Ian's devices**. |
| **KeePassDX** (Android) | Mobile access | Uses Android's file picker. Proton Drive works for *opening* a single file, but **saving back is unreliable**, and Proton's App Lock blocks the integration. **Recommendation: read-only on phone; edit on desktop only.** |
| **Emergency access** (upgrade path, paid) | Could replace the Envelope | Bitwarden Premium (~$19.80/yr; only the account holder pays). Proton paid plans: up to 5 trusted contacts, configurable wait, auto-approves unless denied, contacts need Proton accounts. **Decision: stay free and use the Envelope; the paid Proton plan is the cleanest upgrade if wanted.** |

## Document set
| File | Purpose | Status |
|---|---|---|
| `life-organiser-setup-guide.md` | Guide 1: building the empty system (8 steps) | Draft complete |
| `life-organiser-population-guide.md` | Guide 2: what goes where, scanning, Vault entries, Overview, Document Box, six-monthly review and log | Draft complete |
| `money-mot.md` | Guide 3: twice-yearly money review (cancel, earn, haggle, annual pension/tax/paperwork) | Draft complete |

The guides cross-reference each other: Guide 1's Step 8 points to Guide 2, and Guide 2's review points to Guide 3. The Overview's bills table has optional **monthly cost** and **contract-end** columns that feed the Money MOT.

## Known caveats
- **Menu paths not tested.** The click paths for Proton and KeePassXC were written from general knowledge. Do a live run-through before giving the guides to dad.
- **Phone scanning** may leave copies in camera rolls or cloud backups. The guide warns about this, but test it.
- **No hard-coded figures** in the Money MOT (ISA allowance, FSCS limit, savings allowance), because they change at government Budgets. Keep it that way, or add "check current" links.
- **Jurisdiction.** The guides assume England and Wales. Scotland differs: deaths are registered within 8 days rather than 5, and "confirmation" replaces probate. Relevant because of the Scottish Borders property.

## Comparator reviewed
**myestatekit.co.uk, "The Family Handover Kit"** (from £29, physical/printable): AI-written direct-response marketing; treat its testimonials and named expert as marketing devices.
- **Useful to borrow:** the **5 days / 28 days / 6 months** structure for the executor; tracking tables for letters sent and costs paid out; a prompt to check bereavement benefits (e.g. Bereavement Support Payment); a "practical instructions beyond the will" sheet.
- **Our advantages:** digital access (Vault and Envelope), staying current via sync, and multiple copies.
- **Correction:** its "order 10 to 15 death certificates" is generous; a handful plus certified copies usually suffices.

## Next steps (backlog)
1. **Guide 4: "For my executor: what to do, and when"**, using the 5/28/6 structure, based on Ian's real experience as executor, with notification and costs trackers. This also fills in the Overview's "Read me first" section. Include a Scotland note.
2. **Overview template**: a fill-in version with prompts.
3. **Optional section in Guide 1** on using the Vault on a phone or iPad (KeePassium; KeePassDX read-only).
4. **Live test** of Guide 1 end to end.
5. **Website** (Vercel, subdomain of an existing site):
   - **Content only.** Publish the guides as static pages and printable PDFs. **The site must never collect, store or process anyone's secrets or personal data**, as that would undermine the whole security model. No forms asking for account details, and no "fill it in online" tools.
   - Add a clear "not legal or financial advice" notice and "check current figures" links. Don't imitate GOV.UK styling.
   - Possible later: downloadable blank templates (Overview, review log, Money MOT log).
