import * as React from 'react';
import styled from "styled-components";
import Postlist from "./Postlist";
import Header from "../../components/header/Header";

function Blog() {
  return (
    <>
      <StyledBlog>
        <div className="l-blog">
          <Header bg="#222222" color="#ffffff" />
          <section className="blog">
              <div className="blog__image">
                <img src="./images/blog.jpg"  alt ="blogImage"/>
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
    img {
      max-width: 100%;
      height: auto;
      object-fit: cover;
      margin: 0;
      @media (min-width: 600px){
        margin: 3em 0 0 0;
        border-radius: 9px;
        box-shadow: 1px 1px 10px var(--blue);
      }
    }
    
    
  }
  .blog-footer {
    background-color: var(--grey);
    display: grid;
    place-items: center;
    color: #ffffff;
  }
`;
