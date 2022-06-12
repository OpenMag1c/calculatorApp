import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import {
  HOME_PAGE_CC_ROUTE,
  HOME_PAGE_FC_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from "../constants/router";
import Loader from "../components/Loader";

const HomePageCC = lazy(() => import("../screens/Home"));
const HomePageFC = lazy(() => import("../screens/Home/indexFC"));
const SettingsPage = lazy(() => import("../screens/Settings"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={HOME_PAGE_CC_ROUTE} element={<HomePageCC />} />
        <Route path={HOME_PAGE_FC_ROUTE} element={<HomePageFC />} />
        <Route path={SETTINGS_PAGE_ROUTE} element={<SettingsPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
