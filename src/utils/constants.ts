const { Dimensions } = require("react-native");

const { width, height } = Dimensions.get("screen");

export const CARD = {
  WIDTH: width * 0.9,
  HEIGHT: height * 0.7,
  BORDER_RADIUS: 20,
};

export const COLORS = {
  like: "#00eda6",
  nope: "#ff006f",
};

export const ACTION_OFFSET = 100