export default function Subscriptions() {
  return (
    <>
      <h2 className="page-title">Subscriptions</h2>

      <div className="subscription-grid">
        <div className="subscription-card">
          <h3>Basic Plan</h3>
          <p className="price">₹199 / month</p>
          <ul>
            <li>✔ 5 Users</li>
            <li>✔ Email Support</li>
            <li>✖ Analytics</li>
          </ul>
          <button>Choose Plan</button>
        </div>

        <div className="subscription-card active">
          <h3>Pro Plan</h3>
          <p className="price">₹499 / month</p>
          <ul>
            <li>✔ Unlimited Users</li>
            <li>✔ Priority Support</li>
            <li>✔ Analytics</li>
          </ul>
          <button>Current Plan</button>
        </div>

        <div className="subscription-card">
          <h3>Enterprise</h3>
          <p className="price">₹999 / month</p>
          <ul>
            <li>✔ All Pro Features</li>
            <li>✔ Dedicated Manager</li>
            <li>✔ Custom Reports</li>
          </ul>
          <button>Contact Sales</button>
        </div>
      </div>
    </>
  );
}
