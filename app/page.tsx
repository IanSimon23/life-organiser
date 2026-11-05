import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">The Life Organiser</h1>

      <p className="text-xl mb-8 text-gray-700">
        A free, secure, low-effort system for organising everything a family or executor would need if someone died or lost capacity.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h2 className="text-xl font-semibold mb-2">What makes this different?</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Free:</strong> Built from proven existing tools (KeePassXC, Proton Drive)</li>
          <li><strong>Secure:</strong> Uses industry-standard encryption</li>
          <li><strong>Not arduous:</strong> About 2 hours to set up, 20 minutes twice a year to maintain</li>
          <li><strong>Multiple copies:</strong> Unlike a physical folder, everything stays in sync</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-4">The Three Guides</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Link href="/setup-guide" className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-gray-400 transition">
          <h3 className="text-xl font-semibold mb-2">1. Setup Guide</h3>
          <p className="text-gray-600 mb-4">Build the empty system in 8 steps. Takes about 2 hours once.</p>
          <span className="text-blue-600 font-medium">Read the guide →</span>
        </Link>

        <Link href="/population-guide" className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-gray-400 transition">
          <h3 className="text-xl font-semibold mb-2">2. Population Guide</h3>
          <p className="text-gray-600 mb-4">Fill it in, scan documents, and set up your six-monthly review.</p>
          <span className="text-blue-600 font-medium">Read the guide →</span>
        </Link>

        <Link href="/money-mot" className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-gray-400 transition">
          <h3 className="text-xl font-semibold mb-2">3. Money MOT</h3>
          <p className="text-gray-600 mb-4">Twice-yearly review to cancel, earn, and haggle on your finances.</p>
          <span className="text-blue-600 font-medium">Read the guide →</span>
        </Link>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3">How it works</h2>
        <p className="mb-4">The system has three parts, kept separate for security:</p>
        <ol className="list-decimal ml-6 space-y-2">
          <li><strong>The Overview:</strong> What you have and who to contact (no secrets)</li>
          <li><strong>The Vault:</strong> An encrypted database holding all passwords and sensitive documents</li>
          <li><strong>The Envelope:</strong> The master password (the one thing to guard)</li>
        </ol>
        <p className="mt-4 font-medium">Golden rule: the Vault and the Envelope are never stored together.</p>
      </div>

      <div className="border-t-2 border-gray-200 pt-8">
        <h2 className="text-xl font-semibold mb-3">Ready to start?</h2>
        <p className="mb-4">Begin with the Setup Guide to build your system, then move to the Population Guide to fill it in.</p>
        <div className="flex gap-4 flex-wrap">
          <Link
            href="/setup-guide"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Start with the Setup Guide
          </Link>
          <Link
            href="/password-generator"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
          >
            Generate Master Password
          </Link>
        </div>
      </div>

      <div className="mt-12 text-sm text-gray-600 border-t pt-8">
        <p className="mb-2">
          <strong>Note:</strong> This is not legal or financial advice. The guides are provided as information only.
        </p>
        <p>
          If you find this useful, you can{" "}
          <a href="#" className="text-blue-600 hover:underline">buy me a coffee</a>.
        </p>
      </div>
    </div>
  );
}
