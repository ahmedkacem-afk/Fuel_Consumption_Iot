// Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 ">
      <Header />
      <main className="flex-grow ">
        <div className="p-4">
          <Outlet /> {/* This is where the child routes will be rendered */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
