import React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";
import { WithNotes } from "@storybook/addon-notes";
import { withKnobs, text, date, boolean } from "@storybook/addon-knobs";
import JSXAddon from "storybook-addon-jsx";

import Button from "../components/Button/Button";

setAddon(JSXAddon);

const stories = storiesOf("Button", module);
stories.addDecorator(withKnobs);

stories.addWithJSX("Enabled", () => <Button onClick={action("onClick")}>Testing</Button>);

stories.addWithJSX("Disabled", () => (
  <Button disabled onClick={action("onClick")}>
    Testing
  </Button>
));
