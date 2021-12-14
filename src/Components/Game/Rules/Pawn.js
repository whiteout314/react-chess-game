export const pawn = (
  positionY,
  desiredPositionY,
  positionX,
  desiredPositionX
) => {
  console.log("Pawn Position Y: " + positionY);
  console.log("Pawn Desired Position Y: " + desiredPositionY);
  if (positionY === 1) {
    if (
      (desiredPositionY - positionY === 2 ||
        desiredPositionY - positionY === 1) &&
      desiredPositionX === positionX
    ) {
      console.log("Move is valid");
      return true;
    } else {
      console.log("Move isn't valid");
      return false;
    }
  } else {
    if (desiredPositionY - positionY === 1 && desiredPositionX === positionX) {
      console.log("Move is valid");
      return true;
    } else {
      console.log("Move isn't valid");
    }
  }
};
export const pawnBlack = (
  positionY,
  desiredPositionY,
  positionX,
  desiredPositionX
) => {
  console.log("Pawn Position Y: " + positionY);
  console.log("Pawn Desired Position Y: " + desiredPositionY);
  if (positionY === 6) {
    if (
      (desiredPositionY - positionY === -2 ||
        desiredPositionY - positionY === -1) &&
      desiredPositionX === positionX
    ) {
      console.log("Move is valid");
      return true;
    } else {
      console.log("Move isn't valid");
      return false;
    }
  } else {
    if (desiredPositionY - positionY === -1 && desiredPositionX === positionX) {
      console.log("Move is valid");
      return true;
    } else {
      console.log("Move isn't valid");
    }
  }
};
