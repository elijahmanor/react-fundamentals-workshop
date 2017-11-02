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
  <SlideSet key="what">
    <Slide>
      <Markdown>
        {`
# What is React?

> "A JavaScript Library for Building User Interfaces" -- [React](https://facebook.github.io/react/)
`}
      </Markdown>
    </Slide>
    <Slide>
      <Markdown>
        {`
# Who Uses React?

<div class="Split">
  <div class="Split-column">
    <ul>
      <li>Atlassian</li>
      <li>BBC</li>
      <li>Codecademy</li>
      <li>Dropbox</li>
      <li>EveryDollar</li>
      <li>Facebook</li>
      <li>Flipboard</li>
      <li>GitHub</li>
      <li>Imgur</li>
      <li>Instagram</li>
    </ul>
  </div>
  <div class="Split-column">
    <ul>
      <li>Khan Academy</li>
      <li>Netflix</li>
      <li>PayPal</li>
      <li>Reddit</li>
      <li>Salesforce</li>
      <li>Venmo</li>
      <li>WhatsApp</li>
      <li>Wired</li>
      <li>Yahoo</li>
    </ul>
  </div>
</div>
`}
      </Markdown>
    </Slide>
    <Slide>
      <Markdown>
        {`
# So, It's like Angular or Ember?

## No

>  "Lots of people use React as the V in MVC." -- [React](https://facebook.github.io/react/)
`}
      </Markdown>
    </Slide>
    <Slide>
      <Markdown>
        {`
# So, It's a Template Library?

## No

> "React components are far more powerful than Angular templates; they should be compared with Angular's directives instead" --Pete Hunt ([Quora](http://www.quora.com/Pete-Hunt/Posts/Facebooks-React-vs-AngularJS-A-Closer-Look))
`}
      </Markdown>
    </Slide>
    <Slide>
      <Markdown>
        {`
# Why is it Compelling?

* Declarative & Composable
* Virtual DOM
* One-Way Data Flow
`}
      </Markdown>
    </Slide>
    <Slide>
      <Markdown>
        {`
# Declarative & Composable

<div class="Split">
  <div class="Split-column">
    <p>Imperative Code</p>
    <pre class="language-javascript language--clean language--small"><code>
$('form').on('submit', function(e) {
  e.preventDefault();
  $.ajax({
    url: '/customers',
    type: 'POST',
    data: $(this).serialize(),
    success: function(data) {
      $('.status')
        .append('&lt;h3&gt;' + data + '&lt;/h3&gt;');
    }
  });
});</code></pre>
  </div>
  <div class="Split-column">
    <p>Declarative Code</p>
    <pre class="language-jsx language--clean language--small"><code>
var NoteBox = React.createClass({
  // ... more code ...
  render: function() {
    return &lt;div className="NoteBox"&gt;
      &lt;h1>Notes&lt;/h1&gt;
      &lt;NoteList data={this.state.data} /&gt;
      &lt;NoteForm onPost={this.handlePost} /&gt;
    &lt;/div&gt;;
  }
});</code></pre>
  </div>
</div>  
`}
      </Markdown>
    </Slide>
    <Slide>
      <Markdown>
        {`
# Declarative & Composable

* React is an Abstraction away from the DOM
* It Simplifies the Mental Model
* Re-render the whole app on every update
* Mix and match components to build UIs
`}
      </Markdown>
    </Slide>
    <Slide>
      <Markdown>
        {`
# Virtual DOM

* Re-rendering the whole app on every update is not efficient
* The Virtual DOM will only update what is necessary
* It works much like a Gaming Engine

> "I tend to think of React as Version Control for the DOM" —AdonisSMU
`}
      </Markdown>
    </Slide>
    <Slide>
      <Markdown>
        {`
# 1-Way Data Flow

> "...you can set the directionality of it to be 2-Way Data Binding. That actually seems to be a good idea until you have a large scale application and then it turns out you have no idea whats going on... and turns out to be an anti-pattern for large apps." --[Misko Hevery](https://www.youtube.com/watch?v=uD6Okha_Yj0#t=1785)
`}
      </Markdown>
    </Slide>
    <Slide>
      <Markdown>
        {`
# So, Why is it Compelling?

## Declarative → Predictable → Confidence → Reliability

Tom Ochino's [React.js Conf keynote](https://www.youtube.com/watch?v=KVZ-P-ZI6W4#t=868)
`}
      </Markdown>
    </Slide>
    <Slide>
      <Markdown>
        {`
# So, What is the Learning Curve?

* Learning React? **Easy**
* Learning the Rest? **Intermediate**
`}
      </Markdown>
    </Slide>
    <Slide>
      <Markdown>
        {`
# Getting Started

Once you know the basics (we'll cover those in this talk), then you can get started building locally with the [create-react-app](https://github.com/facebookincubator/create-react-app) command-line utility.

Or, if you just want to tinker online then [codesandbox.io](https://codesandbox.io) is a great option!
`}
      </Markdown>
    </Slide>
  </SlideSet>
);
