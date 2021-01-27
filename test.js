//...........................................EVENT...............................................
const events = require("events");
const event = new events.EventEmitter();
event.on('xyzCLICK',(arg)=>console.log("......................",arg))
event.emit("xyzCLICK","argumenttttttttttttttttttttt");
//..................................................................for loop on object ---key.................
// let user = {
//     name:"Anand",
//     lastname:"bhardwaj"
// }
// console.log('user :>>', user.name)
// for(let key in user){
//     console.log(key+" : "+user[key])
// }