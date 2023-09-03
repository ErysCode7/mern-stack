import React from "react";

const Footer: React.FC = () => {
  const dateNow = new Date().getFullYear();

  return (
    <footer className="h-20 bg-black fixed bottom-0 w-full">
      <div className="flex items-center h-full w-[85%] m-auto">
        <h2 className="text-sm text-white">
          © {dateNow} Mern Stack All rights reserved
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
