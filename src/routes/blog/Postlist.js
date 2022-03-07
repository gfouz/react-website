import * as React from 'react';
import styled from "styled-components";
import postlist from "../../posts.json";
import { Link } from "react-router-dom";

function PostList() {
  return (
    <>
      <StyledPost>
        <div className="postlist">
          <div className="posts">
            <h3 className="posts__topic">TOPICS TO READ</h3>
            {postlist.length &&
              postlist.map((post, i) => {
                return (
                  <div className="posts__card" key={post.id}>
                    <img className="posts__image" src={`./images/${post.img}`} alt="post"/>
                    <div className="posts__card-text">
                      <h4 className="posts__title">{post.title}</h4>
                      <small className="posts__info">
                        Published on: {post.date} by {post.author}
                      </small>
                      <p className="posts__description">{post.description}</p>
                      <Link className="posts__link" to={`/post/${post.id}`}>
                        Read More
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </StyledPost>
    </>
  );
}
export default PostList;

const StyledPost = styled.div`
 height: 100%;
 --violet: #820aa1;
 --blue: #3f8897;
 --black: #444444;
 --brown: #4b2c17;

 @mixin bg {
   background-color: red;
 }
.postlist {
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    margin: 3em 0;

}
.posts__topic {
   color: var(--brown);
   font-family: literata;
}
.posts__card {
    display: flex;
    max-width: 700px;
    height: 200px;
    color: #c7bfa41;
    margin: 2em;
    transition: all 0.2s;
    text-align: left;
    font-family: literata;
    border-radius: 5px;
    box-shadow: 1px 1px 10px #9c4508;
  }
.posts__card:hover {
  transform: scale(1.02);
  box-shadow: 1px 1px 10px #000000;
}
.posts__card-text {
    border-color:#0168b8;
    border-radius: 5px;
    padding: 1em;
    margin: 0 0.5em;
    color: #333333;
    font-size: calc(0.6em + 1vw)
} 

.posts__title {
    color: #999999;
    margin: 0;
    padding: 0 0.3em;
    font-weight: bolder;
    text-transform: uppercase;
  }
.posts__image {
   max-width: 150px;
   height: auto;
   object-fit: cover;
}  
.posts__body {
  
 }
.posts__description {
  color: #999999;
}
.posts__link {
  position: relative;
  top: 10px;
  margin: 0 0 1em 0;
  color: #0168b8;
}


`;

// {/*  */} these are comments
// some picked colors
// #0f1724 #11ece5   green #7fc549
// red #fe0002
