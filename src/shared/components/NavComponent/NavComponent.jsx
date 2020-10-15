import React from "react";
import { Link } from "react-router-dom";
import "./NavComponent.scss";

export default function NavComponent() {
  return (
    <nav className="c-nav">
      <ul>
        <Link className="c-nav__li" to="/amiibos">
          <li>Amiibos</li>
        </Link>
        <Link className="c-nav__li" to="/series">
          <li>Series</li>
        </Link>
        <Link className="c-nav__li" to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
