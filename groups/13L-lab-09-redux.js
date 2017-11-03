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
  <SlideSet key="lab-09">
    <Slide>
      <Markdown>
        {`
# Lab 9
## Redux
`}
      </Markdown>
    </Slide>
    <Slide>
      <Markdown>
        {`
## \`react-fundamentals-workshop\`

\`\`\`shell
> git clone https://github.com/elijahmanor/react-fundamentals-workshop.git
> cd react-fundamentals-workshop
> npm run setup     # checks environment
> npm start         # open to localhost:3000
> npm run storybook # open to localhost:3001
> npm run slides    # open to localhost:3002
\`\`\`
`}
      </Markdown>
    </Slide>
  </SlideSet>
);
