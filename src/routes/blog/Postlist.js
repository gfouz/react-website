import * as React from 'react';
import styled from "styled-components";
import postlist from "../../posts.json";
import { Link } from "react-router-dom";

function PostList() {
  //const excerpt = postlist.map(post=>post.content.slice(0, 300) + '...' )
  return (
    <>
      <StyledPost>
        <div className="postlist">
          <div className="post">
            <h3 className="post__topic">TOPICS TO READ</h3>
            {postlist.length &&
              postlist.map((post, i) => {
                return (
                  <div className="post__card" key={post.id}>
                    <img className="post__image" src={`/images/${post.img}`} alt="post"/>
                    <div className="post__card-text">
                      <h4 className="post__title">{post.title}</h4>
                      <small className="post__info">
                        Published on: {post.date} by {post.author}
                      </small>
                      <p className="post__description">{post.description}</p>
                      <Link className="post__link" to={`/post/${post.id}`}>
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
.post__topic {
   color: #0168b8;
}
.post__card {
    display: flex;
    max-width: 600px;
    height: 200px;
    color: #c7bfa41;
    margin: 2em;
    text-align: left;
    font-family: literata;
    border-radius: 5px;
    box-shadow: 1px 1px 10px var(--violet);
  }
.post__card-text {
    border-color:#0168b8;
    border-radius: 5px;
    padding: 1em;
    margin: 0 0.5em;
    color: #333333;
    font-size: calc(0.6em + 1vw)
} 

.post__title {
    color: #999999;
    margin: 0;
    padding: 0 0.3em;
    font-weight: bolder;
    text-transform: uppercase;
  }
.post__image {
   max-width: 150px;
   height: auto;
   object-fit: cover;
}  
.post__body {
  
 }
.post__description {
  color: #999999;
}
.post__link {
  position: relative;
  top: 10px;
  margin: 0 0 1em 0;
  color: #0168b8;
}
}  
`;

// {/*  */} these are comments
// some picked colors
// #0f1724 #11ece5   green #7fc549
// red #fe0002
