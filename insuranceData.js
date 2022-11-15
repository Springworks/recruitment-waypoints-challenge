//import waypointsArr from './waypoints.json' assert {type: 'json'};
let waypointArr = [
  {
    timestamp: "2016-06-21T12:00:00.000Z",
    position: {
      latitude: 59.334,
      longitude: 18.0667,
    },
    speed: 6.3889,
    speed_limit: 8.33,
  },
  {
    timestamp: "2016-06-21T12:00:05.000Z",
    position: {
      latitude: 59.3337,
      longitude: 18.0662,
    },
    speed: 9.4,
    speed_limit: 8.33,
  },
  {
    timestamp: "2016-06-21T12:00:10.000Z",
    position: {
      latitude: 59.3331,
      longitude: 18.0664,
    },
    speed: 11.1,
    speed_limit: 8.33,
  },
  {
    timestamp: "2016-06-21T12:00:15.000Z",
    position: {
      latitude: 59.3327,
      longitude: 18.0665,
    },
    speed: 8.32,
    speed_limit: 8.33,
  },
  {
    timestamp: "2016-06-21T12:00:20.000Z",
    position: {
      latitude: 59.3323,
      longitude: 18.0666,
    },
    speed: 8.33,
    speed_limit: 8.33,
  },
];
const dataCalculation = (waypointsArr)=> {
  let returnedObj = {
    distanceSpeeding : 0,
    durationSpeeding : 0,
    totalDistance : 0,
    totalDuration : 0
  };
   if (waypointsArr.length < 2)
       return returnedObj


for (let i = 1; i < waypointsArr.length; ++i){
  const oldReturnedObj = {...returnedObj };
  const firstPoint = waypointArr[i-1];
  const secondPoint = waypointArr[i];
  const distanceInKm = distance (firstPoint.position, secondPoint.position);
}
};
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
}


console.log(returnedObj)


//module.exports =  dataCalculation