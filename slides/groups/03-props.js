import React from "react";
import {
  BlockQuote,
  Cite,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
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

export default (theme, images) => [
  <Slide
    id="props"
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Heading textColor="quartenary" caps fit>
      Props
    </Heading>
  </Slide>,
  MarkdownSlides`
# Let's Get Dynamic

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre class="language-jsx language--clean language--small"><code>
const HelloWorld = (props) => {
  return &lt;div&gt;Hello {props.name}!&lt;/div&gt;;
};
HelloWorld.propTypes = {
  name: PropTypes.string.isRequired
};

ReactDOM.render(
  &lt;HelloWorld name="JavaScript" /&gt;,
  document.getElementById('root')
);
</code></pre>
  </div>
  <div class="Split-column Split-column--35">
    <iframe height='268' scrolling='no' src='//codepen.io/elijahmanor/embed/xGOmXg/?height=268&theme-id=0&default-tab=result' data-online='//codepen.io/elijahmanor/embed/xGOmXg/?height=268&theme-id=0&default-tab=result' data-offline='./pens/codepen_xGOmXg/index.html' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/xGOmXg/'>xGOmXg</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
    </iframe>
  </div>
</div>

---

# Using the Props Parameter

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre data-line="1-3,9" class="language-jsx language--clean language--small"><code>
const HelloWorld = (props) => {
  return &lt;div&gt;Hello {props.name}!&lt;/div&gt;;
};
HelloWorld.propTypes = {
  name: PropTypes.string.isRequired
};

ReactDOM.render(
  &lt;HelloWorld name="JavaScript" /&gt;,
  document.getElementById('root')
);
</code></pre>
  </div>
  <div class="Split-column Split-column--35">
    <p>9. You can pass read-only properties to a React component via its attributes.</p>
    <p>1-3. You can access this data with the 'props' parameter inside of a JavaScript Expression '{}'.</p>
  </div>
</div>

---

# Using Props with Destructuring

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre data-line="1-3" class="language-jsx language--clean language--small"><code>
const HelloWorld = ({ name }) => {
  return &lt;div&gt;Hello {name}!&lt;/div&gt;;
};
HelloWorld.propTypes = {
  name: PropTypes.string.isRequired
};

ReactDOM.render(
  &lt;HelloWorld name="JavaScript" /&gt;,
  document.getElementById('root')
);
</code></pre>
  </div>
  <div class="Split-column Split-column--35">
    <p>1-3. You can use ECMAScript 2015 (ES6) destructuring to pick off the <code>name</code> property from the <code>props</code> parameter</p>
  </div>
</div>

---

# Using Props in a Class

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre data-line="1,4" class="language-jsx language--clean language--small"><code>
class HelloWorld extends React.Component {
  render() {
    return (
      &lt;div&gt;Hello {this.props.name}!&lt;/div&gt;
    );
  }
};
HelloWorld.propTypes = {
  name: PropTypes.string.isRequired
};

ReactDOM.render(
  &lt;HelloWorld name="JavaScript" /&gt;,
  document.getElementById('root')
);
</code></pre>
  </div>
  <div class="Split-column Split-column--35">
    <p>1,3. When using a React class you can access 'props' off the 'this' implicit parameter.</p>
    <p>Feel free to use destructuring as well here... <pre class="language-js"><code>const { name } =
  this.props;</code></pre></p>
  </div>
</div>

---

# Prop Types

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre data-line="1,9-11" class="language-jsx language--clean language--small"><code>
import PropTypes from "prop-types";
class HelloWorld extends React.Component {
  render() {
    return (
      &lt;div&gt;Hello {this.props.name}!&lt;/div&gt;
    );
  }
};
HelloWorld.propTypes = {
  name: PropTypes.string.isRequired
};

ReactDOM.render(
  &lt;HelloWorld name="JavaScript" /&gt;,
  document.getElementById('root')
);
</code></pre>
  </div>
  <div class="Split-column Split-column--35">
    <p>1. In React 15.5+, import 'prop-types' instead of 'React.PropTypes' (migration [codemod](https://github.com/reactjs/react-codemod#react-proptypes-to-prop-types))</p>
    <p>8-10. Check the types of the 'props' during development with 'propTypes'.</p>
    <pre class="language-jsx language--clean language--small"><code>
array, bool, func, number,
object, string, node,
element, etc...</code></pre>
  </div>
</div>
`
];
