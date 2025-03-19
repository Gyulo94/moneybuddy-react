import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../ui/theme-provider";
import Header from "./header";

export default function Layouts() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}
