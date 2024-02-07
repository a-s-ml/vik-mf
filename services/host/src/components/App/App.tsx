import { Outlet, Route, Routes } from "react-router-dom";
import { MainPage } from "../MainPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/host" element={<MainPage />} />
    </Routes>
  );
};
