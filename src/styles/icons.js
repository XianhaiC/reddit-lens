import React from 'react';

export const Check = props => (
  <svg viewBox='0 0 450 450'>
    <path d='M422.843,111.442L168.284,366a20.361,20.361,0,0,1-28.568,0L26.579,252.863a20,20,0,0,1,28.284-28.284L154,323.716,394.558,83.157A20,20,0,1,1,422.843,111.442Z' />
  </svg>
)


export const CheckBold = props => (
  /*
  <svg class="tick-icon">
    <symbol id="check-tick" viewbox="0 0 12 10">
      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
    </symbol>
  </svg>
  */
  <svg viewbox="0 0 12 8">
    <polyline points="1 5 4 8 10 2 9 1 4 6 2 4" />
  </svg>
)
