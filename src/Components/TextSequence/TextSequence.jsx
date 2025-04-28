import React, { useEffect, useState } from "react";

export default function TextSequence() {
  const messages = [
    "أهلاً بيك في موقعي",
    "هتتعلم حاجات كتير",
    "يلا نبدأ الرحلة ✨",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < messages.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <div className="text-right p-4 font-bold text-xl">
      {messages.slice(0, currentIndex + 1).map((msg, i) => (
        <p key={i} className="mb-2 transition-opacity duration-1000 opacity-100">
          {msg}
        </p>
      ))}
    </div>
  );
}
