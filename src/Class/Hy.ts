import { hycolor, hygraphic } from "../assets/globalEnum";
import { preset, properties, timestamp } from "../assets/globalInterface";
import getPrefix from "../functions/getPrefix";
import getTimestamp from "../functions/getTimestamp";

export class Hy {
  private properties: properties = {
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

  constructor() {}

  log(output: any, preset?: preset, color?: hycolor, graphic?: hygraphic) {
    let prefix = `\x1b[${graphic};${color}m[ ${getTimestamp()} ] →\x1b[${
      hygraphic.None
    };${hycolor.None}m\n`;

    if (this.properties.timestamp.show) {
      console.log(prefix, output);
    } else {
      console.log(output);
    }
  }
  
  table(
    output: any,
    preset?: preset,
    color?: hycolor,
    graphic?: hygraphic,
    outputColor?: hycolor,
    outputGraphic?: hygraphic
  ) {
    if (this.properties.timestamp.show) {
      console.log(
        getPrefix(
          preset || {
            color: color,
            graphic: graphic,
            outputColor: outputColor,
            outputGraphic: outputGraphic,
          }
        )
      );
      console.table(output);
    } else {
      console.table(output);
    }
  }

  changeTimestamp({ show, format }: timestamp) {
    this.properties.timestamp = { show, format };
  }

  addPreset(name: string, preset: preset) {
    if (!this.properties.preset[name]) {
      this.properties.preset[name] = preset;
    } else {
      console.error("Mec, ce nom est déjà pris");
    }
  }

  changePreset(name: string, preset: preset) {
    if (this.properties.preset[name]) {
      this.properties.preset[name] = preset;
    } else {
      console.error("Mec, ce preset n'existe pas");
    }
  }

  removePreset(name: string) {
    delete this.properties.preset[name];
  }

  changeDefault({ str, color, graphic, outputColor, outputGraphic }: preset) {
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
