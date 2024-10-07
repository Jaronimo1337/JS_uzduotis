
let names = ["Olivia ", "Jackson", "Sophia", "Elijah", "Ava", "Liam", "Isabella" ];

names.splice(0,1,`Mason`);
names.splice(7,0,`Jaroslav`);
let sort = names.sort()
names = names.map(i => i +'withBob' );
console.log(names);
console.log(sort.reverse());



