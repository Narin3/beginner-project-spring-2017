import React from 'react';
import { render } from 'react-dom';

const Application = () => {
  return (
    <div> Hello world </div>
  );
};

render(<Application/>, document.getElementById('container'));
