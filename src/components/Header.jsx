export default function Header({ToggleSidebar}) {
  return (
    <header className="topbar">
      <h2> Admin Dashboard</h2>
       <button className="toggle-btn" onClick={ToggleSidebar}>
        ☰
      </button>
      <div className="profile">
        <span >Admin</span>
        <button type="option">Subscriber
          User
        </button>
        <img
          src=""
          alt="profile"
        />
      </div>
    </header>
  );
}
