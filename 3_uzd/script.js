
let moneta = 0;
let answer = prompt(" (Ar noretume monetos?)");
if (answer.toLowerCase() === "taip") {
  alert(`Just turite ${++moneta} moneta`);
} else if (answer.toLowerCase() === "ne") {
  console.log(`iki`);
} else {
  alert("Prasay rasykite taip arba ne");
}

