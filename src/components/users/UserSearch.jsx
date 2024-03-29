import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

import { searchUsers } from '../../context/github/GithubActions';

export default function UserSearch() {
  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const [text, setText] = useState('');

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter a username', 'error');
    } else {
      // search users
      dispatch({ type: 'SET_LOADING' });
      const users = await searchUsers(text);
      dispatch({ type: 'GET_USERS', payload: users });

      setText('');
    }
  };

  return (
    <div className="flex justify-center mb-14">
      <div className="flex-grow-0 flex-shrink-0 basis-3/5">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                className="w-full pr-40 bg-gray-200 input input-lg text-black border-2 border-gray-200 focus:border-gray-800 focus:outline-none focus:bg-white focus:placeholder-gray-600"
                placeholder="Search a user"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 w-36 btn btn-lg rounded-l-none "
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            className="btn btn-ghost btn-lg"
            onClick={() => dispatch({ type: 'CLEAR_USERS' })}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
