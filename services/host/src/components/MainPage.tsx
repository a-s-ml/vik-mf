import { Outlet } from "react-router-dom";

export const MainPage = () => {
  return (
    <div data-testid={"App.DataTestId"}>
      <h1>PAGE</h1>
      <Outlet />
    </div>
  );
};
