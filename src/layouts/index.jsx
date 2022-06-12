import React from "react";
import { MainWindow, PageLayout } from "./styled";
import Header from "../components/Header";

const Layouts = ({ children }) => {
  return (
    <PageLayout>
      <Header />
      <MainWindow>{children}</MainWindow>
    </PageLayout>
  );
};

export default Layouts;
