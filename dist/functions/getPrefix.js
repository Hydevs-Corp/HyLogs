import getTimestamp from "./getTimestamp.js";
const getPrefix = ({ color, graphic, outputColor, outputGraphic }) => {
    return `\x1b[${graphic};${color}m[ ${getTimestamp()} ] →\x1b[${outputGraphic};${outputColor}m\n`;
};
export default getPrefix;
//# sourceMappingURL=getPrefix.js.map