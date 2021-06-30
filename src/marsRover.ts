export default class MarsRover {
    coordinates:string = "0:0:N";
    execute(command: string) {
        if(command === "M") {
            return "1:0:N";
        }

        if(command === "MM") {
            return "2:0:N";
        }

        if(command === "MMR") {
            return "2:0:E";
        }

        return this.coordinates;
    }
 }