import {deepEqual} from "assert";
import { Methods } from "../src/methods";
import { notEqualMessage } from "../consts/consts";
import {expect} from "chai";

describe("First test", () => {
    const numberArray = [1, 3, 2, 4, 9, 6, 7, 0]
    
  it("Correct work of asc sort", () => {
    const actualResult = Methods.sortNumberArray(numberArray, "asc");
    const expectedResult = [0, 1, 2, 3, 4, 6, 7, 9];
    
    expect (actualResult).to.be.equal(expectedResult);
   // deepEqual(actualResult, expectedResult, notEqualMessage);
  });
});

//  describe("Test", () => {
//      test("test", () => {
//          expect('string').toBe('string')
//      })
//  })