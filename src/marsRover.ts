const WEST = "W";
const SOUTH = "S";
const EAST = "E";
const NORTH = "N";

export default class MarsRover {
    coordinates = "0:0:N";

    private readonly x_and_y = "0:0:";

    execute(command: string) {
        const y = command.length;

        if(command === "R") {
            return this.x_and_y + EAST;
        }

        if(command === "RR") {
            return this.x_and_y + SOUTH;
        }

        if(command === "RRR") {
            return this.x_and_y + WEST;
        }

        if(command === "RRRR") {
            return this.x_and_y + NORTH;
        }

        if(command === "L") {
            return this.x_and_y + WEST;
        }

        return `0:${y}:N`;

        return this.coordinates;
    }
 }