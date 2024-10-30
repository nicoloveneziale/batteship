import Ship from "./Ship.js";

test("Tests the hit function in Ship", () => {
  const testShip = new Ship(3);
  testShip.hit();
  expect(testShip.hits).toBe(1);
});

test("Tests the sink function in Ship", () => {
  const testShip = new Ship(2);
  testShip.hit();
  testShip.hit();
  testShip.isSunk();
  expect(testShip.sunken).toBe(true);
});
