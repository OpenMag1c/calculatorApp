import React from "react";
import Header from "components/Header";
import { PageLayout, MainWindow } from "./components";

function Layouts({ children }) {
  return (
    <PageLayout>
      <Header />
      <MainWindow>{children}</MainWindow>
    </PageLayout>
  );
}

export default Layouts;
