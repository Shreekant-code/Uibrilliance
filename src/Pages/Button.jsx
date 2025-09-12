import { useState } from "react";
import btnData from "../Data/btn.json";

export const Buttons = () => {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = async (id) => {
    try {
      const btn = btnData.find(b => b.id === id);
      if (!btn) return;

      const htmlString = `<button class="${btn.className}">${btn.text}</button>`;
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
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {btnData.map((btn) => (
          <div
            key={btn.id}
            className="flex items-center justify-center h-[300px] w-[250px] border p-4"
          >
            <button
              className={btn.className}
              onClick={() => handleCopy(btn.id)}
            >
              {btn.text}
            </button>
          
          </div>
        ))}
      </div>
    </div>
  );
};
