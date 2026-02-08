import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import { useState } from "react";
import "./admin.css";

export default function AdminLayout() {

  const [Sidebar,setSidebar]=useState(false);
  
  return (
    <div className="admin-wrapper">
      <Sidebar isOpen={Sidebar} />
      <div className={`admin-right ${Sidebar ? "open" : "closed"}`}>
        <Header ToggleSidebar={()=>setSidebar(!Sidebar)} />
        <main className="admin-body">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
