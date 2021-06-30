class MarsRover {
   execute(command: string) {

   }
}

describe("MarsRover", () => {
   it("should start at location 0:0:N", () => {
      const marsRover = new MarsRover();

      const coordinates = marsRover.execute("");

      expect(coordinates).toEqual("0:0:N");
   });
});