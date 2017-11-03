import React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";
import { withKnobs, text, date, boolean } from "@storybook/addon-knobs";
import JSXAddon from "storybook-addon-jsx";

import Fuse from "../components/Fuse/Fuse";

setAddon(JSXAddon);
const stories = storiesOf("Fuse", module);
stories.addDecorator(withKnobs);

// TODO: Add props to the following Fuse components and utilize the knob helpers

stories.addWithJSX(
  "with Avatar",
  withNotes(
    `This Fuse represents a Tweet-like structure.
    The avatar will be populated from an image URL (no email provided)`
  )(() => <Fuse />)
);

stories.addWithJSX(
  "with Email",
  withNotes(
    `This Fuse represents a Tweet-like structure.
    The avatar will be populated from an email address via the Gravatar API`
  )(() => <Fuse />)
);
