// Rover Object Goes Here
// ======================

var rover = { 
  direction: 'N',
  x: 0, 
  y: 0, 
  travelLog: [{x:0,y:0}],
};


// ======================
function turnLeft(theRover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break; 
  };
  console.log("Rover Direction: " + rover.direction);
  //console.log("turnLeft was called!");
}

turnLeft(rover);

function turnRight(theRover){
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break; 
  };
  console.log("Rover Direction: " + rover.direction);
  //console.log("turnRight was called!");
}

turnRight(rover);


function moveForward(theRover){
  switch(rover.direction) {
  case 'N':
      if(rover.y > 0) {
      rover.y--;
      } else {
        console.log("Invalid input. You can't move rover out of the grid.");
      }
      break;
  case 'S':
     if(rover.y < 9) {
      rover.y++;
      } else {
        console.log("Invalid input. You can't move rover out of the grid.");
      }
      break;
    case 'E':
      if(rover.x < 9) {
      rover.x++;
      } else {
        console.log("Invalid input. You can't move rover out of the grid.");
      }
      break;
    case 'W':
      if(rover.x > 0) {
      rover.x--;
      } else {
        console.log("Invalid input. You can't move rover out of the grid.");
      }
      break;
  };
  
  //console.log("New Rover Direction: [" + rover.position[0] + ", " + rover.position[1] + "]")
  console.log(`Rover has position: x=${theRover.x}, y=${theRover.y}`);
      
      let newPosition = {x: theRover.x, y: theRover.y};
      theRover.travelLog.push(newPosition);
  //console.log("moveForward was called")
}

moveForward(rover); 

function command(theRover, orders){
 
  for (let i = 0; i < orders.length; i++){
    let order = orders[i];
    switch(order){
      case "f": // forward
        moveForward(theRover, order);
        break;
      case "r": // right
        turnRight(theRover, order);
        break;  
      case "l": // left
        turnLeft(theRover, order);
        break; 
    };
  };
  
  //console.log(theRover.travelLog);
}

command(rover, "rffrfflfrff");
console.log(rover.travelLog);