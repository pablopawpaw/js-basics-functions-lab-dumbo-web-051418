// Code your solution in this file!
function distanceFromHqInBlocks(blockNum) {
  result = blockNum - 42
  return result < 0 ? result*-1 : result
};

function distanceFromHqInFeet(numBlocks) {
  return distanceFromHqInBlocks(numBlocks) * 264
};

function distanceTravelledInFeet(startingBlock, destinationBlock) {
  travelledBlocks = (destinationBlock - startingBlock) < 0 ? startingBlock - destinationBlock : destinationBlock - startingBlock
  return travelledBlocks*264
};

function calculatesFarePrice(start, destination) {
  feetTravelled = distanceTravelledInFeet(start, destination)
  let fare;
  if(feetTravelled < 400) {
    fare = 0
  } else if(feetTravelled < 2000) {
    fare = (feetTravelled-400) * 0.02
  } else if(feetTravelled < 2500) {
    fare = 25
  } else if(feetTravelled > 2500) {
    fare = `cannot travel that far`
  };
  return fare
};
