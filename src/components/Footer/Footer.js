import React from "react";
import classNames from "classnames";

import "./Footer.css";

export default ({ className }) => {
  const classes = classNames("Footer", className);
  return (
    <div className={classes}>
      <ul>
        <li className="Footer-website">
          <a href="http://elijahmanor.com">elijahmanor.com</a>
        </li>
        <li className="Footer-twitter">
          <a href="http://twitter.com/elijahmanor">@elijahmanor</a>
        </li>
        <li className="Footer-copyright">© 2017</li>
      </ul>
    </div>
  );
};
