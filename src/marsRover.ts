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

const rotateLeft = ROTATE_LEFT;
const rotateLeftTwice = ROTATE_LEFT + ROTATE_LEFT;
const rotateLeftThrice = ROTATE_LEFT + ROTATE_LEFT + ROTATE_LEFT;
const rotateLeftFourTimes = ROTATE_LEFT + ROTATE_LEFT + ROTATE_LEFT + ROTATE_LEFT;
export default class MarsRover {
    coordinates = "0:0:N";

    private readonly x_and_y = "0:0:";

    execute(command: string) {
        const y = command.length;

        let outputString = this.coordinates;
        if(command.includes(ROTATE_RIGHT)) {
            outputString = this.rotateRight(command, outputString);
        }
        if(command.includes(ROTATE_LEFT)){
            outputString = this.rotatetLeft(command, outputString);
        }

        if(command.includes("M")) {
            outputString = `0:${y}:N`;
        }

        return outputString;
    }

    private rotatetLeft(command: string, outputString: string) {
        if (command === rotateLeft) {
            outputString = this.getOutputString(WEST);
        }

        if (command === rotateLeftTwice) {
            outputString = this.getOutputString(SOUTH);
        }

        if (command === rotateLeftThrice) {
            outputString = this.getOutputString(EAST);
        }

        if (command === rotateLeftFourTimes) {
            outputString = this.getOutputString(NORTH);
        }
        return outputString;
    }

    private rotateRight(command: string, outputString: string) {
        if (command === rotateRight) {
            outputString = this.getOutputString(EAST);
        }

        if (command === rotateRightTwice) {
            outputString = this.getOutputString(SOUTH);
        }

        if (command === rotateRightThrice) {
            outputString = this.getOutputString(WEST);
        }

        if (command === rotateRightFourTimes) {
            outputString = this.getOutputString(NORTH);
        }
        return outputString;
    }

    private getOutputString(direction: string) {
        return this.x_and_y + direction;
    }
}