import React from 'react';
import spinGif from '../../assets/spinner.gif';

export default function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img
        width={180}
        className="text-center mx-auto "
        src={spinGif}
        alt="Loading..."
      />
    </div>
  );
}
