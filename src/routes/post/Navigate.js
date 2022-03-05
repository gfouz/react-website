import * as React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

const Navigate = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const currentId = parseInt(params.id);
  const ids = props.posts.map((route) => route.id);
  const initialState = ids.indexOf(currentId);
  const [active, setActive] = React.useState(true);
  const [index, setIndex] = React.useState(initialState);
  React.useEffect(() => {
    navigate(`/post/${ids[index]}`);
  }, [index]);
  function next() {
    index < ids.length - 1 ? setIndex((prev) => prev + 1) : setActive(false);
    index === ids.length - 1 ? setActive(false) : setActive(true);
  }
  function prev() {
    index > 0 ? setIndex((prev) => prev - 1) : navigate("/blog");
    setActive(true);
  }
  return (
    <>
      <StyledNav color={props.color}>
        <section className="navigate">
          <nav className="navigate__prev">
            <button className="btn btn-back" onClick={prev}>
              PREV
            </button>
          </nav>
          <nav className="navigate__next">
            <button
              className={active ? "btn" : "btn  btn--disabled"}
              onClick={next}
            >
              NEXT
            </button>
          </nav>
        </section>
      </StyledNav>
    </>
  );
};
export default Navigate;
const StyledNav = styled.div`
  --violet: #820aa1;
  .navigate {
    margin: 2em 0;
    heigth: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn {
    width: 80px;
    outline: none;
    border: none;
    border-radius: 8px;
    padding: 0.3em 1em;
    margin: 1em;
    color: #ff9800;
    background-color: #424242;
    text-transform: uppercase;
    font-weight: bolder;
    background-color: #000000;
    box-shadow: 1px 1px 15px var(--violet);
  }
  .btn--disabled {
    color: #666666;
    background-color: #999999;
  }
`;
