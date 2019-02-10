import React, { Component } from "react";
import styled, { css, keyframes } from "styled-components";
import { FaGithub } from "react-icons/fa";
import logo from "./logo.svg";
import dafdevImage from "./assets/img/dafdev.png";
import "./App.css";

// Components
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

const Link = ({ className, children }) => (
  <a className={className} href="/">
    {children}
  </a>
);

const StyledLink = styled(Link)`
  color: #5b8e7d;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
  font-size: 1.5em;
`;

const Quote = styled.blockquote`
  text-align: justify;
  background-color: #dcedff;
  color: #522b47;
  padding: 2%;

  font-size: 1.2em;
`;

const Thing = styled(Button)`
  font-weight: bold;

  ::before {
    content: "🚀";
  }

  :hover {
    color: #522b47;
  }
`;

const InputWithAttrs = styled.input.attrs(({ size }) => ({
  // we can define static props
  type: "password",

  // or we can define dynamic ones
  margin: size || "1em",
  padding: size || "1em"
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed props */
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  font-size: 4rem;
`;

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  background-color: #282c34;
  color: white;
  font-size: 1em;
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
          <hr />
          <section>
            <a href="https://www.styled-components.com/docs/basics#styling-any-components">
              <code>#styling-any-components</code>
            </a>
            <h2>Styling any Components</h2>
            <p>
              <Link>Normal Link component</Link>
            </p>
            <p>
              <StyledLink>Styled Link Component</StyledLink>
            </p>
          </section>
          <hr />
          <section>
            <a href="https://www.styled-components.com/docs/basics#passed-props">
              <code>#passed-props</code>
            </a>
            <h2>Passed props</h2>
            <Quote>
              <span
                role="img"
                aria-label="nail polish"
                style={{ fontSize: "1.5em", padding: "2%" }}
              >
                💅
              </span>
              "If the styled target is a simple element (e.g. styled.div),
              styled-components passes through any known HTML attribute to the
              DOM. If it is a custom React component (e.g. styled(MyComponent)),
              styled-components passes through all props."
            </Quote>
            <h2>Inputs</h2>
            <Input defaultValue="email" type="email" />
            <Input
              defaultValue="password"
              type="password"
              inputColor="rebeccapurple"
            />
          </section>
          <hr />
          <section>
            <a href="https://www.styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method">
              <code>
                #define-styled-components-outside-of-the-render-method
              </code>
            </a>
            <Quote>
              <h3>
                <span
                  role="img"
                  aria-label="nail polish"
                  style={{ fontSize: "1.5em", padding: "2%" }}
                >
                  💅
                </span>
                Define Styled Components outside of the render method
              </h3>
              "It is important to define your styled components outside of the
              render method, otherwise it will be recreated on every single
              render pass. Defining a styled component within the render method
              will thwart caching and drastically slow down rendering speed, and
              should be avoided."
            </Quote>
          </section>
          <hr />
          <section>
            <a href="https://www.styled-components.com/docs/basics#pseudoelements-pseudoselectors-and-nesting">
              <code>#pseudoelements-pseudoselectors-and-nesting</code>
            </a>
            <h2>Pseudoelements, pseudoselectors, and nesting</h2>
            <Thing primary> Thing</Thing>
            <Quote>
              <span
                role="img"
                aria-label="nail polish"
                style={{ fontSize: "1.5em", padding: "2%" }}
              >
                💅
              </span>
              "For more complex selector patterns, the ampersand (&) can be used
              to refer back to the main component."
              <div className="complex-selectors">
                <p>
                  <code>{`&:hover { color: red; // <Thing> when hovered }`}</code>
                </p>
                <p>
                  <code>{`& ~ & { background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it }`}</code>
                </p>
                <p>
                  <code>{`& + & { background: lime; // <Thing> next to <Thing> }`}</code>
                </p>
                <p>
                  <code>{`&.something { background: orange; // <Thing> tagged with an additional CSS class ".something" }`}</code>
                </p>
                <p>
                  <code>{`.something-else & { border: 1px solid; // <Thing> inside another element labeled ".something-else" }`}</code>
                </p>
              </div>
            </Quote>
          </section>
          <hr />
          <section>
            <a href="https://www.styled-components.com/docs/basics#attaching-additional-props">
              <code>#attaching-additional-props</code>
            </a>
            <h2>Attaching additional props</h2>
            <Quote>
              <p />
              <span
                role="img"
                aria-label="nail polish"
                style={{ fontSize: "1.5em", padding: "2%" }}
              >
                💅
              </span>
              "To avoid unnecessary wrappers that just pass on some props to the
              rendered component, or element, you can use the{" "}
              <code>.attrs </code>
              constructor. It allows you to attach additional props (or
              "attributes") to a component.
              <br />
              <br /> This way you can for example attach static props to an
              element, or pass a third-party prop like{" "}
              <code>activeClassName</code> to React Router's Link component.
              Furthermore you can also attach more dynamic props to a component.
              The <code>.attrs </code> object also takes functions, that receive
              the props that the component receives. The return value will be
              merged into the resulting props as well."
            </Quote>
            <h2>Inputs with Attributes</h2>
            <InputWithAttrs placeholder="A small text input" size="1em" />
            <br />
            <InputWithAttrs placeholder="A bigger text input" size="2em" />
          </section>
          <hr />
          <section id="last-section">
            <a href="https://www.styled-components.com/docs/basics#animations">
              <code>#animations</code>
            </a>
            <h2>Animations</h2>
            <Rotate>
              <span role="img" aria-label="soccer ball">
                ⚽
              </span>
            </Rotate>
            <div className="animation" />
          </section>
        </main>
        <StyledFooter>
          <a
            className="not-active"
            href="https://github.com/DercilioFontes/styled-components-training"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="github" />
          </a>
          <code>dafdev</code>
          <a
            href="https://derciliofontes.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="dafdev" src={dafdevImage} alt={"dafdev"} />
          </a>
        </StyledFooter>
      </div>
    );
  }
}

export default App;
