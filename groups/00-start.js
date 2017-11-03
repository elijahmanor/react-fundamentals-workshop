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
  <SlideSet key="start">
    <Slide transition={["fade"]} bgImage={images.react} bgDarken={0.8}>
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        React
      </Heading>
      <Heading size={1} fit caps lineHeight={1} textColor="tertiary" margin="0 0 20px 0">
        Fundamentals Workshop
      </Heading>
      <Layout>
        <Fill>
          <Heading size={1} fit lineHeight={1}>
            <Link href="http://bit.ly/react-fun" margin="0 10px 0 0" textColor="quartenary">
              bit.ly/react-fun
            </Link>
          </Heading>
        </Fill>
        <Fill>
          <Heading size={1} fit lineHeight={1}>
            <Link href="http://twitter.com/elijahmanor" margin="0 0 10px 0" textColor="quartenary">
              by @elijahmanor
            </Link>
          </Heading>
        </Fill>
      </Layout>
    </Slide>
    <Slide id="aboutme" notes="You can even put notes on your slide. How awesome is that?">
      <Heading caps fit>
        Elijah Manor
      </Heading>
      <Layout>
        <Fill>
          <Image src={images.cross} width="50%" margin="0" />
          <Image src={images.leankit} width="50%" margin="0" />
          <Image src={images.mvp} width="50%" margin="-8px 0 0 0" />
          <Image src={images.egghead} width="50%" margin="-8px 0 0 0" />
        </Fill>
        <Fill>
          <Image src={images.theManorFamily} width="100%" margin="0" />
        </Fill>
      </Layout>
    </Slide>
    <Slide id="navigation" notes="You can even put notes on your slide. How awesome is that?">
      <Heading textColor="quartenary" caps fit>
        Navigation
      </Heading>
      <Heading textAlign="left" size={6} caps textColor="tertiary" width="50%">
        ➡️ to go to the next slide
      </Heading>
      <Heading textAlign="left" size={6} caps textColor="tertiary" width="50%">
        ⬅️ to go to the previous slide
      </Heading>
      {/* <Heading textAlign="left" size={6} caps textColor="tertiary" width="50%">
        ⬇️ to go down in a code slide
      </Heading>
      <Heading textAlign="left" size={6} caps textColor="tertiary" width="50%">
        ⬆️ to go up in a code slide
      </Heading> */}
    </Slide>
    <Slide>
      <Heading size={2} textColor="tertiary" caps>
        09am - 10am
      </Heading>
      <List>
        <ListItem>What is React?</ListItem>
        <ListItem>Lab #1 - Setup Environment</ListItem>
        <ListItem>React Components</ListItem>
        <ListItem>Passing Props</ListItem>
        <ListItem>Lab #2 - Props</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading size={2} textColor="tertiary" caps>
        10am - 11am
      </Heading>
      <List>
        <ListItem>Let's Look at State</ListItem>
        <ListItem>Component Lifecycle</ListItem>
        <ListItem>Dealing with Lists</ListItem>
        <ListItem>It's Just JavaScript</ListItem>
        <ListItem>Lab #3 - State</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading size={2} textColor="tertiary" caps>
        11am - 12pm
      </Heading>
      <List>
        <ListItem>Bind Event Handlers</ListItem>
        <ListItem>Lab #4 - Events</ListItem>
        <ListItem>Reference to Children Nodes</ListItem>
        <ListItem>Forms</ListItem>
        <ListItem>Lab #5 - Forms and Refs</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading size={2} textColor="tertiary" caps>
        12pm - 01pm
      </Heading>
      <List>
        <ListItem>Lunch</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading size={2} textColor="tertiary" caps>
        01pm - 02pm
      </Heading>
      <List>
        <ListItem>HOC</ListItem>
        <ListItem>Lab #6 - HOC</ListItem>
        <ListItem>Render Props</ListItem>
        <ListItem>Lab #7 - Render Props</ListItem>
        <ListItem>Styles</ListItem>
        <ListItem>Lab #8 - Styled Components</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading size={2} textColor="tertiary" caps>
        02pm - 03pm
      </Heading>
      <List>
        <ListItem>Redux</ListItem>
        <ListItem>Lab #9 - Redux</ListItem>
        <ListItem>Unit Testing</ListItem>
        <ListItem>Lab #10 - Unit Testing</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading size={2} textColor="tertiary" caps>
        03pm - 04pm
      </Heading>
      <List>
        <ListItem>Universal JavaScript</ListItem>
        <ListItem>Performance</ListItem>
        <ListItem>Lab #11 - Performance</ListItem>
      </List>
    </Slide>
  </SlideSet>
);
