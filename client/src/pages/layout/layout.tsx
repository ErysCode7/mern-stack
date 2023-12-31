import { Footer } from "@/components/footer";
import { Navbar } from "@/components/nav-bar";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div>
      {/* NAV-BAR */}
      <Navbar />

      {/*  CHILD PAGES */}
      <Outlet />

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Layout;
