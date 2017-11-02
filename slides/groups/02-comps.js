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
    id="components"
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Heading textColor="quartenary" caps fit>
      Components
    </Heading>
  </Slide>,
  MarkdownSlides`
# Components

---

# State Machines

> ## Components are Just State Machines

> React thinks of UIs as simple state machines. By thinking of a UI as being in various states and rendering those states, it's easy to keep your UI consistent.

> In React, you simply update a component's state, and then render a new UI based on this new state. React takes care of updating the DOM for you in the most efficient way. --[Interactivity and Dynamic UIs](https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html#components-are-just-state-machines)

---

# How Do They Relate to Angular Directives?

\`\`\`
var module = angular.module('directiveModule');
module.directive('fakeReactComponent', function () {
  return {
    restrict: 'E',    // Element Restricted
    scope: {},        // Isolate Scope
    transclude: true, // Transcluded
    template: '&lt;div class="ReactComponent"&gt;' +
      '&lt;ng-transclude&gt;&lt;/ng-transclude&gt;' +
    '&lt;/div&gt;'
  };
});
\`\`\`

\`\`\`
&lt;fake-react-component&gt;
Hello World!
&lt;/fake-react-component&gt;
\`\`\`

* Element Restricted (element, not attribute)
* Isolate Scoped<br/> (no inherit parent scope)
* Transcluded Directive (yield template inside)

---

# Okay, Okay

<div class="Split">
  <div class="Split-column Split-column--50">
    <blockquote>
      <p>"Talk is cheap. Show me the code."</p>
      --<a href="http://en.wikiquote.org/wiki/Linus_Torvalds#2000-04">Linus Torvalds</a>
    </blockquote>
  </div>
  <div class="Split-column Split-column--50">
![](../img/show-me-the-code-now.gif)
  </div>
</div>

---

# Hello World Component

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre class="language-jsx language--clean language--small"><code>
function HelloWorld() {
  return &lt;h1&gt;Hello, world!&lt;/h1&gt;;
}

ReactDOM.render(
  &lt;HelloWorld /&gt;,
  document.getElementById('root')
);
</code></pre>
  </div>
  <div class="Split-column Split-column--35">
    <iframe height='268' scrolling='no' src='//codepen.io/elijahmanor/embed/mmQooQ/?height=268&theme-id=0&default-tab=result' data-online='//codepen.io/elijahmanor/embed/mmQooQ/?height=268&theme-id=0&default-tab=result' data-offline='./pens/codepen_MweXEv/index.html' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/MweXEv/'>MweXEv</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
    </iframe>
  </div>
</div>

---

# Hello World Component

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre data-line="1-3,5-8" class="language-jsx language--clean language--small"><code>
function HelloWorld() {
  return &lt;h1&gt;Hello, world!&lt;/h1&gt;;
}

ReactDOM.render(
  &lt;HelloWorld /&gt;,
  document.getElementById('root')
);
</code></pre>
  </div>
  <div class="Split-column Split-column--35">
    <p>1-3. <code>HelloWorld</code> component is just a function!</p>
    <p>5-8. <code>ReactDOM.render</code> creates the component, starts the framework, and injects HTML into a DOM node.</p>
  </div>
</div>

---

# Hello World Component

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre data-line="1" class="language-jsx language--clean language--small"><code>
const HelloWorld = () => &lt;h1&gt;Hello, world!&lt;/h1&gt;;

ReactDOM.render(
  &lt;HelloWorld /&gt;,
  document.getElementById('root')
);
</code></pre>
  </div>
  <div class="Split-column Split-column--35">
    <p>1. You can even use ECMAScript 2015 (ES6) arrow functions!</p>
  </div>
</div>

---

# Class Syntax

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre data-line="1,2" class="language-jsx language--clean language--small"><code>
class HelloWorld extends React.Component {
  render() {
    return (
      &lt;div&gt;Hello World!&lt;/div&gt;
    );
  }
}

ReactDOM.render(
  &lt;HelloWorld /&gt;,
  document.getElementById('root')
);
</code></pre>
  </div>
  <div class="Split-column Split-column--35">
    <p>1. Can use the ECMAScript 2015 (ES6) <code>class</code> and extend <code>React.Component</code></p>
    <p>2. The <code>render</code> method is required. You can think of this as your template.</p>
  </div>
</div>

---

# Legacy Syntax

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre class="language-jsx language--clean language--small"><code>
const HelloWorld = React.createClass({
  render: function() {
    return (
      &lt;div&gt;Hello World!&lt;/div&gt;
    )
  }
});

ReactDOM.render(
  &lt;HelloWorld /&gt;,
  document.getElementById('root')
);</code></pre>
  </div>
  <div class="Split-column Split-column--35">
    <p>1. <code>React.createClass</code> is how we defined a component in React v15.4 and below.</p>
  </div>
</div>

---

# Migrate Legacy Components

<div class="Split">
  <div class="Split-column Split-column--65">
    <pre data-line="1,3" class="language-jsx language--clean language--small"><code>
import createReactClass from 'create-react-class';

const HelloWorld = createReactClass({
  return (
    &lt;div&gt;Hello World!&lt;/div&gt;
  )
});

ReactDOM.render(
  &lt;HelloWorld /&gt;,
  document.getElementById('root')
);</code></pre>
  </div>
  <div class="Split-column Split-column--35">
    <p>1,3. After React v15.5+ you can migrate <code>React.createClass</code> to <code>createReactClass</code></p>
    <p>You can use <a href="https://facebook.github.io/react/blog/2017/04/07/react-v15.5.0.html#migrating-from-react.createclass"><code>jscodeshift</code></a> to migrate your legacy components.</p>
  </div>
</div>

---

# Markup in my JavaScript... WHAT!?!

<div class="Split">
  <div class="Split-column Split-column--50">
    [![](./img/iamdeveloper-jsx.png)](https://twitter.com/iamdevloper/status/598435575662813184)
  </div>
  <div class="Split-column Split-column--50">
    <img src="./img/oh-no-yes.gif" style="min-width: 100%;" />
  </div>
</div>

---

# But Seriously

<div class="Split">
  <div class="Split-column Split-column--55">
    <blockquote>
      React component is "...a highly cohesive building block for UIs loosely coupled with other components."
      --<a href="http://www.slideshare.net/floydophone/react-preso-v2">Pete Hunt</a>
    </blockquote>
  </div>
  <div class="Split-column Split-column--45">
    <ul>
    <li>Templates separate technologies, not concerns</li>
    <li>Allows you to focus on building components, not templates</li>
    <li>Combining Markup and JavaScript reduces context switching</li>
  </div>
</div>

---

# JSX Compiles Down to JavaScript

<pre class="language-jsx language--clean language--small"><code>
'use strict';

var HelloWorld = function HelloWorld() {
  return React.createElement(
    'h1',
    null,
    'Hello, world!'
  );
};

ReactDOM.render(
  React.createElement(HelloWorld, null),  
  document.getElementById('root')
);
</code></pre>
`
];
