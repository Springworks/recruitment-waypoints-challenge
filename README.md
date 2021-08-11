# Waypoints Challenge

This is a home assignment for recruitment candidates to [Springworks](https://www.springworks.se).

## Insurance data categorization

Peter Griffin is a customer with Risky Insurances Inc. He pays his insurance fee based on how well he can stick to the speed limits while driving.

Peter's car has reported *Waypoints* from a trip (e.g. where it has driven). The following data is known for each *Waypoint*:

- latitude (degrees)
- longitude (degrees)
- speed (meters per second)
- speed_limit (meters per second)
- timestamp (ISO 8601 date-time)

The data for Peter's *Waypoints* needs to be organized in these categories, to make it possible to decide his insurance fee:

- Distance Speeding, meaning the total distance that Peter has driven at a speed exceeding the speed limit
- Duration Speeding, meaning the total time that Peter has driven at a speed exceeding the speed limit
- Total Distance, meaning the total driving distance
- Total Duration, meaning the total driving time


## Challenge

Write a program that reads the data from `waypoints.json` and categorizes it as per above.

**Preferred languages in solution**

- Typescript
- Javascript
- Java
- Swift
- C#

Submit the resulting source code for the solution, with tests to prove result, to a Github repository and share it with your contact person at Springworks.

Good luck!

:wave:
