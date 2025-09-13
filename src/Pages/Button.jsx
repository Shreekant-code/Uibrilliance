import { useState } from "react";
import btnData from "../Data/btn.json";

export const Buttons = () => {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = async (id) => {
    try {
      const btn = btnData.find((b) => b.id === id);
      if (!btn) return;

      let htmlString = "";

      if (btn.html) {
        htmlString = btn.html;
      } else {
        htmlString = btn.icon
          ? `<button class="${btn.className}">${btn.icon} ${btn.text}</button>`
          : `<button class="${btn.className}">${btn.text}</button>`;
      }

      await navigator.clipboard.writeText(htmlString);

      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Buttons</h2>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {btnData.map((btn) => (
          <div
            key={btn.id}
            className="flex flex-col items-center justify-center bg-black h-[220px] w-[240px] border rounded-lg p-4 shadow-sm"
          >
            {btn.html ? (
              <div
                className="cursor-pointer"
                dangerouslySetInnerHTML={{ __html: btn.html }}
                onClick={() => handleCopy(btn.id)}
              />
            ) : (
              <button
                className={`${btn.className} cursor-pointer`}
                onClick={() => handleCopy(btn.id)}
              >
                {btn.icon && (
                  <span
                    dangerouslySetInnerHTML={{ __html: btn.icon }}
                    className="mr-2 cursor-pointer"
                  />
                )}
                {btn.text}
              </button>
            )}

            <span className="mt-2 text-sm text-gray-400">
              {copiedId === btn.id ? "✅ Copied!" : "Click to copy"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
