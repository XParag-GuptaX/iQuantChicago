//Establishing Interactivity

const OPTIONS = ["location", "radius", "coverage", "upperPercentile"];
// OPTIONS.forEach((key) => {
//   document.getElementById(key).oninput = renderLayer;
// });

const MALE_COLOR = [0, 128, 255];
const FEMALE_COLOR = [255, 0, 128];

const chicago = {
  // 41.879694, -87.625443
  longitude: -87.625443,
  latitude: 41.879694,
  zoom: 13,
  bearing: 0,
  transitionDuration: 6000,
  transitionInterpolator: new deck.FlyToInterpolator(),
};

const newYork = {
  longitude: -74,
  latitude: 40.76,
  bearing: 0,
  zoom: 12,
  transitionDuration: 6000,
  transitionInterpolator: new deck.FlyToInterpolator(),
};

let deckgl = new deck.DeckGL({
  mapStyle:
    "https://gist.githubusercontent.com/XParag-GuptaX/8b14de2c3c2fd47c3cc2a42d10817f77/raw/995edb143762442c848d5aa3bf3f2cc5681a5525/positronEditOne.json",
  initialViewState: chicago,
  controller: true,
  layers: [
    new deck.ScatterplotLayer({
      id: "scatter-plot",
      data: "https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/scatterplot/manhattan.json",
      radiusScale: 10,
      radiusMinPixels: 0.5,
      getPosition: (d) => [d[0], d[1], 0],
      getColor: (d) => (d[2] === 1 ? MALE_COLOR : FEMALE_COLOR),
      visible: true,
      pickable: true,
      autoHighlight: true,
    }),
  ],
});

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  deckgl.setProps({
    initialViewState: newYork,
  });
});

const flyChicago = document.querySelector("#chicago");
flyChicago.addEventListener("click", () => {
  deckgl.setProps({
    initialViewState: chicago,
  });
});
