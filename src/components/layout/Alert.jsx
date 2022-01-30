import React from 'react';
import { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';

export default function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <p className="flex items-start mb-4 space-x-2 text-center">
        <p className="flex-1 text-base font-semibold leading-7 text-white justify-center">
          <strong className="text-red-500">{alert.msg}</strong>
        </p>
      </p>
    )
  );
}
