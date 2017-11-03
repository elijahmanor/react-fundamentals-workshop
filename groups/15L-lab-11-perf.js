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
  <SlideSet key="lab-11">
    <Slide>
      <Markdown>
        {`
# Material

* [Performance](http://elijahmanor.com/talks/react-patterns-practices/#/42)
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
# Lab 11
## Performance
`}
      </Markdown>
    </Slide>
    <Slide>
      <Markdown>
        {`
## Perf Tools

[Profiling Components with the Chrome Performance Tab](https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-chrome-performance-tab)
`}
      </Markdown>
    </Slide>
  </SlideSet>
);
