import * as React from "react";
import { Link } from "react-router-dom";
import { bool, func } from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import { GlobalStyles } from "../../global";

const Home = () => {

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyles />
        <StyledHome>
          <div className="l-grid">
            <section className="l-grid__item">
              <h1 className="l-grid__title">
              port<span className="l-grid__embedded">folio</span></h1>
              <div className="l-grid__line"></div>
            </section>
            <nav className="navbar">
              <ul className="navbar__list">
                <li className="navbar__item">
                  <Link to="/about" className="navbar__link">
                    ABOUT
                  </Link>
                </li>
                <li className="navbar__item">
                  <Link to="/work" className="navbar__link">
                    WORK
                  </Link>
                </li>
                <li className="navbar__item">
                  <Link to="/blog" className="navbar__link">
                    BLOG
                  </Link>
                </li>
              </ul>
            </nav>
            <section className="logo">
              <div className="logo__image-container">
                <img src="./images/handshake.svg" alt="gfouz-logo" />
              </div>
              <h6 className="l-grid__pro">WEB DEVELOPER</h6>
              <h1 className="l-grid__identity">GFOUZ &copy; {new Date().getFullYear()}</h1>
            </section>
          </div>
        </StyledHome>
      </React.Fragment>
    </ThemeProvider>
  );
};
Home.propTypes = {
  open: bool,
  setOpen: func,
};
export default Home;

const StyledHome = styled.div`
  --green: #88ce02;
  --blue: #40c4ff;
  .l-grid {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    background-color: #222222;
    color: #888888;

    &__item {
      width: 100%;
    }

    &__title {
      margin: 3em 0 0.5em 0;
      text-transform: uppercase;
      font-family: literata;
      font-size: 3em;
      color: var(--green);
      animation: title 1s;
      animation-fill-mode: forwards;
    }
    &__embedded {
      color: #ffffff;
      text-shadow: 1px 1px 10px #ffffff;
    }
    &__line {
      height: 2px;
      margin: 0 auto;
      animation: line 3s;
      animation-fill-mode: forwards;
    }
    &__pro {
      color: var(--green);
    }
  }
  .navbar {
    &__list {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
      width: 300px;
      padding: 0 !important;
      animation: navbar 1s;
      animation-fill-mode: forwards;
    }
    &__item {
      list-style-type: none;
    }
    &__link {
      margin: 0 1em;
      text-decoration: none;
      color: var(--green);
    }
  }
  .logo__image-container {
    width: 10em;
    height: auto;
  }
  .logo__image {
    max-width: 100%;
    height: auto;
  }
  .l-grid__identity {
    margin:0.5em 0;
    color: #fffff0;
  }
  @keyframes line {
    0% {
      width: 0;
    }

    100% {
      width: 80%;
      background-color: var(--green);
    }
  }
  @keyframes navbar {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }
    50% {
      transform: translateY(0);
      opacity: 0.1;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes title {
    0% {
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

/* -To get centered an ul into a flexbox container is required to reset
  padding attribute to cero*/
