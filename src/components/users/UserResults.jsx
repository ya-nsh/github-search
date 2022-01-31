import React, { useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import Spinner2 from '../layout/Spinner2';
import UserItem from './UserItem';

export default function UserResults() {
  const { users, loading } = useContext(GithubContext);

  return loading ? (
    <Spinner2 />
  ) : (
    <div
      className={`${
        users.length > 0 ? 'card card-bordered' : 'card'
      } p-10 grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 `}
    >
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}
