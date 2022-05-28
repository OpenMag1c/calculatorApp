import React from "react";
import Header from "components/Header";
import { PageLayout, MainWindow } from "./components";

export default function Layouts({ children }) {
  return (
    <PageLayout>
      <Header />
      <MainWindow>{children}</MainWindow>
    </PageLayout>
  );
}
