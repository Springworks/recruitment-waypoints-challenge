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


//for (let i = 1; i < waypointsArr.length; ++i)


console.log(dataCalculation(["sima"]))

module.exports = dataCalculation