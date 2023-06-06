import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {  FaArrowCircleRight } from 'react-icons/fa';
import axios from 'axios';
import Pagination from '../component/pagination';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const url = selectedCategory
          ? `${process.env.REACT_APP_BASE_URL}/blog?category=${selectedCategory}`
          : `${process.env.REACT_APP_BASE_URL}/blog`;
        const response = await axios.get(url);
        setBlogs(response.data);
        setTotalPages(Math.ceil(response.data.length / 3));
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogs();
  }, [selectedCategory]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIndex = (currentPage - 1) * 3;
  const endIndex = startIndex + 3;
  const currentBlogs = blogs.slice(startIndex, endIndex);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div>
      <div className="contimg">
        <div className="contact2">
          <h1>Blog</h1>
        </div>
      </div>

      <div className='allblogs'>
        <div className="blog-container">
          {currentBlogs.map((blog) => (
            <div className="blog" key={blog._id}>
              <img src={blog.image} alt=" " />
              <h2>{blog.title}</h2>
              <p>{blog.desc.slice(0, 200)}...</p>
              <div className='blogfooter'>
                <Link to={`/blog/${blog._id}`}>
                  Read More < FaArrowCircleRight className="icons" />
                </Link>
                <div className='blogfooterx'>
                  <h4>{blog.fullname}</h4>
                  <h4>{formatDate(blog.createdAt)}</h4>
                </div>
              </div>
            </div>
          ))}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onNextPage={handleNextPage}
            onPrevPage={handlePrevPage}
          />
        </div>

        <div className='blogside'>
          <div className='category'>
            <h2
              className={selectedCategory === '' ? 'active' : ''}
              onClick={() => handleCategoryFilter('')}
            >
              Category
            </h2>
            <div className='btncategory'>
              <h4
                className={selectedCategory === 'technology' ? 'active' : ''}
                onClick={() => handleCategoryFilter('technology')}
              >
                Technology
              </h4>
              <h4
                className={selectedCategory === 'coding' ? 'active' : ''}
                onClick={() => handleCategoryFilter('coding')}
              >
                Coding
              </h4>
              <h4
                className={selectedCategory === 'sport' ? 'active' : ''}
                onClick={() => handleCategoryFilter('sport')}
              >
                Sports
              </h4>
              <h4
                className={selectedCategory === 'others' ? 'active' : ''}
                onClick={() => handleCategoryFilter('others')}
              >
                Others
              </h4>
            </div>
          </div>
             {/* <div className='recent blog'>
            <h2>Recent Post</h2>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
