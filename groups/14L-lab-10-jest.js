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
  <SlideSet key="lab-01">
    <Slide>
      <Markdown>
        {`
# Material

* [Jest]()
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
# Lab 10
## Jest
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
## Add 2 New Unit Tests to FuseActions.test.js

1. Add a test for triggering the onReply
1. Add a test for triggering the onBomb
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
## Reference Material

* [Jest Expect](https://jest-bot.github.io/jest/docs/expect.html)
* [Enzyme API](http://airbnb.io/enzyme/docs/api/)
`}
      </Markdown>
    </Slide>
  </SlideSet>
);
