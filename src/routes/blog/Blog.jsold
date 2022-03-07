import * as React from 'react';
import styled from "styled-components";
import Postlist from "./Postlist";
import Header from "../../components/header/Header";

function Blog() {
  return (
    <>
      <StyledBlog>
        <div className="l-blog">
          <Header bg="#25180c" color="#ffffff" />
          <section className="blog">
              <div className="blog__image">
                <h1 className="blog__title">Let's be inquisitive as children.</h1>
              </div>
            <article className="blog__posts">
              <Postlist />
            </article>
          </section>
          <footer className="blog-footer">
            <h3>gfouz &copy; {new Date().getFullYear()} made with react</h3>
          </footer>
        </div>
      </StyledBlog>
    </>
  );
}

export default Blog;

const StyledBlog = styled.div`
  --violet: #820aa1;
  --grey: #222222;
  --blue: #3f8897;
  --brown: #4b2c17;

  .l-blog {
    display: grid;
    grid-template-rows: 60px auto 60px;
    grid-template-cols: 1fr;
    min-height: 100vh;
  }
  .blog {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

  }
  .blog__image {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    height: 500px;
    background-image: url('./images/blog.jpg');
    background-size: 1300px;
    background-position: center;
    background-repeat: no-repeat;
    }
  .blog__title {
    margin: 0 0 4em 0;
    font-family: calibri;
    color: #ffffff;
    text-transform: uppercase;
    text-shadow: 1px 1px 10px #000000;
  }
    
  }
  .blog-footer {
    background-color: var(--brown);
    display: grid;
    place-items: center;
    color: #ffffff;
  }
`;
