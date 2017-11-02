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

const Groups = {
  g01start: require("../groups/00-start.js").default,
  g02what: require("../groups/01-what.js").default,
  g03lab01: require("../groups/01L-lab-01-setup.js").default,
  g04comps: require("../groups/02-comps.js").default,
  g05props: require("../groups/03-props.js").default,
  g06lab02: require("../groups/03L-lab-02-props.js").default,
  g07state: require("../groups/04-state.js").default,
  g08life: require("../groups/05-life.js").default,
  g09lists: require("../groups/06-lists.js").default,
  g10lab03: require("../groups/06L-lab-03-state.js").default,
  g11events: require("../groups/07-events.js").default,
  g12lab04: require("../groups/07L-lab-04-events.js").default,
  g13refs: require("../groups/08-refs.js").default,
  g14forms: require("../groups/09-forms.js").default,
  g15lab05: require("../groups/09L-lab-05-forms.js").default,
  g16hoc: require("../groups/10-hoc.js").default,
  g17lab06: require("../groups/10L-lab-06-hoc.js").default,
  g18renderProps: require("../groups/11-render-props.js").default,
  g19lab07: require("../groups/11L-lab-07-render-props.js").default,
  g20styles: require("../groups/12-styles.js").default,
  g21lab08: require("../groups/12L-lab-08-styled-components.js").default,
  g22redux: require("../groups/13-redux.js").default,
  g23lab09: require("../groups/13L-lab-09-redux.js").default,
  g24jest: require("../groups/14-jest.js").default,
  g25lab10: require("../groups/14L-lab-10-jest.js").default,
  g26perf: require("../groups/15-perf.js").default,
  g27lab11: require("../groups/15L-lab-11-perf.js").default,
  g28universal: require("../groups/16-universal.js").default,
  g29finish: require("../groups/99-finish.js").default
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
    selectedGroups.sort();
    this.setState({ selectedGroups });
  };
  render() {
    const { isOpen, groupOptions, onClose } = this.props;
    const { selectedGroups } = this.state;

    return (
      <ReactModal
        isOpen={isOpen}
        contentLabel="Basic Modal"
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)"
          },
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "75%",
            width: "75%",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px"
          }
        }}
      >
        <h1>This is a Modal</h1>
        <form style={{ display: "flex", flexWrap: "wrap" }}>
          {groupOptions.map(group => (
            <label key={group} style={{ minWidth: "20rem" }}>
              <input
                type="checkbox"
                value={group}
                checked={selectedGroups.some(g => g === group)}
                onChange={this.handleChange}
              />&nbsp;{group}
            </label>
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
  selectedGroups = ["g13refs", "g14forms", "g15lab05"];
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
