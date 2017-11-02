import React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";
import { withKnobs, text, date, boolean, array } from "@storybook/addon-knobs";
import JSXAddon from "storybook-addon-jsx";
import { uniqueId } from "lodash";
import faker from "faker";

import Fuses from "../components/Fuses/Fuses";

setAddon(JSXAddon);
const stories = storiesOf("Fuses", module);
stories.addDecorator(withKnobs);

const fuses = _.times(5, n => ({
  id: uniqueId(),
  fullName: faker.name.findName(),
  avatar: faker.internet.avatar(),
  date: faker.date.recent().toJSON(),
  userName: faker.name.firstName().toLowerCase() + faker.name.lastName().toLowerCase(),
  email: faker.internet.email(),
  message: faker.random.words(faker.random.number({ min: 5, max: 20 })),
  bomb: faker.random.boolean()
}));

stories.addWithJSX(
  "List",
  withNotes(`This represents a list of fuses vertically`)(() => <Fuses fuses={fuses} />)
);
