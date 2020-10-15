import React from "react";
import { ButtonSimpleStyle } from "../../shared/styles/ButtonSimpleStyle/ButtonSimpleStyle";
import { ThemeProvider } from "styled-components";
import { yellowTheme, blueTheme } from "../../shared/styles/theme/theme";
import NavComponent from "../../shared/components/NavComponent/NavComponent";
import "./HomePage.scss";
import '../../shared/styles/titles/TitlesStyle.scss';


export default function HomePage() {
  return (
    <div className="c-homepage">
      <div className="c-homepage__title">
        <h1 className="b-title__text">Welcome to our</h1>
        <img
          className="c-homepage__title-logo"
          src="https://logodix.com/logo/2016068.png"
        />
        <h1 className="b-title__text">fAN PAGE!!</h1>
      </div>
      {/* <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/06/link-amiibo-links-awakening.png?itok=ibOBGmqt"></img> */}
      {/* <ButtonSimpleStyle>botón</ButtonSimpleStyle> */}
      {/* <ThemeProvider theme={yellowTheme}>
        <ButtonSimpleStyle>Botón</ButtonSimpleStyle>
      </ThemeProvider> */}
      {/* <ThemeProvider theme={blueTheme}>
        <ButtonSimpleStyle>Botón</ButtonSimpleStyle>
      </ThemeProvider> */}
      <NavComponent className="c-homepage__nav"/>
    </div>
  );
}
