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
  <SlideSet key="lab-08">
    <Slide>
      <Markdown>
        {`
# Lab 8
## Styled Components
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
## Rewrite the Button.js component to use styled-components

* You don't need the Button.css anymore, but use it as reference
* The JS for Button.js will be completely different
* Use [styled-components](https://www.styled-components.com/) as a resource
* You can also use [polished](https://polished.js.org/) to help you generate colors
* Test your results in the Pattern Library
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
## Example snippets you could use

\`\`\`
import styled from "styled-components";
import { darken, modularScale } from "polished";

const SECTION_BG = "white";
const BUTTON_COLOR = "#95c83e";
const dark = darken(0.1, BUTTON_COLOR);
const darker = darken(0.2, BUTTON_COLOR);
const darkest = darken(0.3, BUTTON_COLOR);
\`\`\`
`}
      </Markdown>
    </Slide>
  </SlideSet>
);
