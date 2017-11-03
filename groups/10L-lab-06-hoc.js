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
  <SlideSet key="lab-06">
    <Slide>
      <Markdown>
        {`
# Material

* [HOCs](http://elijahmanor.com/talks/react-to-the-future/dist/#/slide/2/48)
* [HOCs](http://elijahmanor.com/talks/react-patterns-practices/#/15)
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
# Lab 6
## HOC
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
## Explosions and Fetching Fuses

1. Build a randomExplosion HOC and wrap Icon in FuseActions.js
2. Build a getUserInfo HOC and wrap Profile in App.js 
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
## Build a randomExplosion HOC and wrap Icon in FuseActions.js: Part 1

* Your HOC will wrap the [react-sound](https://github.com/leoasis/react-sound) component 
* Randomly when the button is going active make a Blow-up sound AND add "is-explode" class to component
* Use the lodash \`random\` method for your number 0-100 (>= 50 is explosion worthy)
* Regardless, call the parent onClick prop if it exists
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
## Build a randomExplosion HOC and wrap Icon in FuseActions.js: Part 2

Then in FuseActions wrap the Icon with your HOC and use it instead of Icon for the Bomb
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
## Build a getUserInfo HOC and wrap Profile in App.js 

1. This HOC will have componentDidMount and do the getUser fetch inside
2. update the state when the promise has succeeded
3. and then call the prop.onLoad callback passing the user as a payload

Then in App.js wrap the Profile with your HOC, add an onLoad handlers that will setState to the user
`}
      </Markdown>
    </Slide>
  </SlideSet>
);
