import React from 'react';
import { css } from '@emotion/core';
import { PropagateLoader } from 'react-spinners';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #ee7153;
`;
const Spinner = () => {
  return (
    <div className='h-screen flex justify-center items-center bg-white z-30 '>
      {' '}
      <PropagateLoader css={override} size={20} color={'#ee7153'} />
    </div>
  );
};

export default Spinner;
