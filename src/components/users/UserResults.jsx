import React, { useState, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import Spinner2 from '../layout/Spinner2';

export default function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
      }
    });

    const data = await res.json();

    setUsers(data);
    setLoading(false);
  };

  return loading ? (
    <Spinner2 />
  ) : (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
      {users.map(user => (
        <h3>{user.login}</h3>
      ))}
    </div>
  );
}
