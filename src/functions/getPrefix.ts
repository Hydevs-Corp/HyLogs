import { preset } from "../assets/globalInterface";
import getTimestamp from "./getTimestamp";

const getPrefix = (preset: preset) => {
  let { color, graphic, outputColor, outputGraphic } = preset;
  return `\x1b[${graphic};${color}m[ ${getTimestamp()} ] →\x1b[${outputGraphic};${outputColor}m\n`;
};

export default getPrefix;
