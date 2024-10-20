import React from 'react';
import './NotFound.css'

function NotFound() {
  return (
    <>
    <div className='mainDiv'>
      <h1>404 - Page Not Found</h1>
      <p>Uh-oh! It seems the page you're looking for doesn't exist or has been moved.</p>
      <p>Don't worry, you can head back to the homepage or check the URL and try again.</p>
      <a href="/">Back to Home</a>
    </div>
    </>
  );
}

export default NotFound
