const names = require('./names');
const say = require('./util');
console.log(names);
require('./noexport');
say('susan');
say(names.j);
say(names.f);

