import React from 'react';
import { Link } from 'react-router-dom';
import searchImage from '../assets/search.jpg';

export default function About() {
  return (
    <div className="flex justify-center gap-16 align-middle items-center  p-14">
      <div>
        <h1 className="text-6xl mb-4">GitHub Search</h1>
        <p className="mb-4 text-2xl font-light">
          Check out the details of a GitHub User.
        </p>
        <p className="mt-4 text-sm">Made with react</p>
      </div>
      <div className="">
        <Link to="/">
          <img
            src={searchImage}
            alt="search"
            className="rounded-xl w-[20em]   shadow-2xl"
          />
        </Link>
      </div>
    </div>
  );
}

// absolute right-0 bottom-[10em] mr-6 mb-10
// ml-auto mt-6
