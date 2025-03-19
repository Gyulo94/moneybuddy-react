import Sidebar from "@/components/shared/sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayouts() {
  return (
    <div className="flex">
      <div className="hidden min-w-[240px] flex-col lg:flex">
        <Sidebar />
      </div>
      <main className="flex w-full flex-col">{<Outlet />}</main>
    </div>
  );
}
