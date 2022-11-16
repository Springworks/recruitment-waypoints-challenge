const  waypointsCalc = require ('./waypoints.js') 

describe("waypointsCalc function works properly", () => {
  const emptyArr = []
  const arrLength1 = [{ name: "sima" }]
  const returnedObj1 = {
    distanceSpeeding: 0,
    durationSpeeding: 0,
    totalDistance: 0,
    totalDuration: 0,
  };
  test("it returns empty obj if input array is empty", () => {
    expect(waypointsCalc(emptyArr)).toEqual(returnedObj1)
  });
});