const os = require("os");

const user = os.userInfo();
console.log(user);
console.log(`The system running in ${os.uptime()} seconds`);

const currentos = {
  name: os.type(),
  release: os.release(),
  totalmemory: os.totalmem(),
  freememory: os.freemem(),
};
console.log(currentos);
