import cards from "../Data/card.json";

export default function CardList() {
  return (
    <div className="min-h-screen bg-black p-6 text-white">
      {/* 🔹 Intro Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Our Cards</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          These cards highlight different roles and skills in development and design. 
          Each card gives a short introduction about the person and their expertise.
        </p>
      </div>

      {/* 🔹 Cards Grid */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-gray-100 flex items-center justify-center rounded-xl shadow-md w-[400px] h-[400px] p-4"
          >
            <div
              className={card.cardClass}
              style={card.bgImage ? { backgroundImage: `url(${card.bgImage})` } : {}}
            >
              <h3 className={card.nameClass}>{card.title}</h3>

              {/* 🔹 If hasTextarea → move description inside container */}
              {card.hasTextarea ? (
                <div className={card.textareaContainerClass}>
                  <p className="text-gray-500 mb-2">{card.description}</p>
                  <textarea
                    className={card.inputClass}
                    placeholder="Type here..."
                  />
                </div>
              ) : (
                <p className={card.roleClass || "text-sm text-gray-600 mt-2"}>
                  {card.description}
                </p>
              )}

              {/* 🔹 Button */}
              {card.buttonText && (
                <button className={card.buttonClass}>
                  {card.buttonText}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
