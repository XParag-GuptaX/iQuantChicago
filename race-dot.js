import cities from "./cities.js";

const DATA_URL =
  "https://raw.githubusercontent.com/XParag-GuptaX/iQuantChicago/main/shorterIllinois.csv";

let deckgl = new deck.DeckGL({
  mapStyle:
    "https://gist.githubusercontent.com/XParag-GuptaX/8b14de2c3c2fd47c3cc2a42d10817f77/raw/995edb143762442c848d5aa3bf3f2cc5681a5525/positronEditOne.json",
  initialViewState: cities.Chicago,
  controller: true,
  layers: [
    new deck.ScatterplotLayer({
      id: "scatter-plot",
      data: d3.csv(DATA_URL),
      radiusScale: 30,
      radiusMinPixels: 0.25,
      pickable: true,
      opacity: 0.8,
      filled: true,
      getPosition: (d) => [+d.lng, +d.lat, 0],
      getFillColor: [0, 128, 255],
      getRadius: 1,
      // getLineColor: (d) => [0, 0, 0],
    }),
  ],
});

const cntrlPanel = document.querySelector(".control-panel");
for (let k of Object.keys(cities)) {
  let btn = document.createElement("button");
  btn.setAttribute("id", k);
  btn.innerText = k;
  btn.style.margin = "5px";
  btn.addEventListener("click", () => {
    deckgl.setProps({
      initialViewState: cities[k],
    });
  });
  cntrlPanel.append(btn);
}
