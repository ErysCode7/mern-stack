import React from "react";
import { Link } from "react-router-dom";

const ErrorPage: React.FC = () => {
  return (
    <main className="page-layout">
      <h1 className="page-layout__title">404</h1>
      <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">
        Page not found!
      </h2>

      <Link to="/" className="bg-blue-500 p-2 rounded active:scale-95">
        Back home
      </Link>
    </main>
  );
};

export default ErrorPage;
