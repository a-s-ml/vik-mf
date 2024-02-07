import { Route, Routes } from "react-router-dom";
import { MainPage } from "../MainPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/shop" element={<MainPage />} />
    </Routes>
  );
};
