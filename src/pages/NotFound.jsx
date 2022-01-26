import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  const insertGif = {
    width: '100%',
    height: 0,
    paddingBottom: '80%',
    position: 'relative'
  };

  function Iframe(props) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : '' }}
      />
    );
  }

  const iframe = `<iframe
          src="https://giphy.com/embed/VwoJkTfZAUBSU"
          width="80%"
          height="75%"
          style="position:absolute"
          frameBorder="0"
          class="giphy-embed"
          display:block
           
        ></iframe>`;
  return (
    <div>
      <h1 className="text-3xl text-center block pb-10">404 - Not Found !</h1>
      <Iframe iframe={iframe} />
      <div style={insertGif}></div>
      <Link to="/" className="text-3xl text-center block">
        Go Home
      </Link>
    </div>
  );
}
