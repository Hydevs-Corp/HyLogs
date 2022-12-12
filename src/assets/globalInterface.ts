import { hycolor, hygraphic } from "./globalEnum";

export interface timestamp {
  show?: boolean;
  format?: string;
}

export interface preset {
  str?: string;
  color: hycolor;
  graphic: hygraphic;
  outputColor?: hycolor;
  outputGraphic?: hygraphic;
}

export interface properties {
  timestamp: timestamp;
  preset: {
    [key: string]: preset;
  };
}