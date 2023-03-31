import React from 'react';

const BlogCard = () => {
  return (
    <div className='grid grid-cols-3'>
      <div className='col-span-2 bg-red-400'>
        <h2>this is demo text</h2>
      </div>
      <div className='bg-green-400'></div>
    </div>
  );
};

export default BlogCard;