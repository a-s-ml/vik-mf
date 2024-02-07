import React, { useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { deepMerge } from "@packages/shared/src/utils/deepMerge";

import { UserCard } from "@packages/shared/src/components/UserCard";
import { MainPage } from "../MainPage";

export const App = () => {
  deepMerge();
  return (
    <Routes>
      <Route path="/admin" element={<MainPage />} />
    </Routes>
  );
};
