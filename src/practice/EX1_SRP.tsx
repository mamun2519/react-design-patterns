/**
 * Bad Example:
 * - The Dashboard component is responsible for displaying the user profile, notifications, and tasks.
 * - This violates the Single Responsibility Principle (SRP) because the component is responsible for more than one thing.
 */

import { useState } from "react";

export const DashboardBad = () => {
  const [user, _setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
  });
  const [notifications, _setNotifications] = useState([
    "New message",
    "Server update",
  ]);
  const [tasks, _setTasks] = useState(["Finish report", "Update project"]);

  return (
    <div>
      <h1>Dashboard</h1>

      {/* User Profile */}
      <div>
        <h2>User Profile</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>

      {/* Notifications */}
      <div>
        <h2>Notifications</h2>
        <ul>
          {notifications.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>
      </div>

      {/* Tasks */}
      <div>
        <h2>Tasks</h2>
        <ul>
          {tasks.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Good Example:

export const DashboardGood = () => {
  const [user, _setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
  });
  const [notifications, _setNotifications] = useState([
    "New message",
    "Server update",
  ]);
  const [tasks, _setTasks] = useState(["Finish report", "Update project"]);

  return (
    <div>
      <h1>Dashboard</h1>

      {/* User Profile */}
      <UserProfile user={user} />

      {/* Notifications */}
      <div>
        <h2>Notifications</h2>
        <ul>
          {notifications.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>
      </div>

      {/* Tasks */}
      <div>
        <h2>Tasks</h2>
        <ul>
          {tasks.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const UserProfile = ({
  user,
}: {
  user: { name: string; email: string };
}) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export const Notifications = () => {
  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
};
