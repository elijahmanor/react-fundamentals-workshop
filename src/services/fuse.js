import { getItem, setItem } from "./localStorage";
import faker from "faker";
import _ from "lodash";
import uniqueString from "unique-string";
import ElizaBot from "eliza";

const eliza = new ElizaBot();

export const getFuses = () =>
  new Promise(resolve => {
    let fuses = getItem("fuses");

    if (!fuses) {
      fuses = generateFuses();
      setItem("fuses", fuses);
    }

    fuses = fuses.map(fuse => {
      fuse.date = new Date(fuse.date);
      return fuse;
    });

    resolve(_.orderBy(fuses, ["date"], ["desc"]));
  });

export const updateFuse = fuse =>
  new Promise(resolve => {
    return getFuses().then(fuses => {
      const item = fuses.find(f => f.id === fuse.id);
      Object.assign(item, fuse);
      setItem("fuses", fuses);
      resolve(fuse);
    });
  });

export const getFuse = id => {
  return getFuses().find(fuse => fuse.id === id);
};

export const addFuse = ({ message, user, replyingTo }) =>
  new Promise(resolve => {
    getFuses().then(fuses => {
      const fuse = {
        id: uniqueString(),
        fullName: user.name.formatted,
        avatar: user.thumbnailUrl,
        date: new Date(),
        userName: user.preferredUsername,
        email: user.email,
        message,
        bomb: false,
        replyingTo
      };
      setItem("fuses", [...fuses, fuse]);
      // window.setTimeout(generateReply.bind(null, fuse), _.random(10000));
      resolve(fuse);
    });
  });

const generateReply = fuse => {
  // https://s3.amazonaws.com/uifaces/faces/twitter/katiemdaly/128.jpg
  const message = eliza.transform(fuse.message);
  const user = {
    name: { formatted: "Eliza" },
    thumbnailUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/cynthiasavard/128.jpg",
    preferredUsername: "eliza",
    email: ""
  };
  if (fuse.replyingTo) {
  } else {
  }
  addFuse({ message, user });
};

const generateFuses = () => {
  return _.times(10, n => ({
    id: uniqueString(),
    fullName: faker.name.findName(),
    avatar: _.times(2, faker.internet.avatar).find(avatar => !avatar.includes("falling_soul")),
    date: faker.date.recent().toJSON(),
    userName: faker.name.firstName().toLowerCase() + faker.name.lastName().toLowerCase(),
    email: faker.internet.email(),
    message: faker.random.words(faker.random.number({ min: 5, max: 20 })),
    bomb: false
  }));
};
