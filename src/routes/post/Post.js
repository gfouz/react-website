import * as React from "react";
import Navigate from "./Navigate";
import posts from "../../posts.json";
import styled from "styled-components";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

function Post() {
  const slug = {};
  const params = useParams();
  const paramsId = parseInt(params.id);
  posts.forEach((post, i) => {
    if (paramsId === post.id) {
      slug.content = post.content ? post.content : "no given content";
      slug.id = post.id ? post.id : "no given id";
      slug.img = post.img ? post.img : "no give data";
    }
  });
  return (
    <>
      <StyledPost>
        <div className="l-post">
          <section className="post">
            <div>
              <img className="post__image" src={`./images/${slug.img}`} alt="post" />
            </div> 
            <ReactMarkdown
              id={slug.id}
              className="post__markdown"
              children={slug.content}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, "")}
                      style={dracula}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            />
            <Navigate posts={posts} />
          </section>
        </div>
      </StyledPost>
    </>
  );
}
export default Post;

const StyledPost = styled.div`
  .l-post {
    margin: 0 auto;
    border: 2px solid #f1f1f1;
    @media (min-width: 700px) {
      max-width: 80%;
    }
  }
  .post__image {
      max-width: 100%;
      height: auto;
  }
  .post__markdown {
    margin: 2em 0;
    padding: 0 0 3em 0;
    h2 {
      text-align: left;
      color: #444444;
      padding: 0 0.7em;
      margin: 0;
    }
    p {
      color: #373839;
      text-align: left;
      padding: 0.7em;
      margin: 1em 0;
    }
    
  }
`;
