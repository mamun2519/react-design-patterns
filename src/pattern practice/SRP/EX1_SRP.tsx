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
  return (
    <div>
      <h1>Dashboard</h1>

      {/* User Profile */}
      <UserProfile />

      {/* Notifications */}
      <Notifications />

      {/* Tasks */}
      <Tasks />
    </div>
  );
};

export const UserProfile = () => {
  const [user, _setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
  });
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export const Notifications = () => {
  const [notifications, _setNotifications] = useState([
    "New message",
    "Server update",
  ]);

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

export const Tasks = () => {
  const [tasks, _setTasks] = useState(["Finish report", "Update project"]);
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
};
