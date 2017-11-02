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
    id="state"
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Heading textColor="quartenary" caps fit>
      State
    </Heading>
  </Slide>,
  MarkdownSlides`
  ---
  
  # Let's Look at State
  
  <div class="Split">
    <div class="Split-column Split-column--70">
      <pre class="language-jsx language--clean language--small"><code>
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
  
  ReactDOM.render(
    &lt;HelloWorld /&gt;,
    document.getElementById('root')
  );
  </code></pre>
    </div>
    <div class="Split-column Split-column--30">
      <iframe height='268' scrolling='no' src='//codepen.io/elijahmanor/embed/aOZXQa/?height=268&theme-id=0&default-tab=result' data-online='//codepen.io/elijahmanor/embed/aOZXQa/?height=268&theme-id=0&default-tab=result' data-offline='./pens/codepen_aOZXQa/index.html' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/aOZXQa/'>aOZXQa</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
      </iframe>
    </div>
  </div>
  
  ---
  
  # Default State and Expression
  
  <div class="Split">
    <div class="Split-column Split-column--70">
      <pre data-line="4,11" class="language-jsx language--clean language--small"><code>
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
  
  ReactDOM.render(
    &lt;HelloWorld /&gt;,
    document.getElementById('root')
  );
  </code></pre>
    </div>
    <div class="Split-column Split-column--30">
      <p>4. Provide default 'state' by assigning object from 'contructor'.</p>
      <p>11. Access component state via the 'this.state' object.</p>
    </div>
  </div>
  
  ---
  
  # Updating State
  
  <div class="Split">
    <div class="Split-column Split-column--70">
      <pre data-line="7,12" class="language-jsx language--clean language--small"><code>
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
  
  ReactDOM.render(
    &lt;HelloWorld /&gt;,
    document.getElementById('root')
  );
  </code></pre>
    </div>
    <div class="Split-column Split-column--30">
      <p>12. Declaratively wire-up _delegated_ Event Handlers via attributes.</p>
      <p>**NOTE**: Make sure to 'bind' event handler!!!</p>
      <p>7. Update state by calling 'this.setState' passing in difference.</p>
    </div>
  </div>
  
  ---
  
  # Déjà Vu
  
  [![](./img/iamdeveloper-onclick.png)](https://twitter.com/iamdevloper/status/567363727176253440)
  
  ---
  
  # Overloaded setState
  
  <div class="Split">
    <div class="Split-column Split-column--70">
      <pre data-line="7-9" class="language-jsx language--clean language--small"><code>
  class HelloWorld extends React.Component {
    constructor() {
      super();
      this.state = { count: 0 };
    }
    handleClick() {
      this.setState(function(state, props) {
        return { count: state.count + 1 };
      });
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
      <p>7-9. As of React v0.13+ you can pass a callback function to 'this.setState'. React will pass the current 'state' & 'props' and you return the new 'state'.</p>
    </div>
  </div>
  
  ---
  
  # Public Class Field
  
  <div class="Split">
    <div class="Split-column Split-column--70">
      <pre data-line="2" class="language-jsx language--clean language--small"><code>
  class HelloWorld extends React.Component {
    state = { count: 0 }; // stage 2
    handleClick() {
      this.setState(function(state, props) {
        return { count: state.count + 1 };
      });
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
      <p>2. Instead of using a contructor, you can use a public class field</p>
      <pre class="language-javascript language--clean language--small"><code>
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  </code></pre>
    </div>
  </div>
  `
];
