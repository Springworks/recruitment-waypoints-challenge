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
  const calculatedData = waypointsArr.reduce((acc, curr, index, waypointsArr) => {
    if (index === 0) {
      return acc;
    }
    const prev = waypointsArr[index - 1];
    const distanceInKm = distance(prev.position, curr.position);
    const timeDiff = (new Date(curr.timestamp) - new Date(prev.timestamp)) / 1000;
    const isSpeeding = curr.speed_limit < curr.speed;

    return {
      distanceSpeeding: isSpeeding ? acc.distanceSpeeding + distanceInKm : acc.distanceSpeeding,
      durationSpeeding: isSpeeding ? acc.durationSpeeding + timeDiff : acc.durationSpeeding,
      totalDistance: acc.totalDistance + distanceInKm,
      totalDuration: acc.totalDuration + timeDiff
    }
  }, initialReturnedObj);
  
  return calculatedData
};

console.log(waypointsCalc(waypointsArr));

module.exports = waypointsCalc