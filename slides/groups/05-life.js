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
    id="lifecycle"
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Heading textColor="quartenary" caps fit>
      Lifecycle
    </Heading>
  </Slide>,
  MarkdownSlides`
  ---
  
  # [Component LifeCycle](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)
  
  * **componentWillMount** – Fired once, before initial rendering occurs. Good place to wire-up message listeners. 'this.setState' doesn't work here.
  * <div class="dim">**componentDidMount** – Fired once, after initial rendering occurs. Can use 'ReactDOM.findDOMNode'.</div>
  * <div class="dim">**componentDidUpdate** - Fired after the component's updates are made to the DOM.</div>
  * <div class="dim">**componentWillReceiveProps** – Fired when a component is receiving new props. You might want to 'this.setState' depending on the props.</div>
  * <div class="dim">**shouldComponentUpdate** - Fired before rendering when new props or state are received. 'return false' if you know an update isn't needed.</div>
  * <div class="dim">**componentWillUnmount** – Fired immediately before a component is unmounted from the DOM. Good place to remove message listeners or general clean up.</div>
  
  ---
  
  # [Component LifeCycle](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)
  
  * **componentWillMount** – Fired once, before initial rendering occurs. Good place to wire-up message listeners. 'this.setState' doesn't work here.
  * **componentDidMount** – Fired once, after initial rendering occurs. Can use 'ReactDOM.findDOMNode'.
  * <div class="dim">**componentDidUpdate** - Fired after the component's updates are made to the DOM.</div>
  * <div class="dim">**componentWillReceiveProps** – Fired when a component is receiving new props. You might want to 'this.setState' depending on the props.</div>
  * <div class="dim">**shouldComponentUpdate** - Fired before rendering when new props or state are received. 'return false' if you know an update isn't needed.</div>
  * <div class="dim">**componentWillUnmount** – Fired immediately before a component is unmounted from the DOM. Good place to remove message listeners or general clean up.</div>
  
  ---
  
  # [Component LifeCycle](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)
  
  * **componentWillMount** – Fired once, before initial rendering occurs. Good place to wire-up message listeners. 'this.setState' doesn't work here.
  * **componentDidMount** – Fired once, after initial rendering occurs. Can use 'ReactDOM.findDOMNode'.
  * **componentDidUpdate** - Fired after the component's updates are made to the DOM.
  * <div class="dim">**componentWillReceiveProps** – Fired when a component is receiving new props. You might want to 'this.setState' depending on the props.</div>
  * <div class="dim">**shouldComponentUpdate** - Fired before rendering when new props or state are received. 'return false' if you know an update isn't needed.</div>
  * <div class="dim">**componentWillUnmount** – Fired immediately before a component is unmounted from the DOM. Good place to remove message listeners or general clean up.</div>
  
  ---
  
  # [Component LifeCycle](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)
  
  * **componentWillMount** – Fired once, before initial rendering occurs. Good place to wire-up message listeners. 'this.setState' doesn't work here.
  * **componentDidMount** – Fired once, after initial rendering occurs. Can use 'ReactDOM.findDOMNode'.
  * **componentDidUpdate** - Fired after the component's updates are made to the DOM.
  * **componentWillReceiveProps** – Fired when a component is receiving new props. You might want to 'this.setState' depending on the props.
  * <div class="dim">**shouldComponentUpdate** - Fired before rendering when new props or state are received. 'return false' if you know an update isn't needed.</div>
  * <div class="dim">**componentWillUnmount** – Fired immediately before a component is unmounted from the DOM. Good place to remove message listeners or general clean up.</div>
  
  ---
  
  # [Component LifeCycle](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)
  
  * **componentWillMount** – Fired once, before initial rendering occurs. Good place to wire-up message listeners. 'this.setState' doesn't work here.
  * **componentDidMount** – Fired once, after initial rendering occurs. Can use 'ReactDOM.findDOMNode'.
  * **componentDidUpdate** - Fired after the component's updates are made to the DOM.
  * **componentWillReceiveProps** – Fired when a component is receiving new props. You might want to 'this.setState' depending on the props.
  * **shouldComponentUpdate** - Fired before rendering when new props or state are received. 'return false' if you know an update isn't needed.
  * <div class="dim">**componentWillUnmount** – Fired immediately before a component is unmounted from the DOM. Good place to remove message listeners or general clean up.</div>
  
  ---
  
  # [Component LifeCycle](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)
  
  * **componentWillMount** – Fired once, before initial rendering occurs. Good place to wire-up message listeners. 'this.setState' doesn't work here.
  * **componentDidMount** – Fired once, after initial rendering occurs. Can use 'ReactDOM.findDOMNode'.
  * **componentDidUpdate** - Fired after the component's updates are made to the DOM.
  * **componentWillReceiveProps** – Fired when a component is receiving new props. You might want to 'this.setState' depending on the props.
  * **shouldComponentUpdate** - Fired before rendering when new props or state are received. 'return false' if you know an update isn't needed.
  * **componentWillUnmount** – Fired immediately before a component is unmounted from the DOM. Good place to remove message listeners or general clean up.
  
  ---
  
  `
];
