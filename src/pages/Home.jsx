import React from 'react';
import UserResults from '../components/users/UserResults';
import UserSearch from '../components/users/UserSearch';

export default function Home() {
  return (
    <>
      <UserSearch />
      <UserResults />
    </>
  );
}
