import { hycolor } from "./assets/globalEnum.js";
import Hy from "./Class/Hy.js"; 



Hy.log("Hello",)

Hy.addPreset('vélo', {color: Hy.colors.Cyan, outputColor: hycolor.Yellow })
Hy.log(['hey', ' salut', ' mon reuf'], null ,"vélo")

Hy.getPresets()



console.log(JSON.stringify(Hy.properties))
console.log(JSON.stringify(Hy.properties, null, 2))
console.log(JSON.stringify(['hey', ' salut', ' mon reuf'], null, 2))


// console.log(
//   new Date(Date.now()).toLocaleDateString("fr-FR", {
//     minute: "2-digit",
//     hour: "2-digit",
//     era: "long",
//   })
// );

// const join = (tool, assisted, speedrun) => {
//   const format = (m) => {
//     let f = new Intl.DateTimeFormat("fr", m);
//     return f.format(tool);
//   };
//   return assisted.map(format).join(speedrun);
// };




// // JJ/MM/AA - hh:mm

// let day = join(
//   new Date(),
//   [{ day: "2-digit" }, { month: "2-digit" }, { year: "2-digit" }],
//   "/"
// );
// let time = join(new Date(), [{ hour: "2-digit", minute: "2-digit" }], " ");
// console.log(day, time);

// let obj = {
//   name: "salut",
//   username: "coucou",
// };