//import waypointsArr from './waypoints.json' assert {type: 'json'};

const dataCalculation = (waypointsArr)=> {
  const returnedObj = {
    distanceSpeeding : 0,
    durationSpeeding : 0,
    totalDistance : 0,
    totalDuration : 0
  };
   if (waypointsArr.length < 2){
       return returnedObj
};

};

for (let i = 1; i < waypointsArr.length; ++i)



//console.log(dataCalculation(["sima"]))

dataCalculation([
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
])
module.exports = dataCalculation