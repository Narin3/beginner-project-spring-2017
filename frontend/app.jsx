import React from 'react';
import { render } from 'react-dom';

const Application = ({name}) => {
  return (
    <div> Hello {name} </div>
  );
};

render(<Application name={'new iterate hacker'}/>,
       document.getElementById('container'));
