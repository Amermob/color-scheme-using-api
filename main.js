function renderColors(res) {
  for (let i = 0; i < 4; i++) {
    const color = res.colors[Math.floor(Math.random() * 130)].hex;

    const span = document.createElement("span");
    span.appendChild(document.createTextNode(`#${res.colors[i].hex}`));

    const div = document.createElement("div");

    div.style.backgroundColor = `#${color}`;

    document.querySelector(".color").appendChild(div);
    document.querySelector(".color-hex").appendChild(span);
  }
}

fetch("https://www.csscolorsapi.com/api/colors")
  .then((res) => res.json())
  .then((res) => {
    renderColors(res);
  });

document.querySelector("#color-radio").addEventListener("change", (e) => {
  const color = e.target.value;
  fetch("https://www.csscolorsapi.com/api/colors", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      color: color,
    }),
  }).then((res) => console.log(res));
  document.querySelector(".special-color-element").style.backgroundColor =
    color;
  document.querySelector(".special-color-text").textContent = color;
});
