import React, { useEffect, useState } from 'react';

const BlogCard = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => setBlogData(data))
  }, [])

  return (
    <div className='grid grid-cols-3'>
      <div className='col-span-2 p-5'>
        {
          blogData?.map(data => <SingleBlogCard key={data.id} blogData={data} />)
        }
      </div>
      <div className=''></div>
    </div>
  );
};

const SingleBlogCard = ({ blogData }) => {
  return (
    <div className='my-5'>
      <img className='w-[845px] h-[450px] rounded-md' src={blogData.blog_cover_image} alt='' />
      <div className='flex items-center justify-between mx-5'>
        <div className='flex items-center my-5'>
          <div>
            <img className='w-[60px] h-[60px] rounded-full' src={blogData.author_image} alt='' />
          </div>
          <div className='ml-5'>
            <h4 className='text-xl font-semibold'>{blogData.author_name}</h4>
            <p className='text-sm'>{blogData.publish_date}</p>
          </div>
        </div>
        <div>
          <p className='font-semibold'>{blogData.reading_time} min read</p>
        </div>
      </div>
      <h2 className='text-3xl font-bold'>{blogData.blog_title}</h2>
      <div className='flex my-5'>
        {
          blogData.tags.map(tag => <p className='mx-2 font-semibold'>{tag}</p>)
        }
      </div>
      <button className='text-indigo-500 font-semibold underline'>Mark As Read</button>
      <hr className='my-8'/>
    </div>
  )
}

export default BlogCard;