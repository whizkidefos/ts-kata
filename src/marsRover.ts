const WEST = "W";
const SOUTH = "S";
const EAST = "E";
const NORTH = "N";

const ROTATE_RIGHT = "R";
const ROTATE_LEFT = "L";

export default class MarsRover {
    coordinates = "0:0:N";

    private readonly x_and_y = "0:0:";

    execute(command: string) {
        const y = command.length;

        if(command === ROTATE_RIGHT) {
            return this.x_and_y + EAST;
        }

        if(command === ROTATE_RIGHT+ROTATE_RIGHT) {
            return this.x_and_y + SOUTH;
        }

        if(command === ROTATE_RIGHT+ROTATE_RIGHT+ROTATE_RIGHT) {
            return this.x_and_y + WEST;
        }

        if(command === ROTATE_RIGHT+ROTATE_RIGHT+ROTATE_RIGHT+ROTATE_RIGHT) {
            return this.x_and_y + NORTH;
        }

        if(command === ROTATE_LEFT) {
            return this.x_and_y + WEST;
        }

        if(command === ROTATE_LEFT + ROTATE_LEFT) {
            return this.x_and_y + SOUTH;
        }

        if(command === ROTATE_LEFT + ROTATE_LEFT + ROTATE_LEFT) {
            return this.x_and_y + EAST;
        }

        if(command === ROTATE_LEFT + ROTATE_LEFT + ROTATE_LEFT + ROTATE_LEFT) {
            return this.x_and_y + NORTH;
        }

        return `0:${y}:N`;

        return this.coordinates;
    }
 }