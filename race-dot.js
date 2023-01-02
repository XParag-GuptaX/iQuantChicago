import cities from "./cities.js";

// Creating objects to toggle layer visibiity

let races = {
  1: "White Alone",
  2: "Black or African American Alone",
  3: "American Indian and Alaska Native alone",
  4: "Asian Alone",
  5: "Native Hawaiian and Other Pacific Islander alone",
  6: "Some Other Race alone",
  7: "Two or More Races",
};

let visibility = {
  1: true,
  2: true,
  3: true,
  4: true,
  5: true,
  6: true,
  7: true,
};
console.log(visibility);

//Adding layer buttons to the DOM
const cntrlPanel = document.querySelector(".control-panel");
let ul = document.createElement("ul");

for (let k of Object.keys(races)) {
  let btn = document.createElement("li");
  let span = document.createElement("span");
  span.setAttribute("id", k);
  span.innerText = races[k];
  //Adding event Function
  span.addEventListener("click", () => {
    span.classList.toggle("black");
    visibility[k] = !visibility[k];
    render();
  });
  btn.append(span);
  ul.append(btn);
}

cntrlPanel.append(ul);

// Creating Scatterplot layer by requesting data from github
// Folder directory has races by number 1-white, 2-black, 3-Native America,
// 4-Asian Alone, 5-Hawaii or pacific Islander, 6- Some Other Race,
// 7 - Two or more Races
function createLayer(i = 1, color = [128, 128, 0], vis = true) {
  const DATA_URL = `https://raw.githubusercontent.com/gupta-parag/Data-Repo/main/Race-data/Race_${i}.csv`;
  return new deck.ScatterplotLayer({
    id: `scatter-plot-${i}`,
    data: d3.csv(DATA_URL),
    radiusScale: 25,
    radiusMinPixels: 0.25,
    pickable: true,
    opacity: (i === 3) | (i === 5) | (i === 7) ? 1 : 0.3,
    filled: true,
    getPosition: (d) => [+d.lng, +d.lat, 0],
    getFillColor: color,
    getRadius: 1,
    pickable: true,
    visible: vis,
    autohighlight: true,
  });
}

function render() {
  let deckgl = new deck.DeckGL({
    mapStyle:
      "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
    initialViewState: cities.Chicago,
    controller: true,
    pickable: true,
    autoHighlight: true,
    layers: [
      createLayer(4, [249, 7, 22], visibility[4]),
      createLayer(5, [255, 177, 0], visibility[5]),
      createLayer(6, [6, 255, 0], visibility[6]),
      createLayer(7, [255, 0, 255], visibility[7]),
      createLayer(2, [246, 107, 14], visibility[2]),
      createLayer(3, [255, 255, 0], visibility[3]),
      createLayer(1, [10, 161, 221], visibility[1]),
    ],
  });
}

render();
