import React from "react";
import {
  BlockQuote,
  Cite,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  SlideSet,
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

export default (theme, images) => (
  <SlideSet key="lab-07">
    <Slide>
      <Markdown>
        {`
# Lab 7
## Render Props
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
## UserInfo Render Props

1. Build a UserInfo Render Props Component
2. Remove the getUserInfo HOC and replace with your UserInfo Component
`}
      </Markdown>
    </Slide>
  </SlideSet>
);
