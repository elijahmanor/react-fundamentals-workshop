import React from "react";
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

export default (theme, images) => [
  <Slide
    id="redux"
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Heading textColor="quartenary" caps fit>
      Redux https://css-tricks.com/learning-react-redux/
      https://codepen.io/stowball/post/a-dummy-s-guide-to-redux-and-thunk-in-react
      https://github.com/gaearon/redux-thunk http://redux.js.org/docs/basics/Actions.html
      http://redux.js.org/docs/advanced/AsyncActions.html
      https://github.com/zalmoxisus/redux-devtools-extension#usage
    </Heading>
  </Slide>
];
