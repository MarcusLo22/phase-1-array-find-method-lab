// code your solution here
function superbowlWin(records) {
    // Find the first record with a result of "W" (win)
    const winRecord = records.find(record => record.result === "W");
  
    // If a win record is found, return the year
    if (winRecord) {
      return winRecord.year;
    }
  
    // If no win record is found, return undefined
    return undefined;
  }
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]