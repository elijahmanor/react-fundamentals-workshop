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
    id="events"
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Heading textColor="quartenary" caps fit>
      Event Handlers
    </Heading>
  </Slide>,
  MarkdownSlides`
# Bind Event Handlers: Bind

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre data-line="12" class="language-jsx language--clean language--small"><code>
class HelloWorld extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return &lt;div&gt;
      &lt;p&gt;Hello {this.state.count}!&lt;/p&gt;
      &lt;button onClick={this.handleClick.bind(this)}&gt;
        Click Me
      &lt;/button&gt;
    &lt;/div&gt;;
  }
}
</code></pre>
  </div>
  <div class="Split-column Split-column--30">
    <p>12. Manually binding event handlers can be slow, annoying, and verbose...</p>
    <p>Thankfully there are other alternatives</p>
  </div>
</div>

---

# Bind Event Handlers: Constructor

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre data-line="5,13" class="language-jsx language--clean language--small"><code>
class HelloWorld extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return &lt;div&gt;
      &lt;p&gt;Hello {this.state.count}!&lt;/p&gt;
      &lt;button onClick={this.handleClick}&gt;
        Click Me
      &lt;/button&gt;
    &lt;/div&gt;;
  }
}
</code></pre>
  </div>
  <div class="Split-column Split-column--30">
    <p>5. Do the binding once in the constructor</p>
    <p>13. Reference the prebinded event handler</p>
  </div>
</div>

---

# Bind Event Handlers: Property Initializer Syntax

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre data-line="3,9" class="language-jsx language--clean language--small"><code>
class HelloWorld extends React.Component {
  state = { count: 0 };
  handleClick: () => {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return &lt;div&gt;
      &lt;p&gt;Hello {this.state.count}!&lt;/p&gt;
      &lt;button onClick={this.handleClick}&gt;
        Click Me
      &lt;/button&gt;
    &lt;/div&gt;;
  }
}
</code></pre>
  </div>
  <div class="Split-column Split-column--30">
    <p>3. Use the experimental (stage 2) [Property Initializer Syntax](https://babeljs.io/docs/plugins/transform-class-properties/)</p>
    <p>9. Reference the prebinded event handler</p>
  </div>
</div>

---

# Bind Event Handlers: Inline

<div class="Split">
  <div class="Split-column Split-column--70">
    <pre data-line="9" class="language-jsx language--clean language--small"><code>
class HelloWorld extends React.Component {
  state = { count: 0 };
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return &lt;div&gt;
      &lt;p&gt;Hello {this.state.count}!&lt;/p&gt;
      &lt;button onClick={e => this.handleClick(e)}&gt;
        Click Me
      &lt;/button&gt;
    &lt;/div&gt;;
  }
}
</code></pre>
  </div>
  <div class="Split-column Split-column--30">
    <p>9. Add inline event handler passing along the event argument</p>
    <p>**NOTE**: This is not preferred as it creates new binding function on each render. Prefer approaches like Constructor or Property Initializer Syntax.</p>
  </div>
</div>  
`
];
