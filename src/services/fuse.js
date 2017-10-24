import { getItem, setItem } from "./localStorage";
// import ElizaBot from "eliza";
const faker = require("faker");
const _ = require("lodash");

// const eliza = new ElizaBot();

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
      resolve();
    });
  });

export const getFuse = id => {
  return getFuses().find(fuse => fuse.id === id);
};

export const addFuse = ({ message, user, replyingTo }) =>
  new Promise(resolve => {
    getFuses().then(fuses => {
      const fuse = {
        id: _.uniqueId(),
        fullName: user.name.formatted,
        avatar: user.thumbnailUrl,
        date: Date.now(),
        userName: user.preferredUsername,
        email: user.email,
        message,
        bomb: false,
        replyingTo
      };
      setItem("fuses", [...fuses, fuse]);
      // window.setTimeout(generateReply.bind(null, fuse), _.random(10000));
      resolve();
    });
  });

const generateReply = fuse => {
  // https://s3.amazonaws.com/uifaces/faces/twitter/katiemdaly/128.jpg
  const message = ""; // eliza.transform(fuse.message);
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
    id: _.uniqueId(),
    fullName: faker.name.findName(),
    avatar: faker.internet.avatar(),
    date: faker.date.recent().toJSON(),
    userName: faker.name.firstName().toLowerCase() + faker.name.lastName().toLowerCase(),
    email: faker.internet.email(),
    message: faker.random.words(faker.random.number({ min: 5, max: 20 })),
    bomb: false
  }));
};
