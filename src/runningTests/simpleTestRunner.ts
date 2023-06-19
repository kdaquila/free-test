import { produce } from "immer";
import { TestGroup } from "../types/testGroup.js";
import { passingResult, buildFailedResult } from "../types/testResult.js";
import { TestRunner } from "./testRunner.js";

/**
 * The simpleTestRunner object implements the TestRunner interface.
 * It runs the provided test groups and modifies their state
 * using the produce function from the immer library.
 *
 * @type {TestRunner}
 */
export const simpleTestRunner: TestRunner = {
  /**
   * The run method takes an array of test groups as an argument,
   * and runs each test in each group.
   * If a test passes, the result is set to a passing result,
   * if a test fails, the result is set to a failed result.
   *
   * It uses the "immer" library's "produce" function to generate a new state based on the current state.
   *
   * @param {TestGroup[]} testGroups - An array of TestGroup.
   * @returns {TestGroup[]} An array of modified TestGroup.
   */
  run(testGroups: TestGroup[]) {
    return produce(testGroups, (draft) => {
      // Test Groups
      draft.forEach((testGroup) => {
        // Individual Tests
        testGroup.tests.forEach((test) => {
          try {
            test.test();
            // Passed
            test.result = passingResult;
          } catch (error) {
            // Failed
            if (error instanceof Error) {
              test.result = buildFailedResult(error.message, error.stack);
            }
          }
          return;
        });
      });
    });
  },
};
