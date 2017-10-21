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
  Link,
  MarkdownSlides
} from "spectacle";
import ReactModal from "react-modal";
import mousetrap from "mousetrap";
import Select from "react-select";
import "react-select/dist/react-select.css";
import _ from "lodash";

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

/*
https://github.com/elijahmanor/elijahmanor.github.com/tree/master/talks/react-to-the-future/src/md
require('!raw!../../md/gotchas.md')
require('!raw!../../md/flux.md')
require('!raw!../../md/node-modules.md')
require('!raw!../../md/npm-scripts.md')
require('!raw!../../md/resources.md')
*/

const Groups = {
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
  universalJavaScript: require("../groups/16-universal-javascript.js").default,
  conclusion: require("../groups/99-conclusion.js").default
};

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGroups: props.selectedGroups
    };
  }
  handleUpdate = () => {
    this.props.onUpdate(this.state.selectedGroups);
  };
  handleChange = e => {
    const { checked, value } = e.target;
    selectedGroups = checked ? [...selectedGroups, value] : _.without(selectedGroups, value);
    this.setState({ selectedGroups });
  };
  render() {
    const { isOpen, groupOptions, onClose } = this.props;
    const { selectedGroups } = this.state;

    return (
      <ReactModal isOpen={isOpen} contentLabel="Basic Modal">
        <h1>This is a Modal</h1>

        <form>
          {groupOptions.map(group => (
            <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                  value={group}
                  checked={selectedGroups.some(g => g === group)}
                  onChange={this.handleChange}
                />
                {group}
              </label>
            </div>
          ))}
        </form>

        <button onClick={this.handleUpdate}>Update</button>
        <button onClick={onClose}>Close</button>
      </ReactModal>
    );
  }
}

const Help = ({ isOpen, onClose }) => {
  return (
    <ReactModal isOpen={isOpen} contentLabel="Basic Modal">
      <h1>Controls</h1>
      <table>
        <thead>
          <tr>
            <th>Key Combination</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Right Arrow</td>
            <td>Next Slide</td>
          </tr>
          <tr>
            <td>Left Arrow</td>
            <td>Previous Slide</td>
          </tr>
          <tr>
            <td>Space</td>
            <td>Next Slide</td>
          </tr>
          <tr>
            <td>Shift+Space</td>
            <td>Previous Slide</td>
          </tr>
          <tr>
            <td>Alt/Option + O</td>
            <td>Toggle Overview Mode</td>
          </tr>
          <tr>
            <td>Alt/Option + P</td>
            <td>Toggle Presenter Mode</td>
          </tr>
          <tr>
            <td>Alt/Option + T</td>
            <td>Toggle Timer in Presenter Mode</td>
          </tr>
          <tr>
            <td>Alt/Option + A</td>
            <td>Start autoplay (if enabled)</td>
          </tr>
        </tbody>
      </table>
      <button onClick={onClose}>Close</button>
    </ReactModal>
  );
};

const groupOptions = Object.keys(Groups);
let selectedGroups = window.localStorage.getItem("selectedGroups");
if (selectedGroups) {
  selectedGroups = JSON.parse(selectedGroups);
} else {
  selectedGroups = groupOptions;
}

export default class Presentation extends React.Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
      isHelpOpen: false,
      selectedGroups
    };
  }
  componentWillMount() {
    mousetrap.bind("m", () => this.setState({ isMenuOpen: true }));
    mousetrap.bind("?", () => this.setState({ isHelpOpen: true }));
    mousetrap.bind("esc", () => this.setState({ isMenuOpen: false, isHelpOpen: false }));
  }
  componentWillUnmount() {
    mousetrap.unbind("m");
    mousetrap.unbind("?");
    mousetrap.unbind("esc");
  }
  handleOnClose = () => {
    this.setState({ isMenuOpen: false, isHelpOpen: false });
  };
  handleOnUpdate = selectedGroups => {
    window.localStorage.setItem("selectedGroups", JSON.stringify(selectedGroups));
    window.location.reload();
  };
  render() {
    const { isMenuOpen, isHelpOpen, selectedGroups } = this.state;

    return (
      <div>
        <Deck transition={["slide"]} transitionDuration={500} theme={theme} progress="number">
          {selectedGroups.map(selectedGroup => Groups[selectedGroup](theme, images))}
        </Deck>
        <Menu
          isOpen={isMenuOpen}
          groupOptions={groupOptions}
          selectedGroups={selectedGroups}
          onUpdate={this.handleOnUpdate}
          onClose={this.handleOnClose}
        />
        <Help isOpen={isHelpOpen} onClose={this.handleOnClose} />
      </div>
    );
  }
}

/*
          {Groups.introduction(theme, images)}
          {Groups.whatWhereWhy(theme, images)}
          {Groups.lab01(theme, images)}
          {Groups.components(theme, images)}
          {Groups.props(theme, images)}
          {Groups.lab02(theme, images)}
          {Groups.state(theme, images)}
          {Groups.lifecycle(theme, images)}
          {Groups.lists(theme, images)}
          {Groups.lab03(theme, images)}
          {Groups.eventHandlers(theme, images)}
          {Groups.lab04(theme, images)}
          {Groups.references(theme, images)}
          {Groups.forms(theme, images)}
          {Groups.lab05(theme, images)}
          {Groups.hoc(theme, images)}
          {Groups.lab06(theme, images)}
          {Groups.renderProps(theme, images)}
          {Groups.lab07(theme, images)}
          {Groups.styles(theme, images)}
          {Groups.lab08(theme, images)}
          {Groups.redux(theme, images)}
          {Groups.lab09(theme, images)}
          {Groups.jest(theme, images)}
          {Groups.lab10(theme, images)}
          {Groups.performance(theme, images)}
          {Groups.lab11(theme, images)}
          {Groups.universalJavaScript(theme, images)}
          {Groups.conclusion(theme, images)}

*/
