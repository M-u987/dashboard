import { useEffect, useState } from "react";

const PAGE_SIZE = 5;

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // Fetch users
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
          setUsers(data);
          setLoading(false);
        });
    }, 3000); // skeleton demo
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(users.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedUsers = users.slice(startIndex, startIndex + PAGE_SIZE);

  // Handle input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add / Update user
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingUser) {
      setUsers(users.map(u =>
        u.id === editingUser.id ? { ...u, ...formData } : u
      ));
    } else {
      const newUser = {
        id: Date.now(),
        ...formData,
      };
      setUsers([newUser, ...users]);
    }

    setFormData({ name: "", email: "" });
    setEditingUser(null);
    setShowForm(false);
  };

  // Edit
  const handleEdit = (user) => {
    setEditingUser(user);
    setFormData({ name: user.name, email: user.email });
    setShowForm(true);
  };

  // Delete
  const handleDelete = (id) => {
    if (window.confirm("Delete this user?")) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  return (
    <div>
      <div className="users-header">
        <h2>Users Management</h2>
        <button onClick={() => setShowForm(true)}>+ Add User</button>
      </div>

      {/* Add / Edit Form */}
      {showForm && (
        <form className="user-form" onSubmit={handleSubmit}>
          <h3>{editingUser ? "Edit User" : "Add User"}</h3>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className="form-actions">
            <button type="submit" className="AddSubmit">
              {editingUser ? "Update" : "Save"}
            </button>
            <button type="button" className="EditSubmit" onClick={() => {
              setShowForm(false);
              setEditingUser(null);
            }}>
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Table */}
      <div className="table-wrapper">
        {loading ? (
          <SkeletonTable />
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={() => handleEdit(user)}>Edit</button>
                    <button className="danger" onClick={() => handleDelete(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button className="PreBtn"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(p => p - 1)}
        >
          Previous
        </button>

        <span>Page {currentPage} of {totalPages}</span>

        <button className="NxrBtn"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(p => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

/* Skeleton Loader Component */
function SkeletonTable() {
  return (
    <div className="skeleton">
      {[1, 2, 3, 4, 5].map(i => (
        <div key={i} className="skeleton-row"></div>
      ))}
    </div>
  );
}
