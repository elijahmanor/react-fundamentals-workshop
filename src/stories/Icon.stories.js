import React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";
import { withKnobs, text, date, boolean } from "@storybook/addon-knobs";
import JSXAddon from "storybook-addon-jsx";
import { action } from "@storybook/addon-actions";

import Icon from "../components/Icon/Icon";

setAddon(JSXAddon);
const stories = storiesOf("Icon", module);
stories.addDecorator(withKnobs);

stories.addWithJSX(
  "Default",
  withNotes(
    `This is a wrapper around the font-awesome icon with active and onClick support`
  )(() => (
    <Icon
      type={text("type", "code")}
      isActive={boolean("isActive", false)}
      onClick={action("onClick")}
    />
  ))
);
