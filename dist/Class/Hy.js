import { hycolor, hygraphic } from "../assets/globalEnum";
import getPrefix from "../functions/getPrefix";
import getTimestamp from "../functions/getTimestamp";
export class Hy {
    properties = {
        timestamp: {
            show: true,
            format: "dd/mm/yyyy - hh:mm:ss",
        },
        preset: {
            base: {
                str: "Am here !",
                color: hycolor.None,
                graphic: hygraphic.None,
                outputColor: hycolor.None,
                outputGraphic: hygraphic.None,
            },
        },
    };
    constructor() { }
    log(output, preset, color, graphic) {
        let prefix = `\x1b[${graphic};${color}m[ ${getTimestamp()} ] →\x1b[${hygraphic.None};${hycolor.None}m\n`;
        if (this.properties.timestamp.show) {
            console.log(prefix, output);
        }
        else {
            console.log(output);
        }
    }
    table(output, preset, color, graphic, outputColor, outputGraphic) {
        if (this.properties.timestamp.show) {
            console.log(getPrefix(preset || {
                color: color,
                graphic: graphic,
                outputColor: outputColor,
                outputGraphic: outputGraphic,
            }));
            console.table(output);
        }
        else {
            console.table(output);
        }
    }
    changeTimestamp({ show, format }) {
        this.properties.timestamp = { show, format };
    }
    addPreset(name, preset) {
        if (!this.properties.preset[name]) {
            this.properties.preset[name] = preset;
        }
        else {
            console.error("Mec, ce nom est déjà pris");
        }
    }
    changePreset(name, preset) {
        if (this.properties.preset[name]) {
            this.properties.preset[name] = preset;
        }
        else {
            console.error("Mec, ce preset n'existe pas");
        }
    }
    removePreset(name) {
        delete this.properties.preset[name];
    }
    changeDefault({ str, color, graphic, outputColor, outputGraphic }) {
        this.properties.preset.base = {
            str,
            color,
            graphic,
            outputColor,
            outputGraphic,
        };
    }
    resetDefault() {
        this.properties.preset.base = {
            str: "Am here !",
            color: hycolor.None,
            graphic: hygraphic.None,
        };
    }
}
//# sourceMappingURL=Hy.js.map