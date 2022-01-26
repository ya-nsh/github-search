import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

export default function Navbar({ title }) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-slate-800 text-gray-50">
      <div className="container  mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-4xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: 'GitHub Search'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};
