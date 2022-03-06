import * as React from "react";
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import { GlobalStyles } from "../../global";

const Home = () => {

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyles />
        <StyledHome>
          <div className="l-grid homepage">
            <section className="homepage__item">
              <h1 className="homepage__title">portfolio</h1>
              <div className="homepage__line"></div>
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
                <img src="./images/handshake-amber.svg" alt="gfouz-logo" />
              </div>
              <h6 className="logo__skills">WEB DEVELOPER</h6>
              <h1 className="logo__acronym">GFOUZ &copy; {new Date().getFullYear()}</h1>
            </section>
          </div>
        </StyledHome>
      </React.Fragment>
    </ThemeProvider>
  );
};
export default Home;

const StyledHome = styled.div`
  --green: #88ce02;
  --blue: #40c4ff;
  --brown: #F1993F;
  --green-weird: #255842;

  .l-grid {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    background-color: #222222;
    color: #888888;
    }
  .homepage { 
    
    &__item {
      width: 100%;
    }

    &__title {
      margin: 3em 0 0.5em 0;
      text-transform: uppercase;
      font-family: literata;
      font-size: 3em;
      color:#F1993F;
      animation: title 1s;
      animation-fill-mode: forwards;
    }
    &__line {
      height: 2px;
      margin: 0 auto;
      animation: line 3s;
      animation-fill-mode: forwards;
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
      color: #AA4608;
    }
  }
  .logo {

   &__skills {
      color: #AA4608;
      margin: 1em 0;
    }
    &__acronym {
    margin: 1.5em 0;
    color: var(--brown);
    }
    &__image-container {
    width: 10em;
    height: auto;
    margin: 1em 0;
  }
  &__image {
    max-width: 100%;
    height: auto;
  }
  }
  
  @keyframes line {
    0% {
      width: 0;
    }

    100% {
      width: 80%;
      background-color: #AA4608;
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
