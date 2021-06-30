export default class MarsRover {
    coordinates:string = "0:0:N";

    execute(command: string) {
        let y = command.length;
        // for(let i = 0; i < command.length; i++) {
        //     y++;
        // }
        return `0:${y}:N`;

        // if(command === "M") {
        //     return "0:1:N";
        // }

        // if(command === "MM") {
        //     return "0:2:N";
        // }

        // if(command === "MMM") {
        //     return "0:3:N";
        // }

        // if(command === "MMR") {
        //     return "2:0:E";
        // }

        return this.coordinates;
    }
 }