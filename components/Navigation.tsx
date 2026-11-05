"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/setup-guide", label: "Setup Guide" },
    { href: "/population-guide", label: "Population Guide" },
    { href: "/money-mot", label: "Money MOT" },
    { href: "/password-generator", label: "Password Generator" },
  ];

  return (
    <nav className="bg-gray-900 text-white no-print">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Life Organiser
          </Link>
          <div className="flex space-x-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                  pathname === link.href
                    ? "bg-gray-700"
                    : "hover:bg-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
