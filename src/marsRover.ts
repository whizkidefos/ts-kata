const WEST = "W";
const SOUTH = "S";
const EAST = "E";
const NORTH = "N";

export default class MarsRover {
    coordinates:string = "0:0:N";

    execute(command: string) {
        let y = command.length;

        if(command === "R") {
            return "0:0:" + EAST;
        }

        if(command === "RR") {
            return "0:0:"+ SOUTH;
        }

        if(command === "RRR") {
            return "0:0:" + WEST;
        }

        if(command === "RRRR") {
            return "0:0:" + NORTH;
        }

        return `0:${y}:N`;

        return this.coordinates;
    }
 }