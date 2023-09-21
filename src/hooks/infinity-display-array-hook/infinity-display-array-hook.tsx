"use client";
import { DescriptionDataMock } from "@/utils/mock/description-data-mock";
import { useEffect, useState } from "react";

const InfinityDisplayArrayHook = () => {
  const texts = DescriptionDataMock; // Replace with your array of texts
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000); // Change the interval time as needed (e.g., 2000 milliseconds or 2 seconds)

    return () => {
      clearInterval(intervalId); // Clear the interval on component unmount
    };
  }, [texts.length]);

  return { texts, currentIndex };
};

export default InfinityDisplayArrayHook;
