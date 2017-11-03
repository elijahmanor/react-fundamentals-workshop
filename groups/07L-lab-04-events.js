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
  <SlideSet key="lab-04">
    <Slide>
      <Markdown>
        {`
# Lab 4
## Events
`}
      </Markdown>
    </Slide>
    <Slide>
      <Markdown>
        {`
## Add Bomb Support to Fuse

1. Add \`onClick\` bomb support to \`FuseActions\`
2. Allow \`Fuse\` to pass down \`onBomb\` to \`FuseActions\`
3. Allow \`Fuses\` to pass \`onBomb\` down to \`Fuse\`
4. Implement a simple \`Icon\` stateless functional react component
5. In \`App.js\` pass \`onBomb\` to \`Fuses\` and update state when triggered
6. Update the pattern library examples for \`Fuse.stories.js\`
`}
      </Markdown>
    </Slide>
  </SlideSet>
);
