import * as React from 'react';
import StyledHeader from "./Header.styled";
import { useLocation, Link } from "react-router-dom";

export default function Header(props) {
  const links = ["/about", "/work", "/blog", "/"];
  const router = useLocation();
  const { pathname } = router;
  const currentlinks = links.filter((link) => link !== pathname);

  return (
    <>
      <StyledHeader
        color={props.color}
        bg={props.bg}
        fontFamily={props.font}
        position={props.position}
        height={props.height}
        margin={props.margin}
        logo={props.logo}
      >
        <div className="links">
        <div className="logo">{props.children}</div>
          {currentlinks.map((link, index) => (
            <div key={link + index}>
              <Link className="links__item" to={`${link}`}>
                {link === "/" ? "home" : link.slice(1)}
              </Link>
            </div>
          ))}
        </div>
      </StyledHeader>
    </>
  );
}
