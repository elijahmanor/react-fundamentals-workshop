import { getItem, setItem } from "./localStorage";
const faker = require("faker");
const _ = require("lodash");
const uniqueString = require("unique-string");

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
        id: uniqueString(),
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
      resolve();
    });
  });

const generateFuses = () => {
  return _.times(10, n => ({
    id: uniqueString(),
    fullName: faker.name.findName(),
    avatar: faker.internet.avatar(),
    date: faker.date.recent().toJSON(),
    userName: faker.name.firstName().toLowerCase() + faker.name.lastName().toLowerCase(),
    email: faker.internet.email(),
    message: faker.random.words(faker.random.number({ min: 5, max: 20 })),
    bomb: false
  }));
};
