import React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";
import { withKnobs, text, date, boolean } from "@storybook/addon-knobs";
import JSXAddon from "storybook-addon-jsx";
import { action } from "@storybook/addon-actions";

import Fuse from "../components/Fuse/Fuse";

setAddon(JSXAddon);
const stories = storiesOf("Fuse", module);
stories.addDecorator(withKnobs);

const now = new Date();

stories.addWithJSX(
  "with Avatar",
  withNotes(
    `This Fuse represents a Tweet-like structure.
    The avatar will be populated from an image URL (no email provided)`
  )(() => (
    <Fuse
      id={"42"}
      date={date("date", now)}
      userName={text("userName", "johnsmith")}
      fullName={text("fullName", "John Smith")}
      avatar={text(
        "avatar",
        "https://s3.amazonaws.com/uifaces/faces/twitter/commadelimited/128.jpg"
      )}
      message={text("message", "This is a test fuse")}
      bomb={boolean("bomb", false)}
      onBomb={action("onBomb")}
    />
  ))
);

stories.addWithJSX(
  "with Email",
  withNotes(
    `This Fuse represents a Tweet-like structure.
    The avatar will be populated from an email address via the Gravatar API`
  )(() => (
    <Fuse
      id={"42"}
      date={date("date", now)}
      userName={text("userName", "johnsmith")}
      fullName={text("fullName", "John Smith")}
      email={text("email", "john@outlook.com")}
      message={text("message", "This is another test fuse")}
      bomb={boolean("bomb", true)}
      onBomb={action("onBomb")}
    />
  ))
);
