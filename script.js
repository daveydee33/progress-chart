let container = document.querySelector(".container");

for (let i = 0; i < 200; i++) {
  let box = document.createElement("div");

  const rnd = Math.floor(Math.random() * 10) + 1;
  if (rnd >= 7 && rnd <= 9) box.className = "in-progress";
  if (rnd === 10) box.className = "complete";

  container.appendChild(box);
}

// console.log(container);
// console.log(box);
