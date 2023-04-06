import React from 'react';

interface ErrorProps {
  title: string;
  message: string;
}

function Error({ title, message }: ErrorProps) {
  return (
    <>
      <h3 className="error__title">{title}</h3>
      <p className="error__message">{message}</p>
    </>
  );
}

export default Error;
