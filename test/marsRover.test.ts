import MarsRover from '../src/marsRover';

describe("MarsRover", () => {
   it("should start at location 0:0:N", () => {
      const marsRover = new MarsRover();

      const coordinates = marsRover.execute("");

      expect(coordinates).toEqual("0:0:N");
   });

   it("should return the coordinate 0:1:N if given M", () => {
      const marsRover = new MarsRover();

      const coordinates = marsRover.execute("M");

      expect(coordinates).toEqual("0:1:N");
   });

   it("should return the coordinate 0:2:N if given MM", () => {
      const marsRover = new MarsRover();

      const coordinates = marsRover.execute("MM");

      expect(coordinates).toEqual("0:2:N");
   });


   it("should return the coordinate 0:3:N if given MMM", () => {
      const marsRover = new MarsRover();

      const coordinates = marsRover.execute("MMM");

      expect(coordinates).toEqual("0:3:N");
   });

   it("should return the coordinate 0:0:E if given R", () => {
      const marsRover = new MarsRover();

      const coordinates = marsRover.execute("R");

      expect(coordinates).toEqual("0:0:E");
   });

   it("should return the coordinate 0:0:S if given RR", () => {
      const marsRover = new MarsRover();

      const coordinates = marsRover.execute("RR");

      expect(coordinates).toEqual("0:0:S");
   });

   it("should return the coordinate 0:0:W if given RRR", () => {
      const marsRover = new MarsRover();

      const coordinates = marsRover.execute("RRR");

      expect(coordinates).toEqual("0:0:W");
   });
});

