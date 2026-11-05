# The Life Organiser: Setup Guide

**What this is:** a safe way to keep everything your family would need if you died or became unable to manage your affairs. It covers accounts, passwords, policies, contacts and wishes, and it is kept up to date and protected from thieves.

**What it costs:** nothing apart from two tamper-evident security bags (£5-10). You might also choose to pay a solicitor to store an envelope, or rent a bank safe deposit box (see Step 6).

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

## Step 1: Create your master password

This is the only password you'll ever need to remember for this system, so it must be strong and memorable. Use **five to seven random words**.

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

**Do:**
- **Go IMMEDIATELY to Step 6** (prepare the envelopes) and write it down there
- Practise typing it a few times to memorize it
- If you must write it down now, use a sheet that will become one of your envelopes in Step 6

**Don't:**
- Use names, birthdays, addresses, song lyrics or quotes
- Use this password for anything else, ever
- Save it in your email, phone notes or a document on your computer
- Write it on scrap paper and carry it around

> ⚠️ **There is no "forgot password" button.** If the master password is lost and both Envelopes are lost, the Vault can never be opened by anyone, including you. That's what makes it secure, and it's why Step 6 matters.

> ⚠️ **IMPORTANT:** Complete Steps 1-6 in one sitting. Don't create a password and leave it written on paper while you do other steps.

---

## Step 2: Create the Vault

1. Go to [**keepassxc.org**](https://keepassxc.org), download it for your computer and install it. Only download it from this site.
2. Open KeePassXC and click **Create new database**.
3. Name it `Life Organiser Vault`. Click **Continue**.
4. Leave the encryption settings as they are. Click **Continue**.
5. Enter your master password from Step 1, twice. Click **Done**.
6. When asked where to save it, choose your **Documents** folder for now. (You'll move it in Step 4.)

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

## Step 3: Set up your secure online storage

This keeps an up-to-date copy of the Vault somewhere safe, so a house fire or a dead laptop doesn't lose everything.

1. Go to [**proton.me/drive**](https://proton.me/drive) and create a free account. Use the five-word method for its password too, with **different words** from your master password.
2. **Turn on two-step login.** In Proton go to **Settings → Account and password → Two-factor authentication**. Scan the code with your authenticator app.
3. Proton will show you **backup codes**. Write them down. They go in the Envelope.
4. Proton will also offer a **recovery phrase** (a list of words). Write it down. It also goes in the Envelope.
5. Install the **Proton Drive app** on your computer and sign in. A Proton Drive folder will appear, like any other folder, and anything put in it is copied safely online.

---

## Step 4: Put the Vault in Proton Drive

1. Inside the Proton Drive folder, create a folder called `Life Organiser`.
2. Move the `Life Organiser Vault` file from Documents into it.
3. From now on, always open the Vault from this folder. Every change you make is then backed up automatically.

> You'll also keep your Overview document in this `Life Organiser` folder (Step 5).

---

## Step 4A: Secure your computer

The Vault file on your computer is encrypted, but only if you type the master password correctly. If someone steals your laptop or malware gets on it, they could try to access the Vault or capture your master password as you type it.

**Enable full-disk encryption (mandatory):**
- **Windows:** Turn on **BitLocker**. Search for "BitLocker" in Settings → System → Storage → Advanced storage settings → Disk Management. Follow the setup wizard. Write down your recovery key and store it with your executor (not in the Envelope).
- **Mac:** Turn on **FileVault**. Go to System Settings → Privacy & Security → FileVault. Write down your recovery key and store it with your executor (not in the Envelope).

This encrypts your entire hard drive. If your laptop is stolen, no one can read any files without your login password.

**Other essential protections:**
- [ ] Use reputable antivirus/anti-malware software and keep it updated (Windows Defender is fine on Windows; macOS has built-in protection)
- [ ] Never type your master password on public computers or computers you don't own
- [ ] Only access Proton Drive on secure WiFi networks (your home network or known trusted networks, never public WiFi)
- [ ] Run a malware scan before opening your Vault if you suspect your computer might be infected
- [ ] Keep your operating system and all software updated (enable automatic updates)

> If your computer is old and no longer receives security updates, consider replacing it before setting up the Life Organiser. An unsupported operating system is vulnerable to attacks.

---

## Step 5: Create the Overview

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

## Step 6: Prepare the Envelopes

This is the most important step. You'll create **two identical envelopes** and store them in **different locations**. This protects against loss, damage or inaccessibility of either location.

**What to write (make two identical copies):**

On two sheets of paper, write clearly:

- [ ] The **Vault master password** (Step 1)
- [ ] Your **Proton email address and password** (Step 3)
- [ ] Your **Proton backup codes** (Step 3)
- [ ] Your **Proton recovery phrase** (Step 3)
- [ ] Your **phone passcode** (your authenticator app is on your phone)
- [ ] One line: *"The Vault is in Proton Drive in the Life Organiser folder. Download it and open it with KeePassXC from [keepassxc.org](https://keepassxc.org)."*

**Seal them securely:**

1. Put each sheet into a **tamper-evident security bag** (the ones you bought in "What you'll need"). These are far more secure than paper envelopes—they show clear evidence if opened.
2. Seal each bag and sign and date across the seal.
3. Write on the front: **"To be opened in case of my death or incapacity by [executor's name] or holders of my Power of Attorney"**

> Why tamper-evident bags? Paper envelopes can be steamed open and resealed invisibly. Security bags (used by banks and police) show unmistakable evidence of tampering. Available cheaply from Amazon or office suppliers.

**Where to store them (choose two different locations):**

**Envelope 1 (primary):**

| Option | Cost | Notes |
|---|---|---|
| **With your solicitor**, stored with your will | Small fee, sometimes free if they hold your will | Ask: "How is this stored—in a safe or filing cabinet? Who has access? What happens if your firm merges or closes?" |
| **Bank safe deposit box** | Annual fee (£50-150) | Very secure, but executor needs documentation to access after death |
| **In a fireproof safe at home** | Cost of safe (£100-300) | Must be bolted down. Tell your executor the combination or key location. |

**Envelope 2 (backup):**

Store the second envelope in a **different location** from the first. Good options:

- With a different solicitor (if you use multiple for different purposes)
- With a highly trusted family member or friend who is **not** your executor (in their safe or with their solicitor)
- In a bank safe deposit box (if Envelope 1 is with a solicitor)
- With a professional document storage service

**CRITICAL RULES:**
- The two envelopes must be in **different physical locations**—different buildings, different towns if possible
- Tell your executor **where both envelopes are stored** (write this in the Overview)
- If you store one with a trusted person, tell them: "Only open this if I die or become incapacitated, OR if the primary envelope (at [location]) is lost or destroyed"
- **Never** store either envelope in the same place as the Document Box (the printed Overview should be with your executor, not in either envelope location)

Now **destroy the scrap paper** you've been carrying since Step 1, and check your computer's Recycle Bin/Bin is empty.

---

## Step 7: Brief your executor

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
- They know where **both** Envelopes are stored (write this clearly in the Overview)

---

## Step 8: Fill it in and keep it up to date

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
