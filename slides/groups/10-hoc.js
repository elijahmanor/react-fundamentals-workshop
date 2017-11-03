import React, { Component } from "react";
import { render } from "react-dom";
import {
  BlockQuote,
  Cite,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane,
  ComponentPlayground,
  Fill,
  Layout,
  MarkdownSlides,
  Link,
  Markdown,
  Appear,
  Image
} from "spectacle";
import CodeSlide from "spectacle-code-slide";
import Playground from "component-playground";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { defaultCode as hocInteractive } from "../assets/hoc-interactive.example";
import styled from "styled-components";

const code = `
const Header = styled.div\`
  color: palevioletred;
  font-size: 18px;
\`

render(<Header>I'm styled!</Header>)
`;

const scope = { styled };

export default (theme, images) => [
  <Slide
    id="hoc"
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Heading textColor="quartenary" caps fit>
      HOC
    </Heading>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      HOC
    </Heading>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      Higher Order Components
    </Heading>
  </Slide>,
  <Slide bgColor="secondary">
    <BlockQuote>
      <Quote>
        a higher-order component is a function that takes a component and returns a new component
      </Quote>
      <Cite>
        <Link
          href="https://facebook.github.io/react/docs/higher-order-components.html"
          textColor="quartenary"
        >
          Andrew Clark
        </Link>
      </Cite>
    </BlockQuote>
  </Slide>,
  <Slide bgColor="secondary" textColor="quartenary">
    <Heading caps size={1} textColor="primary" margin="0 0 1rem 0">
      HOC
    </Heading>
    <Layout>
      <Fill>
        <svg style={{ margin: "1rem" }} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
          <ellipse stroke="#000" ry="149" rx="149" cy="150" cx="150" strokeWidth="2" fill="#fff" />
        </svg>
      </Fill>
      <Fill>
        <svg style={{ margin: "1rem" }} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
          <polygon
            strokeWidth="2"
            stroke="#000"
            fill="#FFF"
            points="2,2 2,298 298,150"
            class="triangle"
          />
        </svg>
      </Fill>
      <Fill>
        <svg style={{ margin: "1rem" }} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
          <rect height="296" width="296" y="2" x="2" strokeWidth="2" stroke="#000" fill="#fff" />
          <ellipse stroke="#000" ry="125" rx="125" cy="150" cx="150" strokeWidth="2" fill="#fff" />
        </svg>
      </Fill>
    </Layout>
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/hoc.example")}
    ranges={[
      { loc: [0, 270], title: "Simple HOC" },
      {
        loc: [16, 18],
        note:
          "A Higher Order Function is a function that accepts a base component and returns a new wrapped component"
      },
      { loc: [0, 2], note: "Our simple component is just a header (it can be anything)" },
      {
        loc: [3, 15],
        note: "Our HOC is a simple wrapper class around the base passing both props and state"
      },
      { loc: [19, 23], note: "The returned wrapped component can be used like a normal component" }
    ]}
  />,
  <Slide transition={["fade"]} bgColor="black">
    <Heading size={3} lineHeight={1} textColor="white">
      React Router
    </Heading>
    <iframe
      src="https://codesandbox.io/embed/E9nqolNRg?view=preview"
      style={{
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0"
      }}
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    />
  </Slide>,
  <Slide bgColor="secondary">
    <Heading size={3} lineHeight={1} textColor="white">
      Simple HOC
    </Heading>
    <iframe
      src="https://codesandbox.io/embed/388m05mlkq"
      style={{
        width: "100%",
        minHeight: "500px",
        maxHeight: "100%",
        border: "0",
        bordeRadius: "4px",
        overflow: "hidden"
      }}
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    />
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-6.example")}
    ranges={[
      { loc: [0, 270], title: "fetchJokes HOC" },
      { loc: [17, 33], note: "Function takes a component & returns a component" },
      { loc: [28, 30], note: "returns WrappedComponent spreading props and state" },
      { loc: [33, 34], note: "Use the HOC function to wrap the Jokes component" },
      { loc: [35, 36], note: "Use the wrapped JokesContainer!" }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-7.example")}
    ranges={[
      { loc: [0, 270], title: "fetchResource HOC" },
      { loc: [17, 31], note: "Refactor further to extract the actual fetching" },
      {
        loc: [22, 25],
        note: "Invoke the `get` function passed to it and when that has resolved update the state"
      },
      {
        loc: [32, 36],
        note: "Pass in the `get` method that the HOC will use internally in its `componentDidMount`"
      },
      {
        loc: [37, 38],
        note: "Finally pass in the presentational component that'll be wrapped in the HOC!"
      },
      { loc: [39, 40], note: "And again... use the wrapped JokesContainer!" }
    ]}
  />,
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../assets/jokes-7-cat.example")}
    ranges={[
      { loc: [0, 270], title: "fetchResource Reuse!" },
      { loc: [32, 39], note: "Provide fetchResource with purrfect 😹 jokes!" }
    ]}
  />,
  <Slide maxHeight="100vh" maxWidth="90vw">
    <div>
      <a href="https://codesandbox.io/s/YE3GrJ0BY">
        <img alt="Edit Jokes 1" src="https://codesandbox.io/static/img/play-codesandbox.svg" />
      </a>
    </div>
    {/* <CatJokes /> */}
  </Slide>
];
