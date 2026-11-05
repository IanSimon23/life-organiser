# Security Audit: Life Organiser System

**Date:** 5 November 2026
**Auditor:** Security Expert Review
**Scope:** Cyber and physical security analysis of the Life Organiser three-layer system

---

## Executive Summary

The Life Organiser system has a sound fundamental security model (three-layer separation, encryption, no cloud passwords). However, it contains several critical single points of failure, particularly around the Envelope, and lacks redundancy mechanisms that could cause total system failure at the worst possible time.

**Priority:** Address the Critical issues before public launch.

---

## 🔴 CRITICAL Issues

### 1. Single Point of Failure: The Envelope

**Problem:** If the Envelope is lost or destroyed, everything is permanently locked. No recovery mechanism exists.

**Attack vectors:**
- Solicitor's office fire/flood/burglary (envelopes might not be in a safe)
- Solicitor firm goes bust/merges - documents can get lost in transition
- Home safe: forgot combination, fire, water damage from firefighting
- Building condemned/legal dispute makes location inaccessible

**Real-world scenario:** Your solicitor closes unexpectedly. By the time you realize, their records are in storage/dispute. Your Envelope is gone.

**Recommendation:**
- Suggest creating TWO envelopes in different secure locations
- Or use split-secret approach (half the master password in each of two envelopes)
- Or mention emergency "key splitting" services

---

### 2. The Master Password on Paper (Step 1→6 Window)

**Problem:** Instructions say "write it on paper NOW, keep it on you until Step 6."

**Risks during this window:**
- Paper falls out of pocket and is found
- Photographed if left on desk
- Lost and never found (user forgets where they put it)
- Pickpocketed along with wallet

**Better approach:** Only write it once, directly into the Envelope. Do Step 6 immediately after Step 1.

**Recommendation:**
- Restructure guide so Envelope creation happens immediately after password generation
- Or suggest writing it in a sealed envelope immediately, then adding other items to it later

---

### 3. Compromised Envelope = Total Breach

**Problem:** The Envelope contains:
- Vault master password
- Proton email + password
- Proton backup codes
- Proton recovery phrase
- Phone passcode

**If someone gets the Envelope:** They have EVERYTHING. The entire security model collapses.

**Seal issues:**
- Envelopes can be steamed open and resealed
- Signature across seal can be forged
- Modern techniques (freezing, careful lifting) can open envelopes invisibly
- Anyone with physical access to solicitor's office during move/staff changes could access

**Recommendation:**
- Use tamper-evident security bags (used by banks/police) instead of paper envelopes
- Add security tape across opening
- Consider using a small lockbox with combination (combination stored separately)
- Add date checking: "If seal date is older than [date on most recent Overview], someone has replaced it"

---

## 🟠 HIGH-SEVERITY Issues

### 4. Proton Drive - The Overview Is NOT Encrypted Statement

**Inaccuracy in Step 7:** Says "The Overview and scanned documents - not encrypted, readable by anyone with Proton access"

**Actual reality:** Proton Drive IS end-to-end encrypted. BUT, anyone with the Proton login can decrypt and read everything.

**The real issue:** If you share Proton access (Option A), the "trusted" person can see:
- Every bank you use (intelligence for social engineering)
- Property addresses
- All scanned passports, statements, etc.
- Your entire financial profile

**Relationship breakdown risk:** If marriage fails after you've shared access, they have everything needed for identity theft or planning financial abuse.

**Recommendation:**
- Correct the technical inaccuracy (it IS encrypted, but anyone with login can decrypt)
- Add explicit warning: "If your relationship with this person changes, immediately change your Proton password and create a new Envelope"
- Consider whether Overview should also go in the Vault (encrypted), not loose in Proton Drive

---

### 5. No Redundancy Anywhere in the System

