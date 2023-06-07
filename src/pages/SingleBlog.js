import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/blog/${id}`);
        const formattedDate = new Date(response.data.createdAt).toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        });
        const blogDataWithFormattedDate = { ...response.data, createdAt: formattedDate };
        setBlog(blogDataWithFormattedDate);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-blog">
      <img src={blog.image} alt=" " />
      <div className='bdetails'>
      </div>
      <h2>{blog.title}</h2>
      <p>{blog.desc}</p>
    </div>
  );
};

export default SingleBlog;
