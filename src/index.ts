import waypoints from './waypoints.json';

type Waypoint = {
  timestamp: string;
  position: {
    latitude: number;
    longitude: number;
  };
  speed: number;
  speed_limit: number;
};

const data = {
  distanceSpeeding: 0, // [m or km]
  durationSpeeding: 0, // [sec]
  totalDistance: 0, // [m or km]
  totalDuration: 0, // [sec]
};

// TODO: validate waypoints
(waypoints as Waypoint[]).reduce((pre, cur) => {
  const duration = (new Date(cur.timestamp).getTime() - new Date(pre.timestamp).getTime()) / 1000;
  const distance = pre.speed * duration; // REVIEW: Replace with latlon

  // TODO: Make sure precision
  const overspeed = pre.speed_limit - pre.speed;
  if (overspeed > 0) {
    data.distanceSpeeding += distance;
    data.durationSpeeding += duration;
  }
  data.totalDistance += distance;
  data.totalDuration += duration;

  return cur;
});

console.log(data); // TODO: pretty print
