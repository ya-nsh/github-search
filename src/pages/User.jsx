import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'; //to get the id from the url
import GithubContext from '../context/github/GithubContext';

export default function User() {
  const { getSingleUser, user } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getSingleUser(params.login);
  }, []);

  return <div>{user.login}</div>;
}
