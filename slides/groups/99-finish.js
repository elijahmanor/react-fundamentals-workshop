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
  <Slide bgColor="primary" bgImage={images.react} bgDarken={0.8}>
    <Heading size={1} fit caps lineHeight={1} textColor="secondary" margin="0 0 20px 0">
      Thank You!
    </Heading>
    <Heading size={1} fit lineHeight={1}>
      <Link href="http://bit.ly/react-fun" textColor="quartenary">
        http://bit.ly/react-fun
      </Link>
    </Heading>
    <pre style={{ textAlign: "left", fontSize: "4rem" }}>
      <Link
        textColor="tertiary"
        href="http://elijahmanor.com"
        style={{ display: "block", left: "10.5rem", position: "relative" }}
      >
        elijahmanor.com
      </Link>
      <Link
        textColor="tertiary"
        href="http://twitter.com/elijahmanor"
        style={{ display: "block", left: "8rem", position: "relative" }}
      >
        @elijahmanor
      </Link>
    </pre>
  </Slide>
];
