"use client";
import InfinityDisplayArrayHook from "@/hooks/infinity-display-array-hook/infinity-display-array-hook";

const Description = () => {
  const { texts, currentIndex } = InfinityDisplayArrayHook();
  return (
    <>
      {texts.map((text, index) => (
        <p
          key={index}
          className={`text-lg md:text-xl ${
            currentIndex === index ? "animate-fade-right" : "hidden"
          }`}
        >
          {text}
        </p>
      ))}
    </>
  );
};

export default Description;
