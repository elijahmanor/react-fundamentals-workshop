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
  <SlideSet key="lab-05">
    <Slide>
      <Markdown>
        {`
# Lab 5
## Forms
`}
      </Markdown>
    </Slide>
    <Slide>
      <Markdown>
        {`
## Add a New Fuse Dialog

1. Build out simple Button.js stateless functional component
2. Build out complex Compose.js managed input React class component
3. Update Toolbar.js to support onNew prop triggered when Fuse button clicked
4. In App.js add showCompose state to control if Compose.js shows or not
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
## Build out simple \`Button.js\` stateless functional component

Needs to render a button with "Button" class and optionally a "is-disabled" class if \`disabled\` prop is passed
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
## Build Compose.js managed input React class component

1. The validation piece will dynamically append "Compose-validation--warn" (length >= 200 && length <= 256) or "Compose-validation--over" (length > 256)
2. If length is over, button should be disabled
3. When button is clicked trigger props.onCompose and pass message and user as payload

NOTE: Markup is on next slide...
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
## Build Compose.js managed input React class component

\`\`\`
<header class="Compose-header">
  <h3>Compose New Fuse</h3>		
  <button class="Compose-close" onClick={()=>{}}>		
    <i class="fa fa-times-circle" aria-hidden="true" />		
  </button>		
</header>		
<div class="Compose-main">		
  <textarea		
    class="Compose-text"		
    value=""		
    onChange={()=>{}}		
    ref={()=>{}}		
  />		
</div>		
<div class="Compose-actions">		
  <div class="Compose-validation Compose-validation--warn"></div>		
  <Button disabled={false} onClick={()=>{}}>		
    Fuse		
  </Button>		
</div>
\`\`\`
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
## Update Toolbar.js to support onNew prop triggered when Fuse button clicked

Also add PropTypes and defaultProps
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
## In App.js add showCompose state to control if Compose.js shows or not

1. When Toolbar onNew is triggered, change showCompose state to true
2. When Compose onClose is triggered, change showCompose state to false
3. When Compose onCompose is triggered, call addFuse and fetchFuses on Promise.resolve, then close dialog

\`\`\`
addFuse({ message, user }).then(this.fetchFuses);
\`\`\`
`}
      </Markdown>
    </Slide>
  </SlideSet>
);
