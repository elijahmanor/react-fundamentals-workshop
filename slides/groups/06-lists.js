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
    id="lists"
    transition={["slide"]}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Heading textColor="quartenary" caps fit>
      Lists
    </Heading>
  </Slide>,
  MarkdownSlides`

  # Dealing with Lists
  
  <div class="Split">
    <div class="Split-column Split-column--70">
      <pre class="language-jsx language--clean language--small"><code>
  const speakers = ['Scott Hanselman', 'John Papa', 'Scott Guthrie', 'Michele Bustamante', 'Dan Wahlin', 'Debora Kurata', 'Zoiner Tejada', 'Scott Allen', 'Elijah Manor', 'Ward Bell', 'Todd Anglin', 'Saron Yitbare', 'Scott Hunter'];
  
  class SpeakerList extends React.Component {
    constructor(props) {
      super(props);
      this.state = { names: this.props.names };
    }
    handleSort() {
      this.setState({ names: this.state.names.sort() });
    }
    handleScott() {
      var scotts = this.state.names.filter(function(name) {
        return name.indexOf('Scott') > -1;
      });
      
      this.setState({ names: scotts });
    }
    render() {
      return &lt;div&gt;
        &lt;ul&gt;
          {this.state.names.map(function(name) {
            return &lt;li&gt;{name}&lt;/li&gt;;
          })}
        &lt;/ul&gt;
        &lt;button onClick={this.handleSort.bind(this)}&gt;Sort&lt;/button&gt;
        &lt;button onClick={this.handleScott.bind(this)}&gt;Scott&lt;/button&gt;
      &lt;/div&gt;;
    }
  }
  
  ReactDOM.render(
    &lt;SpeakerList names={speakers} /&gt;,
    document.getElementById('root')
  );
  </code></pre>
    </div>
    <div class="Split-column Split-column--30">
      <iframe height='468' scrolling='no' src='//codepen.io/elijahmanor/embed/RPRdmg/?height=468&theme-id=0&default-tab=result' data-online='//codepen.io/elijahmanor/embed/RPRdmg/?height=468&theme-id=0&default-tab=result' data-offline='./pens/codepen_RPRdmg/index.html' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/elijahmanor/pen/RPRdmg/'>RPRdmg</a> by Elijah Manor (<a href='http://codepen.io/elijahmanor'>@elijahmanor</a>) on <a href='http://codepen.io'>CodePen</a>.
      </iframe>
    </div>
  </div>
  
  ---
  
  # Dealing with Lists
  
  <div class="Split">
    <div class="Split-column Split-column--70">
      <pre data-line="6,13-15,28" class="language-jsx language--clean language--small"><code>
  const speakers = ['Scott Hanselman', 'John Papa', 'Scott Guthrie', 'Michele Bustamante', 'Dan Wahlin', 'Debora Kurata', 'Zoiner Tejada', 'Scott Allen', 'Elijah Manor', 'Ward Bell', 'Todd Anglin', 'Saron Yitbare', 'Scott Hunter'];
  
  class SpeakerList extends React.Component {
    constructor(props) {
      super(props);
      this.state = { names: this.props.names };
    }
    /\* ... handleSort ... \*/
    /\* ... handleScott ... \*/
    render() {
      return &lt;div&gt;
        &lt;ul&gt;
          {this.state.names.map(function(name) {
            return &lt;li&gt;{name}&lt;/li&gt;;
          })}
        &lt;/ul&gt;
        &lt;button onClick={this.handleSort.bind(this)}&gt;
          Sort
        &lt;/button&gt;
        &lt;button onClick={this.handleScott.bind(this)}&gt;
          Scott
        &lt;/button&gt;
      &lt;/div&gt;;
    }
  }
  
  ReactDOM.render(
    &lt;SpeakerList names={speakers} /&gt;,
    document.getElementById('root')
  );
  </code></pre>
    </div>
    <div class="Split-column Split-column--30">
      <p>6. Save off props into state for later use</p>
      <p>13-15. Map over the names array from state and convert to list items</p>
    </div>
  </div>
  
  ---
  
  # Dealing with Lists
  
  <div class="Split">
    <div class="Split-column Split-column--70">
      <pre data-line="5-7,8-13" class="language-jsx language--clean language--small"><code>
  const speakers = ['Scott Hanselman', 'John Papa', 'Scott Guthrie', 'Michele Bustamante', 'Dan Wahlin', 'Debora Kurata', 'Zoiner Tejada', 'Scott Allen', 'Elijah Manor', 'Ward Bell', 'Todd Anglin', 'Saron Yitbare', 'Scott Hunter'];
  
  class SpeakerList extends React.Component {
    /\* ... constructor ... \*/
    handleSort() {
      this.setState({ names: this.state.names.sort() });
    }
    handleScott() {
      var scotts = this.state.names.filter(function(name) {
        return name.indexOf('Scott') > -1;
      });
      this.setState({ names: scotts });
    }
    /\* ... render ... \*/
  }
  
  /\* ... ReactDOM.render ... \*/
  </code></pre>
    </div>
    <div class="Split-column Split-column--30">
      <p>5-7: Sort the names array and assign back to 'setState'</p>
      <p>8-13: Filter only names that match "Scott" and then update state</p>
    </div>
  </div>
  
  ---
  
  # Dealing with Lists
  
  <div class="Split">
    <div class="Split-column Split-column--70">
      <pre data-line="7-9,12,15" class="language-jsx language--clean language--small"><code>
  const speakers = ['Scott Hanselman', 'John Papa', 'Scott Guthrie', 'Michele Bustamante', 'Dan Wahlin', 'Debora Kurata', 'Zoiner Tejada', 'Scott Allen', 'Elijah Manor', 'Ward Bell', 'Todd Anglin', 'Saron Yitbare', 'Scott Hunter'];
  
  class SpeakerList extends React.Component {
    /\* ... constructor ... \*/
    /\* ... handleSort ... \*/
    handleScott() {
      let { names } = this.state;
      names = names.filter(n => n.includes('Scott'));
      this.setState({ names });
    }
    render() {
      const { names } = this.state;
      return &lt;div&gt;
        &lt;ul&gt;
          {names.map(name => &lt;li&gt;{name}&lt;/li&gt;)}
        &lt;/ul&gt;
        &lt;button onClick={this.handleSort.bind(this)}&gt;
          Sort
        &lt;/button&gt;
        &lt;button onClick={this.handleScott.bind(this)}&gt;
          Scott
        &lt;/button&gt;
      &lt;/div&gt;;
    }
  }
  </code></pre>
    </div>
    <div class="Split-column Split-column--30">
      <p>Why not leverage MOAR ECMAScript 2015 (ES6)?</p>
      <p>7, 12: Destructuring</p>
      <p>8, 15: Arrow functions</p>
      <p>9: Property Value Shorthand</p>
    </div>
  </div>
  
  ---
  
  # It's Just JavaScript
  
  <div class="Split">
    <div class="Split-column Split-column--50">
      [![](./img/ryanflorence-javascript.png)](https://twitter.com/ryanflorence/status/577685415919898625)
    </div>
    <div class="Split-column Split-column--50">
      <img src="./img/fast-typing.gif" style="width: 500px;" />
    </div>
  </div>
  
  ---
  

  `
];
