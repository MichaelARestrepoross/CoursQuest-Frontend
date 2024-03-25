import React, { useState, useEffect } from 'react';
import SingleReview from './SingleReview';

const ReviewsIndex = ({API}) => {
  
  return (
    <div>
      <SingleReview API={API}/>
      <div className="bg-slate-400">ReviewsIndex</div>
    </div>
  );
};

export default ReviewsIndex;
