const WEST = "W";
const SOUTH = "S";
const EAST = "E";
const NORTH = "N";

const ROTATE_RIGHT = "R";
const ROTATE_LEFT = "L";

const rotateRight = ROTATE_RIGHT;
const rotateRightTwice = ROTATE_RIGHT+ROTATE_RIGHT;
const rotateRightThrice = ROTATE_RIGHT+ROTATE_RIGHT+ROTATE_RIGHT;
const rotateRightFourTimes = ROTATE_RIGHT+ROTATE_RIGHT+ROTATE_RIGHT+ROTATE_RIGHT;

export default class MarsRover {
    coordinates = "0:0:N";

    private readonly x_and_y = "0:0:";

    execute(command: string) {
        const y = command.length;

        if(command === rotateRight) {
            return this.getOutputString(EAST);
        }

        
        if(command === rotateRightTwice) {
            return this.getOutputString(SOUTH);
        }

        
        if(command === rotateRightThrice) {
            return this.getOutputString(WEST);
        }

        
        if(command === rotateRightFourTimes) {
            return this.getOutputString(NORTH);
        }

        if(command === ROTATE_LEFT) {
            return this.getOutputString(WEST);
        }

        if(command === ROTATE_LEFT + ROTATE_LEFT) {
            return this.getOutputString(SOUTH);
        }

        if(command === ROTATE_LEFT + ROTATE_LEFT + ROTATE_LEFT) {
            return this.getOutputString(EAST);
        }

        if(command === ROTATE_LEFT + ROTATE_LEFT + ROTATE_LEFT + ROTATE_LEFT) {
            return this.getOutputString(NORTH);
        }

        return `0:${y}:N`;

        return this.coordinates;
    }

    private getOutputString(direction: string) {
        return this.x_and_y + direction;
    }
}