const fs = require('fs');
const waypoints = fs.readFileSync('waypoints.json');
const waypointsArr = JSON.parse(waypoints);

function distance(pos1, pos2) {
  var p = 0.017453292519943295; // Math.PI / 180
  var c = Math.cos;
  var a =
    0.5 -
    c((pos2.latitude - pos1.latitude) * p) / 2 +
    (c(pos1.latitude * p) *
      c(pos2.latitude * p) *
      (1 - c((pos2.longitude - pos1.longitude) * p))) /
    2;

  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
};

const waypointsCalc = (waypointsArr)=> {
  const initialReturnedObj = {
    distanceSpeeding : 0,
    durationSpeeding : 0,
    totalDistance : 0,
    totalDuration : 0
  };
   if (waypointsArr.length < 2)
      return initialReturnedObj

  for (let i = 1; i < waypointsArr.length; ++i){
  const oldReturnedObj = {...returnedObj };
  const firstPoint = waypointArr[i-1];
  const secondPoint = waypointArr[i];
  const distanceInKm = distance (firstPoint.position, secondPoint.position);
}
};

module.exports = waypointsCalc