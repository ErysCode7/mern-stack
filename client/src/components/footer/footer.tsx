import React from "react";

const Footer: React.FC = () => {
  const dateNow = new Date().getFullYear();

  return (
    <footer className="h-20 shadow-sm border-t bg-white fixed bottom-0 w-full">
      <div className="flex items-center h-full w-[85%] m-auto">
        <h2 className="text-sm">© {dateNow} Mern Stack All rights reserved</h2>
      </div>
    </footer>
  );
};

export default Footer;
