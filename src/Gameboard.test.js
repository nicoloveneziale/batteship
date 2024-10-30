import Gameboard from "./Gameboard";
import Ship from "./Ship";

test("Test for addition of a single length ship", () => {
  const testGameboard = new Gameboard();
  const testShip = new Ship(1);
  testGameboard.placeShip(2, 2, testShip, "horizontal");
  expect(testGameboard.board[2][2]).toBe(testShip);
});

test("Test for addition of a double length ship horizontal", () => {
  const testGameboard = new Gameboard();
  const testShip = new Ship(2);
  testGameboard.placeShip(2, 2, testShip, "horizontal");
  expect(testGameboard.board[2][2] && testGameboard.board[2][3]).toBe(testShip);
});

test("Test for addition of a double length ship vertical", () => {
  const testGameboard = new Gameboard();
  const testShip = new Ship(2);
  testGameboard.placeShip(2, 2, testShip, "vertical");
  expect(testGameboard.board[2][2] && testGameboard.board[3][2]).toBe(testShip);
});

test("Tests for horizontal overflow", () => {
  const testGameboard = new Gameboard();
  const testShip = new Ship(3);
  expect(testGameboard.isValidPlace(9, 8, testShip, "horizontal")).toBe(false);
});

test("Tests for vertical overflow", () => {
  const testGameboard = new Gameboard();
  const testShip = new Ship(3);
  expect(testGameboard.isValidPlace(9, 8, testShip, "vertical")).toBe(false);
});

test("Tests for no overflow", () => {
  const testGameboard = new Gameboard();
  const testShip = new Ship(3);
  expect(testGameboard.isValidPlace(7, 8, testShip, "horizontal")).toBe(true);
});

test("Tests for receive attack on an non-ship cell", () => {
  const testGameboard = new Gameboard();
  testGameboard.receiveAttack(1, 1);
  expect(testGameboard.attacks[1][1]).toBe(true);
});

test("Tests for receive attack on a ship cell", () => {
  const testGameboard = new Gameboard();
  const testShip = new Ship(3);
  testGameboard.placeShip(2, 2, testShip, "horizontal");
  testGameboard.receiveAttack(2, 2);
  expect(testGameboard.attacks[2][2]).toBe(true);
});

test("Tests to invalidate a board hit on an already hit tile", () => {
  const testGameboard = new Gameboard();
  const testShip = new Ship(3);
  testGameboard.placeShip(2, 2, testShip, "horizontal");
  testGameboard.receiveAttack(2, 2);
  expect(testGameboard.isValidAttack(2, 2)).toBe(false);
});

test("Tests to check if all ships have been sunken", () => {
  const testGameboard = new Gameboard();
  const testShip = new Ship(3);
  testGameboard.placeShip(2, 2, testShip, "horizontal");
  testGameboard.receiveAttack(2, 2);
  testGameboard.receiveAttack(3, 2);
  testGameboard.receiveAttack(4, 2);
  expect(testGameboard.checkAllSunk()).toBe(true);
});
