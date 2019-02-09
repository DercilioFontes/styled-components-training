import React, { Component } from "react";
import styled, { css } from "styled-components";
import logo from "./logo.svg";
import "./App.css";

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: #522b47;
`;

const Wrapper = styled.section`
  padding: 3em;
  background: #dcedff;
`;

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

const WineButton = styled(Button)`
  color: #522b47;
  border-color: #522b47;

  ${props =>
    props.primary &&
    css`
      background: #522b47;
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
        <main>
          <p>
            <span role="img" aria-label="link">
              🔗
            </span>
            <a href="https://www.styled-components.com">
              <code>styled-components</code>
            </a>
          </p>
          <hr />
          <a href="https://www.styled-components.com/docs/basics#getting-started">
            <code>#getting-started</code>
          </a>
          <Wrapper>
            <Title>Wrapper with a Title</Title>
          </Wrapper>
          <hr />
          <section>
            <a href="https://www.styled-components.com/docs/basics#adapting-based-on-props">
              <code>#adapting-based-on-props</code>
            </a>
            <h2>Buttons</h2>
            <Button>Normal Button</Button>
            <Button primary>Primary Button</Button>
          </section>
          <hr />
          <section>
            <a href="https://www.styled-components.com/docs/basics#extending-styles">
              <code>#extending-styles</code>
            </a>
            <h2>Extending Styles</h2>
            <WineButton>Normal WineButton</WineButton>
            <WineButton primary>Primary WineButton</WineButton>
          </section>
          <section>
            <h2>"as" polymorphic prop</h2>
            <Button as="a" href="/">
              Button as Link
            </Button>
            <WineButton as="a" href="/">
              WineButton as Link
            </WineButton>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
