import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';

export default function UserSearch() {
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const [text, setText] = useState('');

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alert('Please enter a username');
    } else {
      // search users
      searchUsers(text);
      setText('');
    }
  };

  // grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8
  return (
    <div className="flex justify-center">
      <div className="flex-grow-0 flex-shrink-0 basis-3/5">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                className="w-full pr-40 bg-gray-200 input input-lg text-black border-2 border-gray-200 focus:border-gray-800 focus:outline-none focus:bg-white focus:placeholder-gray-600"
                placeholder="Search"
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
          <button className="btn btn-ghost btn-lg" onClick={clearUsers}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
