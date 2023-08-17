import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import classes from "./Root.module.css";

function RootLayout() {
  return (
    <div>
      <h1>Root Layout</h1>
      <MainNavigation></MainNavigation>
      <main className={classes.content}>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
