import { useCounterStore } from "@/store/counter";
import React from "react";

const AboutPage: React.FC = () => {
  const counter = useCounterStore((state) => state.counter);

  return (
    <main className="page-layout !h-[calc(100vh_-_80px)]">
      <h1 className="page-layout__title">About Page: {counter}</h1>
    </main>
  );
};

export default AboutPage;
