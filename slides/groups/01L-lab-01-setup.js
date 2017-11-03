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

* [What is React?](http://elijahmanor.com/talks/react-to-the-future/dist/#/slide/1/0)
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
# Lab 1
## Setup Your Local Environment
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
# Prerequisites

## Editor

* [Microsoft VSCode](https://code.visualstudio.com/)
* [GitHub Atom](https://atom.io/)

## Tooling

* [Git](https://www.linode.com/docs/development/version-control/how-to-install-git-on-mac-and-windows) or [GitHub Desktop](https://desktop.github.com/)
* [node](https://nodejs.org/en/download/)
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
\`\`\`
`}
      </Markdown>
    </Slide>
  </SlideSet>
);
