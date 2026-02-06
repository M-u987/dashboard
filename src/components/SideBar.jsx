import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    const [toggle, setToggle]=useState(false)
  return (
    <aside className="sidebar">
      <h1 className="brand">AdminPro</h1>
      <button onClick={setToggle}/>

      <nav className="menu">
        <NavLink to="/admin" end>Dashboard</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/subscription">Subscription</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </nav>
    </aside>
  );
}
