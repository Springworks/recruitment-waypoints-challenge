const dataCalculation = require("./insuranceData");

describe("dataCalculation function", () => {
  test("dataCalculation works properly for array lenght < 2", () => {
    const input = [{ name: "Sima"}]
    const output = {
    distanceSpeeding : 0,
    durationSpeeding : 0,
    totalDistance : 0,
    totalDuration : 0
  }
   expect(dataCalculation(input)).toEqual(output)
  }
  );
});