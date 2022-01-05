let container = document.querySelector(".container");

for (let i = 0; i < 1000; i++) {
  let box = document.createElement("div");

  box.className = "five";
  if (i < 100) box.className = "four";
  if (i < 50) box.className = "three";
  if (i < 25) box.className = "two";
  if (i < 5) box.className = "one";

  const rnd = Math.floor(Math.random() * 100) + 1;
  if (i < 350 && rnd > 80) box.classList.add("in-progress");
  if (i < 350 && rnd < 50) box.classList.add("complete");
  if (i > 350 && rnd > 90 && rnd < 98) box.classList.add("in-progress");
  if (i > 350 && rnd > 98) box.classList.add("complete");

  // -- X and O
  // if (rnd > 8) {
  //   var t = document.createTextNode("x");
  //   box.appendChild(t);
  // }
  // if (rnd > 6 && rnd <= 8) {
  //   var t = document.createTextNode("o");
  //   box.appendChild(t);
  // }

  container.appendChild(box);
}
