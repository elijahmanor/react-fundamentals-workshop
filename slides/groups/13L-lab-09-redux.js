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
# Material

* [Flux](http://elijahmanor.com/talks/react-to-the-future/dist/#/slide/6/0)
* [Redux](http://elijahmanor.com/talks/react-to-the-future/dist/#/slide/6/12)
* [Redux](http://elijahmanor.com/talks/react-patterns-practices/#/57)
* [Immutability](http://elijahmanor.com/talks/react-patterns-practices/#/53)
`}
      </Markdown>
    </Slide>

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
## Add Profile Reset Feature

1. Add onReset prop to Profile.js component & Icon that'll trigger it
2. Add onReset handler in App.js and dispatch resetUser user-action
3. Add a resetUser method to the user-actions.js file
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
## Add onReset prop to Profile.js component & Icon that'll trigger it

1. Add onReset prop
2. Add an Icon with class of Profile-reset right under the Profile-background
3. On click of the Icon trigger the onReset prop
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
## Add onReset handler in App.js and dispatch resetUser user-action

1. Add \`resetUser\` to your user-action import
2. Add onReset to your Profile component
3. Add a onReset method to the mapDispatchToProps function that will dispatch resetUser
`}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
## Add a resetUser method to the user-actions.js file

1. dispatch requestUser
2. call api.promptUser
3. on success dispatch receiveUser and pass the user
4. on error dispatch errorUser and pass the error

TIP: It'll look similar to the \`fetchUser\` action
`}
      </Markdown>
    </Slide>
  </SlideSet>
);
