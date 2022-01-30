import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function UserItem({ user }) {
  return (
    <div className="card card-bordered shadow-xl compact side">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14 mb-8 ring ring-primary-content ring-offset-base-100 ring-offset-2 ">
              <img src={user?.avatar_url} alt="Profile" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{user?.login}</h2>
          <Link
            className="text-base-content text-opacity-30"
            to={`/user/${user?.login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};