**Single points of failure:**
- One Envelope at one location
- One Proton account
- One copy of Vault (yes, it's in Proton, but same account)
- One printed Overview with executor

**No suggestion of:**
- Second Envelope in different location
- Split-secret approaches (Shamir's Secret Sharing)
- Multiple executors with different parts of access
- Backup Proton account
- Second executor with separate printed Overview

**Real scenario:** House fire destroys Document Box with printed Overview. Solicitor's office has Envelope. But executor doesn't know which solicitor, or that solicitor has retired/moved.

**Recommendation:**
- Add "belt and braces" option: second Envelope with different trusted person (different from executor)
- Suggest giving close family member a sealed envelope with "Open if I'm incapacitated: [solicitor's contact details]"
- Two executors, each with printed Overview

---

### 6. Phone Scanning - Cloud Backup Risks

**Warning exists but incomplete:**
- Guide says delete from phone and Recently Deleted ✅
- But doesn't mention:
  - Google Photos auto-backup
  - iCloud Photos auto-backup
  - Scanning app's own cloud (Adobe Scan, CamScanner, etc.)
  - Phone backups to computer (iTunes/Finder backups)
  - WhatsApp backup if you sent scan to yourself
  - Third-party keyboard apps that might log/cache images

**Real scenario:** User scans passport on iPhone, deletes it, but it's already in iCloud. Now passport is on Apple's servers indefinitely.

**Recommendation:**
- Add comprehensive checklist for phone scanning:
  - Turn off iCloud Photos first
  - Turn off Google Photos backup first
  - Use native camera app only (not third-party scanning apps)
  - Check phone backup settings don't include photos
  - Explicitly check all cloud services are disabled BEFORE scanning
- Or recommend: "Use a scanner/computer only. Phone scanning creates too many risks."

---

### 7. Computer Security Barely Mentioned

**Current guidance:** Lock computer, keep updates on. That's it.

**Missing critical protections:**
- No mention of full-disk encryption (BitLocker/FileVault) - if laptop stolen, Vault file can be accessed
- No mention of antivirus/anti-malware
- Keylogger could capture master password as typed
- Screen recording malware could capture Vault contents while in use
- Clipboard hijacking when copy-pasting passwords
- Malware could steal the .kdbx file directly from Proton Drive folder
- Public WiFi risks when accessing Proton

**Real scenario:** User's computer has malware. Every time they open the Vault and type the master password, it's being logged. Attacker waits for user to die, then uses their access.

**Recommendation:**
- Add "Computer Security Basics" section:
  - Enable full-disk encryption (mandatory, not optional)
  - Use reputable antivirus software
  - Never type master password on public computers
  - Use secure WiFi only for Proton access
  - Regular malware scans
  - Keep OS and all software updated
- Consider suggesting a "clean" computer just for managing the Vault (extreme but secure)

---

## 🟡 MEDIUM-SEVERITY Issues

### 8. Incapacity vs Death - System Assumes Death

**Problem:** System is for "died OR became unable to manage affairs" but it's really designed for death.

**Incapacity scenarios poorly handled:**
- Stroke/coma: You can't tell anyone where the Envelope is
- Dementia: You forget the system exists or how to access it
- Power of Attorney holders need access BEFORE death, but Envelope says "to be opened by executor only"
- Living access is immediate need, but solicitor might not release Envelope for a living person
- Hospital/care home situation: need immediate access to insurance, contact details

**Current guidance confusion:** "To be opened by executor only" - but Power of Attorney holders aren't executors while you're alive.

**Recommendation:**
- Rewrite Envelope label: "To be opened in case of my death or incapacity by [executor's name] or holders of my Power of Attorney"
- Add separate section on "Access While Alive" for Power of Attorney scenarios
- Consider two envelopes: "If I'm incapacitated" and "If I die"
- Printed Overview should reference Power of Attorney holders and where they can find access

---

### 9. Proton Account Lockout Risks

**Service dependency issues:**
- Proton detects "suspicious activity" and locks account (common with geographic location changes)
- Proton requires additional verification that user can't provide if incapacitated/dead
- What if Proton shuts down, gets acquired, changes to paid-only?
- Swiss jurisdiction - what if Switzerland passes new surveillance laws affecting Proton?
- Proton free tier limitations might change
- Account closure for inactivity

**Real scenario:** User dies. Executor tries to log in from different country (they live abroad). Proton flags suspicious login, requires 2FA. 2FA is on deceased's phone. Backup codes are... in the Envelope. But they need Proton access to verify they should have the Envelope (circular dependency).

**Recommendation:**
- Add "Emergency Access" instructions: how to prove death to Proton and request account access
- Consider: keep a copy of the Vault file on an encrypted USB drive in the physical Document Box (redundancy)
- Warning about service dependency risk
- Instructions on how to export/backup the Vault file locally periodically

---

### 10. No Testing Procedure

**Problem:** Executor never actually tries to access anything until it's too late.

**Issues:**
- Does executor have a device that can run KeePassXC?
- Can they handle the tech?
- Do they know what Proton is?
- Can they actually get to the solicitor?
- Is the solicitor's contact info current?
- Can they read your handwriting in the Envelope?

**Real scenario:** Executor is 75-year-old sibling who's never used a password manager. Envelope instructions say "Download KeePassXC from keepassxc.org" - they don't know what "download" means or think it's a scam. They give up.

**Recommendation:**
- Add annual "fire drill":
  - User: "I'm testing my emergency plan. Can you come over?"
  - Together: retrieve Envelope, confirm it's still sealed
  - Walk through (without opening Envelope): "Here's what you'd do..."
  - Executor tries installing KeePassXC on their device
  - Check executor has compatible device
- Add executor "tech literacy check" in setup guide
- Consider: video walkthrough for executor to watch later

---

### 11. Solicitor Storage Assumptions

**Problem:** "With your solicitor, stored with your will - Most secure"

**Reality:**
- Many small solicitors don't have proper safes
- Envelopes might be in filing cabinets in back office
- Junior staff have access during file retrieval
- Office could be burgled (professional thieves target solicitors for wills/property info)
- No way to verify envelope hasn't been opened and resealed
- Solicitor might retire/firm might merge/close
- Storage fees might apply
- Some solicitors refuse to store random envelopes

**Recommendation:**
- Add questions to ask solicitor:
  - "How is my envelope stored? In a safe or filing cabinet?"
  - "Who has access to it?"
  - "What happens if your firm merges or closes?"
  - "Is there a fee for storage?"
  - "Can I verify it hasn't been opened without opening it myself?"
- Suggest alternatives: bank safe deposit box, specialized document storage services
- Add reminder to review storage security every 2-3 years

---

### 12. Six-Monthly Review Relies on Discipline

**Human factors:**
- Calendar reminders get dismissed
- Life gets busy
- No accountability mechanism
- If skipped for 2+ years, Vault has wrong passwords for closed/changed accounts
- Executor tries to use it and nothing works = system fails when needed
- No one knows reviews stopped happening until it's too late

**Real scenario:** User diligently reviews for 3 years, then stops. 5 years later they die. Vault has passwords for banks closed 5 years ago. Overview lists accounts that don't exist. System is useless.

**Recommendation:**
- Build in accountability: executor gets a copy of review log, asks "when did you last review?"
- Suggest linking review to other mandatory activities (annual tax return, MOT anniversary)
- Add warning: "A vault that isn't maintained is worse than no vault - wrong information causes more problems than no information"
- Consider: executor gets annual postcard: "Life Organiser last reviewed: [date]. If this is over a year ago, please remind [your name] to review it"

---

## 🔵 LOWER-SEVERITY but Notable Issues

### 13. Document Box Creates Aggregated Risk

**Problem:** All valuable documents in one place, with inventory on inside of lid.

**If box is stolen:**
- Thief has passports, birth certificates, deeds, Will, etc.
- Inventory tells them exactly what they have
- Even "fireproof and waterproof" boxes are easy to steal (they're portable)
- Cheap "fireproof" boxes provide minimal protection

**Insurance implications:** Some home insurance policies require certain valuable documents to be in proper safe, not just a box.

**Recommendation:**
- Suggest spreading highest-value documents (passport, etc.) across multiple locations
- Don't put inventory on lid - put it in the Overview instead
- Consider: Document Box for copies/scans only, originals with solicitor
- Recommend bolting box to floor/wall if it contains originals
- Check home insurance requirements

---

### 14. Financial Services Terms of Service Violations

**Problem:** Many banks explicitly prohibit password sharing.

**Legal risk:**
- Giving executor passwords might violate terms of service
- Bank could close accounts if shared access detected
- Insurance policies might be voided if breach is discovered
- Technically you're authorizing someone else to access your accounts
- Some banks consider this fraud, even if for estate purposes

**Reality:** Executors need access, but sharing passwords is technically against most ToS.

**Counterpoint:** This is common practice, banks generally don't enforce against deceased estates, and the alternative (executor having to reset every password) is impractical.

**Recommendation:**
- Add disclaimer: "Note: Storing passwords for others to use may technically violate some terms of service. This system is designed for emergency/estate purposes only."
- Mention alternative: executor uses "tell us about a death" services, gets official access granted
- Clarify: many accounts (email, photos, social media) have no official executor access process, so passwords are only option

---

### 15. Technology Obsolescence

**Long-term risks:**
- Will .kdbx format be readable in 20 years?
- What if KeePassXC development stops?
- What if future OS doesn't support it?
- File format changes might make old vaults unreadable
- No mention of format longevity or migration strategy

**Real scenario:** User sets this up at 40, dies at 80. In 2066, KeePassXC hasn't been maintained for 20 years. Executor can't find software that reads .kdbx format.

**Recommendation:**
- Note in guide: "KeePassXC uses an open format (.kdbx) that has multiple readers, reducing lock-in risk"
- Suggest periodic exports to other formats as backup (encrypted PDF, etc.)
- Add to six-monthly review: "Check KeePassXC is still maintained and updated"
- Future-proofing: consider also exporting to encrypted PDF every few years

---

### 16. Cross-Border Complexity Ignored

**HANDOVER.md mentions Scottish property:**
- Different probate rules (confirmation vs probate)
- Different timeframes (8 days vs 5 days for death registration)
- Assets abroad have different legal requirements
- Proton is Swiss, user might be UK, different jurisdictions
- International executors have different access issues

**If user has international assets:**
- Different countries have different executor rights
- Some countries don't recognize UK probate
- Some require local lawyers
- Time limits vary
- Digital assets (Proton) cross borders

**Recommendation:**
- Add note: "This guide assumes England & Wales. Scotland has different rules. International assets need specialist advice."
- Suggest: if you have Scottish property/assets, consult Scottish solicitor
- If international assets, add section in Overview: "International Assets & Contacts"

---

### 17. Printer Dependency

**Problem:** System requires printing the Overview.

**Issues:**
- Many people no longer have printers
- Print quality degrades over time
- Ink fades
- No provision for executor who doesn't have printer access

**Scenario:** User prints Overview. 10 years later, executor retrieves it. Ink has faded, parts are unreadable.

**Recommendation:**
- Suggest laser printing (doesn't fade) or professional printing
- Or: laminate the printed Overview
- Alternative: executor gets USB stick with read-only copy of Overview (not Vault)
- Or: Overview could be in Proton Drive in a clearly labeled "NOT ENCRYPTED - OVERVIEW ONLY" folder

---

### 18. Authenticator App Dependency

**Problem:** Proton 2FA requires authenticator app on phone. Phone passcode is in Envelope.

**Scenario:** User dies/incapacitated. Phone is locked. Passcode is in Envelope at solicitor. But executor doesn't know which solicitor without Overview. Overview is in Proton. Can't access Proton without 2FA. 2FA is on locked phone. Circular dependency.

**Backup codes solve this... IF they're in the Envelope. But getting to Envelope requires knowing where it is, which might be in the Overview.**

**Recommendation:**
- Make sure printed Overview (given to executor) includes: "The Envelope is at [specific location with address and contact details]"
- Emphasize backup codes are CRITICAL - must be in Envelope
- Consider: backup codes in TWO locations (Envelope + sealed envelope with executor)

---

## Summary of Recommendations by Priority

### MUST FIX Before Launch (Critical):

1. **Envelope redundancy:** Add second Envelope option or split-secret approach
2. **Fix Step 1-6 password-on-paper window:** Write directly to Envelope
3. **Improve Envelope security:** Recommend tamper-evident security bags, not paper envelopes
4. **Correct Proton Drive encryption claim:** Fix technical inaccuracy in Step 7
5. **Computer security section:** Add guidance on full-disk encryption, antivirus, malware

### SHOULD FIX Before Launch (High Priority):

6. **Phone scanning comprehensive checklist:** Cloud backup risks
7. **Add redundancy options:** Second Overview, backup Vault storage
8. **Incapacity vs Death:** Separate guidance for Power of Attorney access
9. **Testing procedure:** Annual fire drill with executor

### NICE TO FIX (Medium Priority):

10. **Proton lockout/dependency:** What if Proton fails/changes
11. **Six-monthly review accountability:** Build in reminders/checks
12. **Solicitor storage verification:** Questions to ask
13. **Tech literacy check:** Does executor understand this?

### DOCUMENT BUT DON'T FIX (Low Priority):

14. **ToS violations:** Add disclaimer
15. **Technology obsolescence:** Note open format, suggest periodic exports
16. **Cross-border complexity:** Add note about jurisdiction differences
17. **Aggregated Document Box risk:** Suggest spreading high-value docs

---

## Conclusion

The Life Organiser has a fundamentally sound security model, but the lack of redundancy creates brittleness that could cause total failure at the worst possible time. The Envelope is a critical single point of failure.

**Priority actions:**
1. Add redundancy options throughout
2. Fix the password-on-paper window
3. Improve physical security of the Envelope
4. Add comprehensive computer security guidance
5. Create executor testing procedure

With these fixes, the system would be significantly more robust while maintaining its elegant simplicity.
