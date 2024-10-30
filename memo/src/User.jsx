import React, { useState, useEffect } from "react";
import { db } from "./appwrite/databases"; // Make sure db is configured and imported

function UsersList() {
  // State to store user data
  const [users, setUsers] = useState([]);

  // Fetch users from the database on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await db.users.list(); 
        setUsers(response.documents);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="users-list">
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.$id} className="user-card">
            <h3>{user.username}</h3>
            <p><strong>Email:</strong> {user.useremail}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <p><strong>Portfolio:</strong> <a href={user.portfolio} target="_blank" rel="noopener noreferrer">{user.portfolio}</a></p>
            <p><strong>Events:</strong> {user.events ? user.events.join(", ") : "No events"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
