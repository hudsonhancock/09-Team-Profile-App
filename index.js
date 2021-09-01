const render = require("./src/page-template.js");
const team = [
  {
    name: "Hudson",
    id: 1,
    email: "hudson@hudson.com",
    role: 'manager'
  },
  {
    name: "Laura",
    id: 2,
    email: "laura@laura.com",
    role: 'engineer'
  },
  {
    name: "Copeland",
    id: 3,
    email: "copey@copey.com",
    role: 'intern'
  },
];
console.log(render(team));
