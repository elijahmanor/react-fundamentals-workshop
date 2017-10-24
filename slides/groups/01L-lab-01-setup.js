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
    <Slide
      id="lab-01"
      transition={["slide"]}
      bgColor="black"
      notes="You can even put notes on your slide. How awesome is that?"
    >
      <Heading textColor="quartenary" caps fit>
        Lab #01 - Setup Environment
      </Heading>
    </Slide>
    <Slide
      transition={["slide"]}
      bgColor="black"
      notes="You can even put notes on your slide. How awesome is that?"
    >
      <Heading textColor="quartenary" caps fit>
        Lab #01 - Setup Environment 2
      </Heading>
    </Slide>
  </SlideSet>
);
