import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./fonts/literata.ttf";
import "./fonts/expanse.otf";
import Home from "./routes/Homepage/Homepage";
import Work from "./routes/work/Work";
import About from "./routes/about/About";
import Blog from "./routes/blog/Blog";
import Post from './routes/post/Post'
import NotFound from './routes/NotFound'
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/post/:id" element={ <Post />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </> 
  </React.StrictMode>,
  document.getElementById("root")
);

