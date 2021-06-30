import MarsRover from '../src/marsRover';

describe("MarsRover", () => {
   it("should start at location 0:0:N", () => {
      const marsRover = new MarsRover();

      const coordinates = marsRover.execute("");

      expect(coordinates).toEqual("0:0:N");
   });

   it("should return the coordinate 1:0:N if given M", () => {
      const marsRover = new MarsRover();

      const coordinates = marsRover.execute("M");

      expect(coordinates).toEqual("1:0:N");
   });

   it("should return the coordinate 2:0:N if given MM", () => {
      const marsRover = new MarsRover();

      const coordinates = marsRover.execute("MM");

      expect(coordinates).toEqual("2:0:N");
   });


   it("should return the coordinate 3:0:N if given MMM", () => {
      const marsRover = new MarsRover();

      const coordinates = marsRover.execute("MMM");

      expect(coordinates).toEqual("3:0:N");
   });

   // it("should return the coordinate 2:0:E if given MMR", () => {
   //    const marsRover = new MarsRover();
   //
   //    const coordinates = marsRover.execute("MMR");
   //
   //    expect(coordinates).toEqual("2:0:E");
   // });
});

