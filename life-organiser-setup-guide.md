# The Life Organiser: Setup Guide

**What this is:** a safe way to keep everything your family would need if you died or became unable to manage your affairs. It covers accounts, passwords, policies, contacts and wishes, and it is kept up to date and protected from thieves.

**What it costs:** nothing, apart from an envelope. You might also choose to pay a solicitor to hold one envelope (see Step 6).

**Time to set up:** about two hours, once. After that, about 20 minutes twice a year.

---

## How it works (read this first)

There are three parts. Each one does a different job.

| Part | What it holds | Who can see it | How dangerous if stolen |
|---|---|---|---|
| **1. The Overview** | *What* you have and *who* to contact (bank names, policy providers, solicitor, wishes). No passwords. | Your executor and family, freely | Low. It says what exists, not how to get in. |
| **2. The Vault** | The secrets: passwords, PINs, phone passcode, security codes | Nobody without the master password | None while locked. It's scrambled (encrypted). |
| **3. The Envelope** | The master password and the keys to your online storage | Only opened when needed | **High.** This is the one thing to guard. |

**The golden rule:** the Vault and the Envelope must never be kept together. Either one on its own is useless to a thief.

The Vault is stored in Proton Drive (encrypted, so safe even if Proton were compromised). Everything rests on the master password, and that lives only in your head and in the Envelope.

---

## What you'll need

- [ ] A computer (Windows or Mac)
- [ ] **KeePassXC**: free password-vault software
- [ ] A **Proton** account: free, encrypted online storage (Proton Drive)
- [ ] An **authenticator app** on your phone (Proton Authenticator, Google Authenticator or Microsoft Authenticator, all free)
- [ ] An envelope, pen and paper
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
- Write it on paper **now**. Keep that paper on you until Step 6.
- Practise typing it a few times.

**Don't:**
- Use names, birthdays, addresses, song lyrics or quotes
- Use this password for anything else, ever
- Save it in your email, phone notes or a document on your computer

> ⚠️ **There is no "forgot password" button.** If the master password is lost and the Envelope is lost, the Vault can never be opened by anyone, including you. That's what makes it secure, and it's why Step 6 matters.

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

## Step 5: Create the Overview

This is the "front page": the first thing your executor reads. **It must contain no passwords, PINs or account numbers.** Write what exists and who to call, not how to get in.

1. In the `Life Organiser` folder, create a document called `Overview`. Word, Pages or a plain text file are all fine.
2. Start it with these headings (we'll fill them in later):
   - **Read me first.** What to do in the first few days, in order.
   - **Key people:** executor, solicitor, accountant, close family.
   - **Where things are:** the original will, the deeds, the Envelope, the Document Box.
   - **Money:** which banks, pensions and investments (names only).
   - **Property, insurance, regular bills**
   - **Digital life:** which accounts exist
   - **My wishes:** funeral and any personal messages
   - **Last updated:** *(date)*
3. Print one copy.

---

## Step 6: Prepare the Envelope

This is the most important step.

On a sheet of paper, write clearly:

- [ ] The **Vault master password** (Step 1)
- [ ] Your **Proton email address and password** (Step 3)
- [ ] Your **Proton backup codes** (Step 3)
- [ ] Your **Proton recovery phrase** (Step 3)
- [ ] Your **phone passcode** (your authenticator app is on your phone)
- [ ] One line: *"The Vault is in Proton Drive in the Life Organiser folder. Download it and open it with KeePassXC from [keepassxc.org](https://keepassxc.org)."*

Seal it in an envelope. Sign and date across the seal, so anyone can see whether it has been opened. Write on the front: **"To be opened by my executor only."**

**Where to keep it.** Choose one:

| Option | Cost | Notes |
|---|---|---|
| **With your solicitor**, stored with your will | Small fee, sometimes free if they hold your will | Most secure, and the executor will go there anyway |
| **In a fireproof safe at home** that your executor knows about | Cost of a safe | Fine if the house is secure. Tell your executor where it is. |

Now **destroy the scrap paper** you've been carrying since Step 1.

---

## Step 7: Brief your executor

Give your executor **the printed Overview** and have this conversation:

**What's in Proton Drive (and who can see it):**

Proton Drive holds two things:
1. **The Overview and scanned documents** - not encrypted, readable by anyone with Proton access
2. **The Vault** - encrypted, needs the master password to open

**Your choice:**

You have two options for sharing Proton access:

| Option | Best for | How it works |
|---|---|---|
| **A. Share Proton access now** | People you trust completely (spouse, adult child) | Give them your Proton login details now. They can see the Overview and documents immediately if needed, but they still need the Envelope (at your solicitor) to open the Vault. |
| **B. Keep Proton login in the Envelope** | Everyone else | Tell them: "If anything happens to me, read the Overview I've given you. The Envelope at [solicitor/safe] has what you need to access everything else." |

**Either way:**
- The Vault stays secure (they need the master password from the Envelope)
- The golden rule is maintained (Vault password kept separate from the Vault)
- They have enough information to get started (the printed Overview)

---

## Step 8: Fill it in and keep it up to date

The system is now built but empty. Filling it in for the first time, scanning your documents, storing the originals and the six-monthly review are all covered in the second guide, **Filling It In and Keeping It Current**.

**Whenever something changes** (new bank account, changed password, new policy):
- Update the Vault or the Overview straight away. It's backed up automatically.

**Only if** you change your master password, Proton password or phone passcode:
- [ ] Write a new Envelope and swap it for the old one. Shred the old one.

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
| **Forgotten master password** | Ask your solicitor for the Envelope (or open your safe), then write a new Envelope. |
| **Phone lost** | Use your Proton backup codes to sign in, then set up the authenticator app on your new phone. Change your phone passcode and update the Envelope. |
| **Envelope possibly seen by someone** | Change the master password and Proton password today, then write a new Envelope. |
