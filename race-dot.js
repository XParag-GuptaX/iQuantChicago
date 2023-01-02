import cities from "./cities.js";

// Creating Scatterplot layer by requesting data from github
// Folder directory has races by number 1-white, 2-black, 3-Native America,
// 4-Asian Alone, 5-Hawaii or pacific Islander, 6- Some Other Race,
// 7 - Two or more Races

function createLayer(i = 1, color = [128, 128, 0]) {
  const DATA_URL = `https://raw.githubusercontent.com/gupta-parag/Data-Repo/main/Race-data/Race_${i}.csv`;
  return new deck.ScatterplotLayer({
    id: `scatter-plot-${i}`,
    data: d3.csv(DATA_URL),
    radiusScale: 25,
    radiusMinPixels: 0.25,
    pickable: true,
    opacity: 0.3,
    filled: true,
    getPosition: (d) => [+d.lng, +d.lat, 0],
    getFillColor: color,
    getRadius: 1,
  });
}

let deckgl = new deck.DeckGL({
  mapStyle:
    "https://gist.githubusercontent.com/gupta-parag/8b14de2c3c2fd47c3cc2a42d10817f77/raw/995edb143762442c848d5aa3bf3f2cc5681a5525/positronEditOne.json",
  initialViewState: cities.Chicago,
  controller: true,
  layers: [
    createLayer(4),
    createLayer(5),
    createLayer(6),
    createLayer(7),
    createLayer(1),
    createLayer(2),
    createLayer(3),
  ],
});

// const cntrlPanel = document.querySelector(".control-panel");
// for (let k of Object.keys(cities)) {
//   let btn = document.createElement("button");
//   btn.setAttribute("id", k);
//   btn.innerText = k;
//   btn.style.margin = "5px";
//   btn.addEventListener("click", () => {
//     deckgl.setProps({
//       initialViewState: cities[k],
//     });
//   });
//   cntrlPanel.append(btn);
// }
