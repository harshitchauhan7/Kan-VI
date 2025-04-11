import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>  {/* This ensures only one page is shown */}
      <Footer />
    </>
  );
}

export default Layout;
