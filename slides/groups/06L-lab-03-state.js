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
  <SlideSet key="lab-03">
    <Slide>
      <Markdown>
        {`
# Material

* [State](http://elijahmanor.com/talks/react-to-the-future/dist/#/slide/2/18)
* [Component Lifecycle](http://elijahmanor.com/talks/react-to-the-future/dist/#/slide/2/28)
* [Lists](http://elijahmanor.com/talks/react-to-the-future/dist/#/slide/2/39)
* [Terminology](http://elijahmanor.com/talks/react-patterns-practices/#/9)
* [Terminology](http://elijahmanor.com/talks/react-patterns-practices/#/14)
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
# Lab 3
## State
`}
      </Markdown>
    </Slide>
    <Slide>
      <Markdown>
        {`
## Build \`Fuses\` & Fetch List into State

1. Build the \`Fuses.js\` React Component
2. Add \`Fuses.stories.js\` to the Pattern Library
3. Fetch Fuses in App.js and pass state to Fuses component
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
## Build the \`Fuses.js\` React Component

You'll need to map over the passed array of fuses and render the \`Fuse.js\` component from the previous lab

Note: Make sure if a className is passed to you that you'll add it the root element

\`\`\`
<div className="Fuses someOtherClassNamePassedFromParent">
  <Fuse />
  <Fuse />
  <Fuse />
</div>
\`\`\`
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
## Add \`Fuses.stories.js\` to the Pattern Library

Copy the \`Fuse.stories.js\` and base example on that

Feel free to use faker.js and/or lodash to create test data (or create manually)
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
## Fetch Fuses in App.js and pass state to Fuses component

1. Import the Fuses component in \`App.js\`
2. Fetch Fuses using the service (see code snippet)
3. Update State once promise has resolved (similar to \`getUser\`)
4. In the render pass the fuses state to the Fuses component as a prop

\`\`\`
import { getFuses } from "../../services/fuse";
\`\`\`
`}
      </Markdown>
    </Slide>
  </SlideSet>
);
