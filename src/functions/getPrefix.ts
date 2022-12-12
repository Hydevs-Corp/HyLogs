import { preset } from "../assets/globalInterface.js";
import getTimestamp from "./getTimestamp.js";

const getPrefix = ( { color, graphic, outputColor, outputGraphic } : preset ) => {
  return `\x1b[${graphic};${color}m[ ${getTimestamp()} ] →\x1b[${outputGraphic};${outputColor}m\n`;
};

export default getPrefix;
