import { useState } from "react";
import backgrounds from "../Data/background.json"

export const Background=()=> {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = async (twClass, id) => {
    await navigator.clipboard.writeText(twClass);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 gap-5 p-1">
      {backgrounds.map(bg => (
        <div
          key={bg.id}
          className={`rounded-2xl w-[170px] h-[200px]  sm:h-[230px] sm:w-[200px] md:w-[250px] md:h-[250px] shadow-md flex flex-col items-center justify-between text-center ${bg.class}`}
         
        >
          <span className="mt-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
            {bg.name}
          </span>
          <button
            onClick={() => handleCopy(bg.class, bg.id)}
            className="mb-3 bg-white/80 hover:bg-white px-3 py-1 rounded text-sm shadow"
          >
            {copiedId === bg.id ? "✅ Copied!" : "📋 Copy"}
          </button>
        </div>
      ))}
    </div>
  );
}
