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
  <SlideSet key="lab-02">
    <Slide>
      <Markdown>
        {`
# Lab 2
## Props
`}
      </Markdown>
    </Slide>
    <Slide>
      <Markdown>
        {`
## Build \`Fuse\` React Stateless Functional Component

1. Take raw HTML/CSS and build \`Fuse.js\` React Component
2. Add \`propTypes\` to React Component
3. Use Example code for Gravatar & date formatting
4. Make two Pattern Library stories for \`Fuse.stories.js\`
5. Verify in Pattern Library
6. Run Unit Tests and modify \`Fuse.js\` until they all pass
`}
      </Markdown>
    </Slide>
    <Slide>
      <Markdown>
        {`
## Take the following HTML and build a \`Fuse.js\` React Component

\`\`\`
<div class="Fuse">
  <img class="Fuse-avatar" alt="" src="" />
  <article class="Fuse-body">
    <header class="Fuse-header">
      <div class="Fuse-fullName"></div>
      <span>&nbsp;</span>
      <div class="Fuse-userName"></div>
      <span>&nbsp;—&nbsp;</span>
      <div class="Fuse-date" title=""></div>
    </header>
    <div class="Fuse-message"></div>
    <div class="Fuse-actions">
      <button class="Fuse-action">
        <i class="fa fa-comment-o" aria-hidden="true" />
      </button>
      <button class="Fuse-action">
        <i class="a fa-bomb is-active" aria-hidden="true" />
      </button>
    </div>
  </article>
</div>
\`\`\`
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
## Add propTypes

id, date, userName, fullName, avatar, email, message, bomb

[React PropTypes Reference](https://reactjs.org/docs/typechecking-with-proptypes.html)
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
## Example snippets for Gravatar & date formatting

\`\`\`
import md5 from "md5";
import { format, formatDistanceStrict } from "date-fns";

const email = "john.smith@gmail.com";
const url = \`https://www.gravatar.com/avatar/$\{md5(email)\}\`;
const title = format(date, "LLL");
const relativeTime = formatDistanceStrict(date, new Date());
\`\`\`
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
## Add two Pattern Library stories (\`Fuse.stories.js\`)

one for using avatar and one for email

Make sure to use [Storybook Knobs](https://github.com/storybooks/storybook/tree/master/addons/knobs)
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
## Verify in Pattern Library

\`\`\`
$ npm run storybook
\`\`\`

open [http://localhost:3001](http://localhost:3001)
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
## Run unit tests and modify \`Fuse.js\` until they all pass

\`\`\`
$ npm test
\`\`\`
`}
      </Markdown>
    </Slide>
  </SlideSet>
);
