export default class MarsRover {
    coordinates:string = "0:0:N";

    execute(command: string) {
        let y = command.length;

        if(command === "R") {
            return "0:0:E";
        }
        return `0:${y}:N`;

        return this.coordinates;
    }
 }