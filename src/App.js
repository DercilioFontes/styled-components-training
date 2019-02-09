import React, { Component } from "react";
import styled, { css } from "styled-components";
import logo from "./logo.svg";
import "./App.css";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #8f857d;
  color: #8f857d;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 1.5em;

  ${props =>
    props.primary &&
    css`
      background: #8f857d;
      color: white;
    `}
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Styled Components Training</h1>
        </header>
        <br />
        <main>
          <section>
            <h2>Button</h2>
            <Button>Normal Button</Button>
            <Button primary>Primary Button</Button>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
