const cityViewState = {
  Chicago: {
    // 41.879694, -87.625443
    longitude: -87.625443,
    latitude: 41.879694,
    zoom: 9.5,
    bearing: 0,
    transitionDuration: 5000,
    transitionInterpolator: new deck.FlyToInterpolator(),
  },
  NewYork: {
    longitude: -74,
    latitude: 40.76,
    bearing: 0,
    zoom: 12,
    transitionDuration: 5000,
    transitionInterpolator: new deck.FlyToInterpolator(),
  },
  NewDelhi: {
    // 28.61477188033503, 77.22087786275557
    longitude: 77.220877,
    latitude: 28.614771,
    bearing: 0,
    zoom: 12,
    transitionDuration: 5000,
    transitionInterpolator: new deck.FlyToInterpolator(),
  },
  Ahmedabad: {
    // 23.031276079224803, 72.57704872675859
    longitude: 72.577048,
    latitude: 23.031276,
    bearing: 0,
    zoom: 12,
    transitionDuration: 5000,
    transitionInterpolator: new deck.FlyToInterpolator(),
  },
  Mumbai: {
    // 18.93501724916592, 72.81406981146817
    longitude: 72.814069,
    latitude: 18.9350172,
    bearing: 0,
    zoom: 13,
    transitionDuration: 5000,
    transitionInterpolator: new deck.FlyToInterpolator(),
  },

  Rome: {
    // 41.890018715552245, 12.4798475284945
    longitude: 12.4798475284945,
    latitude: 41.890018715552245,
    bearing: 0,
    zoom: 12,
    transitionDuration: 5000,
    transitionInterpolator: new deck.FlyToInterpolator(),
  },
};

export default cityViewState;
