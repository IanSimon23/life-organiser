# The Life Organiser: Setup Guide

**What this is:** a safe way to keep everything your family would need if you died or became unable to manage your affairs. It covers accounts, passwords, policies, contacts and wishes, and it is kept up to date and protected from thieves.

**What it costs:** nothing apart from two tamper-evident security bags (£5-10). You might also choose to pay a solicitor to store an envelope, or rent a bank safe deposit box (see Step 2).

**Time to set up:** about two hours, once. After that, about 20 minutes twice a year.

---

## How it works (read this first)

There are three parts. Each one does a different job.

| Part | What it holds | Who can see it | How dangerous if stolen |
|---|---|---|---|
| **1. The Overview** | *What* you have and *who* to contact (bank names, policy providers, solicitor, wishes). No passwords. | Your executor and family, freely | Low. It says what exists, not how to get in. |
| **2. The Vault** | The secrets: passwords, PINs, phone passcode, security codes | Nobody without the master password | None while locked. It's scrambled (encrypted). |
| **3. The Envelopes** | The master password and the keys to your online storage (two copies stored in different locations) | Only opened when needed | **High.** These are the keys to everything. |

**The golden rule:** the Vault and the Envelopes must never be kept together. Either one on its own is useless to a thief.

The Vault is stored in Proton Drive (encrypted, so safe even if Proton were compromised). Everything rests on the master password, and that lives only in your head and in the Envelopes.

---

## What you'll need

- [ ] A computer (Windows or Mac)
- [ ] **KeePassXC**: free password-vault software
- [ ] A **Proton** account: free, encrypted online storage (Proton Drive)
- [ ] An **authenticator app** on your phone (Proton Authenticator, Google Authenticator or Microsoft Authenticator, all free)
- [ ] Two **tamper-evident security bags** (available from Amazon/office supply stores - search for "tamper evident bags" or "cash deposit bags")
- [ ] Pen and paper
- [ ] A printer

---

## About security and your choices

This guide recommends best practices for security: two envelopes in different locations, tamper-evident bags, full-disk encryption, and so on. **Following all the recommendations gives you the strongest protection.**

However, we recognize that everyone has their own circumstances, risk appetite, and level of trust in the people around them. Some people might prefer simplicity over maximum security. That's your choice to make.

**Throughout this guide we'll:**
- Point out the risks of each shortcut or simpler option
- Explain what could go wrong if you skip a security measure
- Let you make informed decisions based on your own situation

**Examples of choices you might make:**
- **One envelope vs two:** One envelope is simpler and cheaper, but if it's lost or destroyed, everything is permanently locked. Two envelopes add redundancy but cost more and require organizing two storage locations.
- **Paper envelope vs security bag:** A paper envelope is fine if you trust the storage location completely. Security bags (£5-10) show clear evidence of tampering but add a small cost.
- **Full-disk encryption:** Essential if your laptop might be stolen or accessed by others. Less critical if it never leaves a secure home and you live alone.
- **Sharing Proton access:** Convenient for a trusted spouse but creates risk if the relationship changes. Keeping it in the envelopes only is more secure but less convenient.

**Our recommendation:** If you're unsure, follow all the steps as written. You can always simplify later once you understand the trade-offs. It's harder to add security after the fact than to start with it.

---

## Step 1: Secure your computer

Do this step FIRST, before creating any passwords or setting up the vault. There's no point in creating a secure system on an insecure computer.

The Vault file on your computer is encrypted, but only if you type the master password correctly. If someone steals your laptop or malware gets on it, they could try to access the Vault or capture your master password as you type it.

**Enable full-disk encryption (strongly recommended):**
- **Windows:** Turn on **BitLocker**. Search for "BitLocker" in Settings → System → Storage → Advanced storage settings → Disk Management. Follow the setup wizard. Write down your recovery key and store it with your executor (not in the Envelopes).
- **Mac:** Turn on **FileVault**. Go to System Settings → Privacy & Security → FileVault. Write down your recovery key and store it with your executor (not in the Envelopes).

This encrypts your entire hard drive. If your laptop is stolen, no one can read any files without your login password.

**⚠️ Risk of skipping this:** If your laptop is stolen without full-disk encryption, someone with technical skills could remove your hard drive, read the Vault file, and try to crack the master password. With a strong master password this would take years, but it's still a risk.

