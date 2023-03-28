import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <main className='error__container'>
      <h2 className="error__404">404</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="error__warning"
      >
        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
      <h3 className="error__title">
        Apologies,
        <br /> page not found.
      </h3>
      <p className="error__message">
        The article you are looking for doesn’t exist or was either removed.
      </p>
      <Link className="link__button" to={'/'}>
        Home
      </Link>
    </main>
  );
}

export default ErrorPage;
