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
    id="refs"
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Heading textColor="quartenary" caps fit>
      References
    </Heading>
  </Slide>,
  MarkdownSlides`
# Reference to Children Nodes

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre class="language-jsx language--clean language--small"><code>
class HelloWorld extends React.Component {
  /\* ... constructor ... \*/
  componentDidMount() {
    this.count.textContent = '42';
  }
  /\* ... handleClick ... \*/
  render() {
    return &lt;div&gt;
      &lt;p&gt;Hello &lt;span ref={ c => this.count = c }&gt;
        {this.state.count}
      &lt;/span&gt;!&lt;/p&gt;
      &lt;button onClick={this.handleClick.bind(this)}&gt;
        Click Me
      &lt;/button&gt;
    &lt;/div&gt;;
  }
}
</code></pre>
  </div>
  <div class="Split-column Split-column--30">
    <iframe height='268' scrolling='no' src='//codepen.io/elijahmanor/embed/waWOQy/?height=268&theme-id=0&default-tab=result' data-online='//codepen.io/elijahmanor/embed/waWOQy/?height=268&theme-id=0&default-tab=result' data-offline='./pens/codepen_waWOQy/index.html' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/waWOQy/'>waWOQy</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
    </iframe>
  </div>
</div>

---

# Reference to Children Nodes

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre data-line="4,9" class="language-jsx language--clean language--small"><code>
class HelloWorld extends React.Component {
  /\* ... constructor ... \*/
  componentDidMount() {
    this.count.textContent = '42';
  }
  /\* ... handleClick ... \*/
  render() {
    return &lt;div&gt;
      &lt;p&gt;Hello &lt;span ref={ c => this.count = c }&gt;
        {this.state.count}
      &lt;/span&gt;!&lt;/p&gt;
      &lt;button onClick={this.handleClick.bind(this)}&gt;
        Click Me
      &lt;/button&gt;
    &lt;/div&gt;;
  }
}
</code></pre>
  </div>
  <div class="Split-column Split-column--30">
    <p>9. Add 'ref' attribute to element, 'ref' callback receives the DOM element as argument.</p>
    <p>4. You can access saved DOM element elsewhere to update it.</p>
    <p>CAREFUL: You're working outside of React!</p>
  </div>
</div>

---

# Functional Component Gotcha

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre data-line="1,5,9-10" class="language-jsx language--clean language--small"><code>
const FunctionalComponent = () => <h1>Hello, world!</h1>;

class ClassComponent extends React.Component {
  componentDidMount() {
    console.log( "componentDidMount", this.funcComp );
  }
  render() {
    return (
      &lt;FunctionalComponent
        ref={ c => this.funcComp = c } /&gt;
    );
  }
}
</code></pre>
  </div>
  <div class="Split-column Split-column--30">
    <p>1. functional components don't have instances!</p>
    <p>9-10. component passed to 'ref' will be 'null'</p>
    <p>5. therefore, 'console.log' will be 'null'</p>
  </div>
</div>

---

# Current DOM Node

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre class="language-jsx language--clean language--small"><code>
class HelloWorld extends React.Component {
  /\* ... constructor ... \*/
  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    node.style.backgroundColor = "red";
  }
  /\* ... handleClick ... \*/
  render() {
    return &lt;div&gt;
      &lt;p&gt;Hello &lt;span ref={ c => this.count = c }&gt;
        {this.state.count}
      &lt;/span&gt;!&lt;/p&gt;
      &lt;button onClick={this.handleClick.bind(this)}&gt;
        Click Me
      &lt;/button&gt;
    &lt;/div&gt;;
  }
}
</code></pre>
  </div>
  <div class="Split-column Split-column--30">
    <iframe height='268' scrolling='no' src='//codepen.io/elijahmanor/embed/eWbJZv/?height=268&theme-id=0&default-tab=result' data-online='//codepen.io/elijahmanor/embed/eWbJZv/?height=268&theme-id=0&default-tab=result' data-offline='./pens/codepen_waWOQy/index.html' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/waWOQy/'>waWOQy</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
    </iframe>
  </div>
</div>

---

# Legacy References

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre data-line="4,10-12" class="language-jsx language--clean language--small"><code>
class HelloWorld extends React.Component {
  /\* ... constructor ... \*/
  componentDidMount() {
    this.refs.count.textContent = '42';
  }
  /\* ... handleClick ... \*/
  render() {
    return (
      &lt;div&gt;
        &lt;p&gt;Hello &lt;span ref="count"&gt;
          {this.state.count}
        &lt;/span&gt;!&lt;/p&gt;
        &lt;button onClick={this.handleClick.bind(this)}&gt;
          Click Me
        &lt;/button&gt;
      &lt;/div&gt;
    );
  }
}
</code></pre>
  </div>
  <div class="Split-column Split-column--30">
    <p>10-12. String refs are [deprecated](https://facebook.github.io/react/docs/refs-and-the-dom.html#legacy-api-string-refs) and are likely to be removed in a future release</p>
    <p>1. References are held off the 'refs' property on the instance</p>
  </div>
</div>
`
];
