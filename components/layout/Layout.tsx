import React from "react";

const Layout = ({ children }: any) => {
  return (
    <section className="max-w-5xl m-auto py-4 mb-2 flex flex-col gap-3 md:flex-row">
      {children}
    </section>
  );
};

export default Layout;
