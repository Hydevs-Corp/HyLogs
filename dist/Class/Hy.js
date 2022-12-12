import { hycolor, hygraphic } from "../assets/globalEnum.js";
import getPrefix from "../functions/getPrefix.js";
export default class Hy {
    static properties = {
        timestamp: {
            show: true,
            format: "dd/mm/yyyy - hh:mm:ss",
        },
        presets: {
            clear: {
                str: "Am here !",
                color: hycolor.None,
                graphic: hygraphic.None,
                outputColor: hycolor.None,
                outputGraphic: hygraphic.None,
            },
            base: {
                str: "Am here !",
                color: hycolor.None,
                graphic: hygraphic.None,
                outputColor: hycolor.None,
                outputGraphic: hygraphic.None,
            },
        },
    };
    static colors = hycolor;
    static graphic = hygraphic;
    static log(output, preset, presetName) {
        if (this.properties.timestamp.show) {
            console.log(getPrefix(this.properties.presets?.[presetName] ||
                preset ||
                this.properties.presets.base), output);
        }
        else {
            console.log(output);
        }
    }
    static table(output, preset, presetName) {
        if (this.properties.timestamp.show) {
            console.log(getPrefix(this.properties.presets?.[presetName] ||
                preset ||
                this.properties.presets.base));
            console.table(output);
        }
        else {
            console.table(output);
        }
    }
    rainbow() { }
    static changeTimestamp({ show, format }) {
        this.properties.timestamp = { show, format };
    }
    static addPreset(name, preset) {
        if (!this.properties.presets[name]) {
            this.properties.presets[name] = {
                ...this.properties.presets.base,
                ...preset,
            };
        }
        else {
            console.error("Mec, ce nom est déjà pris");
        }
    }
    static changePreset(name, preset) {
        if (this.properties.presets[name] && name === "clear") {
            this.properties.presets[name] = preset;
        }
        else {
            console.error("Mec, ce preset n'existe pas");
        }
    }
    static removePreset(name) {
        delete this.properties.presets[name];
    }
    static getPresets() {
        console.log(this.properties.presets);
    }
    static returnPresets() {
        return this.properties.presets;
    }
    static changeDefault({ str, color, graphic, outputColor, outputGraphic, }) {
        this.properties.presets.base = {
            str,
            color,
            graphic,
            outputColor,
            outputGraphic,
        };
    }
    static resetDefault() {
        this.properties.presets.base = {
            str: "Am here !",
            color: hycolor.None,
            graphic: hygraphic.None,
        };
    }
}
//# sourceMappingURL=Hy.js.map