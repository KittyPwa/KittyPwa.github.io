function Space(size) {
  this.size = size;

  this.rooms = [];

  this.initializeRooms = function() {
    for (i=0; i < this.size; ++i){
      this.rooms[i] = [];
      for (j=0; j < this.size; ++j) {
        this.rooms[i][j] = new Room(i,j);
      }
    }
  }

}
var maze;

function initializeMaze(size) {
  space = new Space(size);
  maze.initializeRooms();
}
initializeMaze(3);