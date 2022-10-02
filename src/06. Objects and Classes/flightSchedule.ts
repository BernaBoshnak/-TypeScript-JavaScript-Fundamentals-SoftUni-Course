type Info = {
  Destination: string;
  Status: string;
};

function flightSchedule(arrays: Array<string[]>) {
  const allFlights = arrays[0];
  const newChangedStatuses = arrays[1];
  const flightStatus = arrays[2].toString();
  const newFlights: Record<string, Info> = {};

  for (const flight of allFlights) {
    const [sector, destination] = flight.split(" ");
    newFlights[sector] = {
      Destination: destination,
      Status: "Ready to fly",
    };
  }

  for (const newFlight of newChangedStatuses) {
    const [sector, status] = newFlight.split(" ");
    if (Object.prototype.hasOwnProperty.call(newFlights, sector)) {
      newFlights[sector].Status = status;
    }
  }

  for (const flight in newFlights) {
    if (newFlights[flight].Status === flightStatus) {
      console.log(newFlights[flight]);
    }
  }
}

flightSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK430 Cancelled",
  ],
  ["Cancelled"],
]);

flightSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK330 Cancelled",
  ],
  ["Ready to fly"],
]);

export {};
