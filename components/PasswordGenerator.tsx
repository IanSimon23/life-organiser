"use client";

import { useState } from "react";
import { wordlist } from "@/lib/wordlist";

export default function PasswordGenerator() {
  const [wordCount, setWordCount] = useState(5);
  const [separator, setSeparator] = useState("-");
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    const words: string[] = [];
    const array = new Uint32Array(wordCount);

    // Use crypto.getRandomValues for cryptographically secure randomness
    crypto.getRandomValues(array);

    for (let i = 0; i < wordCount; i++) {
      const index = array[i] % wordlist.length;
      words.push(wordlist[index]);
    }

    setPassword(words.join(separator));
    setCopied(false);
  };

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Calculate entropy: log2(wordlist_size^word_count)
  const entropy = Math.round(wordCount * Math.log2(wordlist.length));

  const getStrengthLabel = () => {
    if (entropy >= 80) return { label: "Excellent", color: "text-green-600" };
    if (entropy >= 70) return { label: "Very Strong", color: "text-green-500" };
    if (entropy >= 60) return { label: "Strong", color: "text-blue-600" };
    return { label: "Moderate", color: "text-yellow-600" };
  };

  const strength = getStrengthLabel();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Master Password Generator</h1>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <p className="font-semibold mb-2">Important:</p>
        <ul className="list-disc ml-6 space-y-1 text-sm">
          <li>This generator uses the EFF's 7,776-word list - the same list used in their dice method</li>
          <li>It runs entirely in your browser - nothing is sent to a server</li>
          <li>Once you close this page, the password is gone forever</li>
          <li><strong>Write it down immediately</strong> before closing this page</li>
          <li>Use this password ONLY for your Life Organiser Vault</li>
        </ul>
      </div>

      <div className="space-y-6 bg-white p-6 rounded-lg border-2 border-gray-200">
        {/* Word Count */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Number of words: <span className="text-blue-600 font-bold">{wordCount}</span>
          </label>
          <input
            type="range"
            min="5"
            max="7"
            value={wordCount}
            onChange={(e) => setWordCount(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>5 (easier to type)</span>
            <span>7 (more secure)</span>
          </div>
        </div>

        {/* Separator */}
        <div>
          <label className="block text-sm font-medium mb-2">Separator:</label>
          <div className="flex gap-2">
            {[
              { value: "-", label: '"-"' },
              { value: " ", label: "Space" },
              { value: ".", label: '"."' },
              { value: "_", label: '"_"' },
              { value: "", label: "None" },
            ].map((option) => (
              <button
                key={option.value || "none"}
                onClick={() => setSeparator(option.value)}
                className={`px-4 py-2 rounded border-2 transition ${
                  separator === option.value
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white border-gray-300 hover:border-gray-400"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={generatePassword}
          className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition text-lg"
        >
          Generate Password
        </button>

        {/* Generated Password Display */}
        {password && (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded border-2 border-gray-300">
              <div className="flex justify-between items-start mb-2">
                <p className="text-xs text-gray-600 font-medium">Your generated password:</p>
                <button
                  onClick={copyToClipboard}
                  className="text-xs bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-700 transition"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              <p className="text-2xl font-mono font-bold text-gray-900 break-all select-all">
                {password}
              </p>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div>
                <span className="text-gray-600">Strength: </span>
                <span className={`font-semibold ${strength.color}`}>{strength.label}</span>
              </div>
              <div className="text-gray-600">
                Entropy: <span className="font-mono font-semibold">{entropy} bits</span>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
              <p className="font-semibold text-amber-900 mb-2">⚠️ Next steps:</p>
              <ol className="list-decimal ml-6 space-y-1 text-sm text-amber-900">
                <li>Write this password on paper RIGHT NOW</li>
                <li>Practice typing it a few times to memorize it</li>
                <li>Keep the paper with you until you complete Step 6 of the Setup Guide</li>
                <li>Never save this password digitally (no screenshots, no files, no emails)</li>
              </ol>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 text-sm text-gray-600">
        <h2 className="font-semibold mb-2">About this generator:</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Uses the EFF Long Wordlist: {wordlist.length.toLocaleString()} carefully selected words</li>
          <li>Powered by your browser's cryptographically secure random number generator (crypto.getRandomValues)</li>
          <li>5 words = ~{Math.round(5 * Math.log2(wordlist.length))} bits of entropy (very strong)</li>
          <li>6 words = ~{Math.round(6 * Math.log2(wordlist.length))} bits of entropy (extremely strong)</li>
          <li>7 words = ~{Math.round(7 * Math.log2(wordlist.length))} bits of entropy (exceptionally strong)</li>
          <li>This is equivalent in security to the EFF dice method, with the same wordlist</li>
        </ul>
      </div>
    </div>
  );
}
