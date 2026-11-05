"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function GuideLayout({ content }: { content: string }) {
  return (
    <div className="prose-guide">
      <button
        onClick={() => window.print()}
        className="no-print mb-6 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
      >
        Print this guide
      </button>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => {
            const isExternal = href?.startsWith('http');
            return (
              <a
                href={href}
                className="text-blue-600 hover:underline"
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
              >
                {children}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
