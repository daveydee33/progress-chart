let container = document.querySelector(".container");

for (let i = 0; i < 1000; i++) {
  let box = document.createElement("div");

  const rnd = Math.floor(Math.random() * 10) + 1;
  if (rnd >= 7) box.className = "in-progress";
  if (rnd >= 9) box.className = "complete";

  container.appendChild(box);
}
