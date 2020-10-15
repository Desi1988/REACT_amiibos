import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AmiibosPage from "./pages/AmiibosPage/AmiibosPage";
import HomePage from "./pages/HomePage/HomePage";
import GameSeriesPage from "./pages/GameSeriesPage/GameSeriesPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AmiiboDetailPage from "./pages/AmiibosPage/pages/AmiibosDetailPage";
import { ThemeProvider } from "styled-components";
import { yellowTheme, blueTheme } from "./shared/styles/theme/theme";
import { ButtonSimpleStyle } from "./shared/styles/ButtonSimpleStyle/ButtonSimpleStyle";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <Switch>
            <Route path="/amiibos/:tail">
              <AmiiboDetailPage />
            </Route>
            <Route path="/amiibos">
              <AmiibosPage />
            </Route>
            <Route path="/series">
              <GameSeriesPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
