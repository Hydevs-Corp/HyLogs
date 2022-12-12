const getTimestamp = () => {
  let date = new Date(Date.now());
  let timestamp = {
    yyyy: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    min: date.getMinutes(),
    s: date.getSeconds(),
    ms: date.getMilliseconds(),
  };
  return `${`${timestamp.d}`.length == 2 ? timestamp.d : "0" + timestamp.d}/${
    `${timestamp.m}`.length == 2 ? timestamp.m : "0" + timestamp.m
  }/${timestamp.yyyy} - ${
    `${timestamp.h}`.length == 2 ? timestamp.h : "0" + timestamp.h
  }:${`${timestamp.m}`.length == 2 ? timestamp.m : "0" + timestamp.m}:${
    `${timestamp.s}`.length == 2 ? timestamp.s : "0" + timestamp.s
  }`;
};
export default getTimestamp;
