// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Layout,
  Fit,
  Fill,
  Link
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  react: require("../assets/react.jpg"),
  theManorFamily: require("../assets/the-manor-family.jpg"),
  cross: require("../assets/logo-cross.png"),
  egghead: require("../assets/logo-egghead.png"),
  leankit: require("../assets/logo-leankit.png"),
  mvp: require("../assets/logo-mvp.png")
};

preloader(images);

const theme = createTheme(
  {
    primary: "black",
    secondary: "#66DBF9",
    tertiary: "#FFF7D3",
    quartenary: "#DEF7FD"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const Group = {
  introduction: require("../groups/00-introduction.js").default,
  whatWhereWhy: require("../groups/01-what-where-why.js").default,
  lab01: require("../groups/01L-lab-01-setup.js").default,
  components: require("../groups/02-components.js").default,
  props: require("../groups/03-props.js").default,
  lab02: require("../groups/03L-lab-02-props.js").default,
  state: require("../groups/04-state.js").default,
  lifecycle: require("../groups/05-lifecycle.js").default,
  lists: require("../groups/06-lists.js").default,
  lab03: require("../groups/06L-lab-03-state.js").default,
  eventHandlers: require("../groups/07-event-handlers.js").default,
  lab04: require("../groups/07L-lab-04-events.js").default,
  references: require("../groups/08-references.js").default,
  forms: require("../groups/09-forms.js").default,
  lab05: require("../groups/09L-lab-05-forms.js").default,
  hoc: require("../groups/10-hoc.js").default,
  lab06: require("../groups/10L-lab-06-hoc.js").default,
  renderProps: require("../groups/11-render-props.js").default,
  lab07: require("../groups/11L-lab-07-render-props.js").default,
  styles: require("../groups/12-styles.js").default,
  lab08: require("../groups/12L-lab-08-styled-components.js").default,
  redux: require("../groups/13-redux.js").default,
  lab09: require("../groups/13L-lab-09-redux.js").default,
  jest: require("../groups/14-jest.js").default,
  lab10: require("../groups/14L-lab-10-jest.js").default,
  performance: require("../groups/15-performance.js").default,
  lab11: require("../groups/15L-lab-11-performance.js").default,
  universalJavaScript: require("../groups/16-universal-javascript.js").default
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress="number">
        {Group.introduction(theme, images)}
        {Group.whatWhereWhy(theme, images)}
        {Group.lab01(theme, images)}
        {Group.components(theme, images)}
        {Group.props(theme, images)}
        {Group.lab02(theme, images)}
        {Group.state(theme, images)}
        {Group.lifecycle(theme, images)}
        {Group.lists(theme, images)}
        {Group.lab03(theme, images)}
        {Group.eventHandlers(theme, images)}
        {Group.lab04(theme, images)}
        {Group.references(theme, images)}
        {Group.forms(theme, images)}
        {Group.lab05(theme, images)}
        {Group.hoc(theme, images)}
        {Group.lab06(theme, images)}
        {Group.renderProps(theme, images)}
        {Group.lab07(theme, images)}
        {Group.styles(theme, images)}
        {Group.lab08(theme, images)}
        {Group.redux(theme, images)}
        {Group.lab09(theme, images)}
        {Group.jest(theme, images)}
        {Group.lab10(theme, images)}
        {Group.performance(theme, images)}
        {Group.lab11(theme, images)}
        {Group.universalJavaScript(theme, images)}
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <BlockQuote>
            <Quote textColor="secondary">Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
