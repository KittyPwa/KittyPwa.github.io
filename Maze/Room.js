function Room(i,j) {
  this.i = i;

  this.j = j;

  this.walls = [WALL.NORTH, WALL.EAST, WALL.SOUTH, WALL.WEST];
}

var WALL = {
  NORTH: 'North',
  EAST: 'East',
  SOUTH: 'South',
  WEST: 'West'
}
console.log(WALL)