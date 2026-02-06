import StatCard from "../components/Statecard";

export default function Dashboard() {
  return (
    <>
      <div className="stats-grid">
        <StatCard title="Total Users" value="1,245" />
        <StatCard title="Subscriptions" value="320" />
        <StatCard title="Revenue" value="₹84,500" />
        <StatCard title="Active Sessions" value="89" />
      </div>

      <div className="panel">
        <h3>Recent Activity</h3>
        <p>No recent activity found.</p>
      </div>
    </>
  );
}