**Other essential protections:**
- [ ] Use reputable antivirus/anti-malware software and keep it updated (Windows Defender is fine on Windows; macOS has built-in protection)
- [ ] Never type your master password on public computers or computers you don't own
- [ ] Only access Proton Drive on secure WiFi networks (your home network or known trusted networks, never public WiFi)
- [ ] Run a malware scan before opening your Vault if you suspect your computer might be infected
- [ ] Keep your operating system and all software updated (enable automatic updates)

> If your computer is old and no longer receives security updates, consider replacing it before setting up the Life Organiser. An unsupported operating system is vulnerable to attacks.

---

## Step 2: Get your physical security items ready

Before you create any passwords, gather what you'll need for physical security and decide where things will be stored.

**What to get:**
- [ ] Two **tamper-evident security bags** (search Amazon/office suppliers for "tamper evident bags" or "cash deposit bags", £5-10 for a pack)
  - **⚠️ Simpler option:** Use regular paper envelopes instead (free). Risk: paper envelopes can be steamed open and resealed invisibly. Security bags show clear evidence of tampering.
- [ ] Pen and paper for writing envelope contents
- [ ] A printer (you'll need to print the Overview later)

**Decide where to store your two envelopes** (you don't need to arrange this yet, just decide):

**Envelope 1 (primary):**
- With your solicitor (stored with your will) - most secure, executor goes there anyway
- Bank safe deposit box - very secure but annual fee (£50-150)
- In a fireproof safe at home (must be bolted down) - Cost of safe (£100-300)

**Envelope 2 (backup):**
- Must be in a **different physical location** from Envelope 1
- Options: different solicitor, with a trusted family member/friend (in their safe), bank safe deposit box, professional document storage

**⚠️ Simpler option:** Use only one envelope instead of two. Risk: if that envelope is lost, destroyed, or the storage location becomes inaccessible, everything is permanently locked. No recovery is possible.

---

### Advanced: Split-knowledge system (higher security, more complexity)

The standard approach above puts both Proton access AND the Vault master password in the same envelopes. This means anyone with an envelope has complete access to everything.

**For higher security, you can separate the two levels of access:**

**Level 1: Proton access (enough to get by)**
- Gives access to the Overview: what exists, who to contact, scanned insurance policies
- Executor can contact bank bereavement teams: "My father had an ISA with you, but I don't have the details"
- Can see scanned documents but NOT passwords/PINs/account numbers
- Lower risk if compromised

**Level 2: Vault password (complete access)**
- Just five words: the KeePass master password
- Opens everything: passwords, PINs, account numbers, security codes
- Makes executor's job much easier
- Higher risk if compromised (though the password alone is useless without knowing about KeePass, Proton, etc.)

**How to implement split-knowledge:**

Instead of two identical envelopes, create:

**Envelope A (Proton access) - two copies:**
- Proton email and password
- Proton backup codes and recovery phrase
- Phone passcode
- Instructions: *"Log in to Proton Drive. In the Life Organiser folder, open the Overview document for next steps. The Vault file is also there, but you'll need the Vault password from [person/location] to open it."*
- Give to executor or highly trusted person (e.g., your daughter)

**Envelope B (Vault password only) - two copies:**
- Just the KeePass master password (five words)
- Instructions: *"This password opens the Life Organiser Vault. The executor has the Vault file and will contact you if they need this password."*
- Give to different trusted person (not the executor)

**Envelope C (complete backup):**
- Everything: Proton details AND Vault password
- Store with solicitor or in safe deposit box
- Emergency backup if A or B locations fail

**Trade-offs:**

✅ **More secure:**
- Theft of Envelope A: thief gets overview but no passwords
- Theft of Envelope B: thief has five random words with no context
- Both must be compromised for complete access

❌ **More complex:**
- Requires coordinating 2-3 different people/locations
- Executor needs to contact the Envelope B holder if they need full access
- More potential points of failure

**Who is this for?**
- People with significant assets worth protecting
- Complex family situations where you trust some people with some information
- Anyone worried about the "all your eggs in one basket" risk
- People who want executor to try the "contact bereavement teams" route first before having full password access

**Questions to ask your solicitor (if using one):**
- "How is my envelope stored? In a safe or filing cabinet?"
- "Who has access to it?"
- "What happens if your firm merges or closes?"
- "Is there a fee for storage?"

---

## Step 3: Create your KeePass master password

This is the password that locks your Vault. It must be strong and memorable. Use **five to seven random words**.

**Option A: EFF Dice-Generated Passphrase (recommended)**

The Electronic Frontier Foundation provides a trusted, audited method using physical dice:

1. Visit [EFF's Dice-Generated Passphrases guide](https://www.eff.org/dice)
2. Download their wordlist or use it online
3. Roll five dice and write down the numbers (e.g., 4-2-6-1-3)
4. Look up the corresponding word in their wordlist
5. Repeat 5-7 times to get 5-7 random words
6. Join them with dashes, for example: `camera-sunrise-hammer-laptop-cushion`

This method guarantees true randomness and uses a community-audited 7,776-word list. Full instructions are at [https://www.eff.org/dice](https://www.eff.org/dice).

**Option B: Use our password generator**

For convenience, visit the [Password Generator](/password-generator) on this site. It uses the same EFF wordlist and your browser's cryptographically secure random number generator. Choose 5-7 words and your preferred separator, then click Generate.

**Now write it down:**

Get two sheets of paper. On both sheets, write:

**"KeePass Vault master password:"** followed by the password you just created.

(If you're doing the split-knowledge approach from Step 2, these two sheets will become your complete backup envelopes in Step 7, and you'll create separate sheets for the split envelopes then.)

**Do:**
- Practise typing it a few times to memorize it
- Keep both sheets safe until Step 7 (when you'll seal them)

**Don't:**
- Use names, birthdays, addresses, song lyrics or quotes
- Use this password for anything else, ever
- Save it in your email, phone notes or a document on your computer
- Write it on scrap paper - use the two envelope sheets

> ⚠️ **There is no "forgot password" button.** If the master password is lost and both Envelopes are lost, the Vault can never be opened by anyone, including you. That's what makes it secure, and it's why Step 7 matters.

> ⚠️ **IMPORTANT:** Complete Steps 3-7 in one sitting. You're building up these sheets as you go, and they'll be sealed in Step 7. Don't leave them lying around between sessions.

---

## Step 4: Create the Vault

1. Go to [**keepassxc.org**](https://keepassxc.org), download it for your computer and install it. Only download it from this site.
2. Open KeePassXC and click **Create new database**.
3. Name it `Life Organiser Vault`. Click **Continue**.
4. Leave the encryption settings as they are. Click **Continue**.
5. Enter your master password from Step 3, twice. Click **Done**.
6. When asked where to save it, choose your **Documents** folder for now. (You'll move it in Step 6.)

Inside the Vault, create these groups (right-click → **New Group**). You'll fill them in later.

- `01 Devices` (phone passcode, computer password)
- `02 Email & Phone` (email is the master key to most other accounts)
- `03 Money` (online banking, savings, pensions)
- `04 Home & Property`
- `05 Insurance`
- `06 Digital Life` (photos, social media, subscriptions)
- `07 Security Codes` (backup codes for two-step logins)

Close KeePassXC and open it again to check the password works.

---

## Step 5: Set up your secure online storage

This keeps an up-to-date copy of the Vault somewhere safe, so a house fire or a dead laptop doesn't lose everything.

1. Go to [**proton.me/drive**](https://proton.me/drive) and create a free account. Use the five-word method for its password too, with **different words** from your KeePass master password.
2. **Turn on two-step login.** In Proton go to **Settings → Account and password → Two-factor authentication**. Scan the code with your authenticator app.
3. Proton will show you **backup codes**. Write them down on both your envelope sheets.
4. Proton will also offer a **recovery phrase** (a list of words). Write it down on both your envelope sheets.
5. Install the **Proton Drive app** on your computer and sign in. A Proton Drive folder will appear, like any other folder, and anything put in it is copied safely online.

**Add to your envelope sheets:**

On both sheets (the ones you started in Step 3), add:

- **"Proton email:"** followed by the email address you just created
- **"Proton password:"** followed by the password you chose
- **"Proton backup codes:"** followed by the backup codes from step 3 above
- **"Proton recovery phrase:"** followed by the recovery phrase from step 4 above

---

## Step 6: Put the Vault in Proton Drive

1. Inside the Proton Drive folder, create a folder called `Life Organiser`.
2. Move the `Life Organiser Vault` file from Documents into it.
3. From now on, always open the Vault from this folder. Every change you make is then backed up automatically.

> You'll also keep your Overview document in this `Life Organiser` folder (Step 8).

---

## Step 7: Seal and store the Envelopes

You now have two sheets of paper with your KeePass master password (Step 3) and Proton details (Step 5) on them. Time to complete them, seal them, and store them.

Choose your approach based on what you decided in Step 2:

---

### Standard approach: Two identical envelopes (everything together)

**Complete the sheets:**

On both sheets, add:

- [ ] Your **phone passcode** (your authenticator app is on your phone, so this is needed)
- [ ] One line: *"The Vault is in Proton Drive in the Life Organiser folder. Download it and open it with KeePassXC from [keepassxc.org](https://keepassxc.org)."*

**Check both sheets contain:**
- KeePass Vault master password
- Proton email and password
- Proton backup codes
- Proton recovery phrase
- Phone passcode
- Instructions line

**Seal them securely:**

1. Put each sheet into a **tamper-evident security bag** (or paper envelope if you chose the simpler option).
2. Seal each bag and sign and date across the seal.
3. Write on the front: **"To be opened in case of my death or incapacity by [executor's name] or holders of my Power of Attorney"**

**Store them in the locations you decided in Step 2:**
- Take Envelope 1 to its primary storage location (solicitor/bank/safe)
- Store Envelope 2 in the different backup location you chose

**Tell your executor where both envelopes are** (you'll write this in the Overview in Step 8).

---

### Advanced: Split-knowledge system (Proton separate from Vault password)

If you chose the split-knowledge approach in Step 2, you'll create different envelopes instead:

**Envelope A (Proton access) - make TWO copies:**

On two new sheets, write ONLY:
- Proton email and password
- Proton backup codes
- Proton recovery phrase
- Phone passcode
- Instructions: *"Log in to Proton Drive at proton.me/drive. In the Life Organiser folder, open the Overview document for next steps. The Vault file is also there, but you'll need the Vault password from [name/location of Envelope B holder] to open it."*

Seal both in tamper-evident bags. Write on the front: **"Proton Drive access - To be opened in case of my death or incapacity by [executor's name]"**

Store one with your executor or highly trusted person. Store the second copy in a different location as backup.

**Envelope B (Vault password only) - make TWO copies:**

On two new sheets, write ONLY:
- The KeePass Vault master password (the five words from Step 3)
- Instructions: *"This password opens the Life Organiser Vault in KeePassXC. [Executor's name] has the Vault file and will contact you if they need this password. Only give this password to [executor's name] or their authorized representative."*

Seal both in tamper-evident bags. Write on the front: **"Vault password - To be opened only if requested by [executor's name] or their authorized representative"**

Give one to a different trusted person (NOT the executor). Store the second copy in a different secure location.

**Envelope C (complete backup) - make ONE:**

On the two original sheets you've been building up (with both KeePass password AND Proton details), add:
- Phone passcode (if not already there)
- Instructions: *"Complete access: This contains both Proton Drive access and the Vault password. Use if the separate envelopes are lost or inaccessible."*

Seal in tamper-evident bag. Write on the front: **"Complete backup - All access details"**

Store with your solicitor or in a bank safe deposit box.

**Tell your executor:**
- Where the Envelope A copies are (Proton access)
- Who has Envelope B (Vault password) and their contact details
- Where Envelope C is (complete backup, for emergencies)

You'll write all this in the Overview in Step 8.

---

**Either approach:**

Now **destroy any scrap paper** with passwords on it, and empty your computer's Recycle Bin/Trash.

---

## Step 8: Create the Overview

This is the "front page": the first thing your executor reads. **It must contain no passwords, PINs or account numbers.** Write what exists and who to call, not how to get in.

1. In the `Life Organiser` folder, create a document called `Overview`. Word, Pages or a plain text file are all fine.
2. Start it with these headings (we'll fill them in later):
   - **Read me first.** What to do in the first few days, in order.
   - **Key people:** executor, solicitor, accountant, close family.
   - **Where things are:** the original will, the deeds, both Envelopes (with specific addresses), the Document Box.
   - **Money:** which banks, pensions and investments (names only).
   - **Property, insurance, regular bills**
   - **Digital life:** which accounts exist
   - **My wishes:** funeral and any personal messages
   - **Last updated:** *(date)*
3. Print one copy.

---

## Step 9: Brief your executor

Give your executor **the printed Overview** and have this conversation:

**What's in Proton Drive (and who can see it):**

Proton Drive holds two things:
1. **The Overview and scanned documents** - technically encrypted by Proton, but readable by anyone who has the Proton login credentials
2. **The Vault** - double-encrypted: first by Proton, then again by your master password

**The key point:** Anyone with Proton access can see your Overview and all scanned documents (bank statements, passport scans, insurance policies). Only the Vault itself needs the master password to open.

**Your choice:**

You have two options for sharing Proton access:

| Option | Best for | How it works |
|---|---|---|
| **A. Share Proton access now** | People you trust completely (spouse, adult child) | Give them your Proton login details now. They can see the Overview and documents immediately if needed, but they still need an Envelope to open the Vault. |
| **B. Keep Proton login in the Envelopes** | Everyone else | Tell them: "If anything happens to me, read the Overview I've given you. The Envelopes at [locations] have what you need to access everything else." |

**⚠️ Important security warnings if you choose Option A:**

If you share Proton access with someone now:
- They can see every bank you use, property addresses, all scanned documents, your entire financial profile
- **If your relationship changes** (marriage breakdown, family dispute), immediately change your Proton password and create new Envelopes
- They still cannot open the Vault without the master password from an Envelope
- Consider whether this person needs immediate access to everything, or whether Option B (Envelopes only) is safer

**Either way:**
- The Vault stays secure (they need the master password from an Envelope)
- The golden rule is maintained (Vault password kept separate from the Vault)
- They have enough information to get started (the printed Overview)
- They know where all Envelopes are stored (write this clearly in the Overview)

**If you chose the split-knowledge approach:**

Explain to your executor:
- "You have access to Proton Drive [or: Envelope A is at [location]]. This gives you the Overview and all scanned documents."
- "With that information, you can contact bank bereavement teams, insurance companies, etc. They'll ask for proof of death and ID, but they can look up accounts from my name and address."
- "If you need full access to passwords and account numbers, [trusted person's name] has the Vault password. Their contact details: [phone/email]. Only ask for it if the bereavement team route doesn't work."
- "In an emergency, there's a complete backup envelope at [solicitor/safe location] with everything."

This gives your executor a clear escalation path: try the simple route first (Overview + bereavement teams), only get the Vault password if needed.

---

## Step 10: Fill it in and keep it up to date

The system is now built but empty. Filling it in for the first time, scanning your documents, storing the originals and the six-monthly review are all covered in the second guide, **Filling It In and Keeping It Current**.

**Whenever something changes** (new bank account, changed password, new policy):
- Update the Vault or the Overview straight away. It's backed up automatically.

**Only if** you change your master password, Proton password or phone passcode:
- [ ] Write two new Envelopes and swap them for the old ones. Shred the old ones.

---

## Quick safety rules

- ✅ Lock your computer when you walk away (Windows key + L, or Ctrl + Cmd + Q on a Mac).
- ✅ Keep your computer's updates switched on.
- ❌ Never type your master password on anyone else's computer.
- ❌ Never email, text or photograph the master password or the Envelope's contents.
- ❌ Nobody genuine (bank, Proton, "Microsoft support") will ever ask for your master password. Anyone who asks is a scammer.

---

## If something goes wrong

| Problem | What to do |
|---|---|
| **Laptop lost or stolen** | Don't panic. The Vault is locked. Change your Proton password from another device. Get a new laptop, install KeePassXC and Proton Drive, and your Vault is back. |
| **Forgotten master password** | Retrieve either of your two Envelopes, then write two new Envelopes. |
| **Phone lost** | Use your Proton backup codes to sign in, then set up the authenticator app on your new phone. Change your phone passcode and update both Envelopes. |
| **One Envelope lost or destroyed** | Don't panic—this is why you have two. Retrieve the remaining Envelope, check its contents, then create two new Envelopes and store them securely. |
| **Envelope possibly seen by someone** | Change the master password and Proton password today, then write two new Envelopes. |
