import * as React from 'react';
import styled from "styled-components";
import Postlist from "./Postlist";
import Header from "../../components/header/Header";

function Blog() {
  return (
    <>
      <StyledBlog>
        <div className="l-blog">
          <Header bg="#820aa1" color="#ffffff" />
          <section className="blog">
            <article className="blog__logo">
              <img
                className="blog__image"
                src="./images/superman.svg"
                alt="blogIcon"
              />
              <h1 className="blog__title">
                <span>l</span>earning<span>m</span>ore
              </h1>
            </article>
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
  .blog__logo {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .blog__title {
    font-size: 2em;
    color: var(--violet);
    margin: 0 auto;
    font-family: literata;
    text-transform: uppercase;
    span {
      color: #222222;
      font-size: 1.3em;
    }
  }
  .blog__image {
    max-width: 100%;
    height: auto;
    margin: 1em;
  }
  .blog-footer {
    background-color: var(--violet);
    display: grid;
    place-items: center;
    color: #ffffff;
  }
`;
