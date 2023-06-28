import chalk from "chalk";
import { TestGroup } from "../types/testGroup.js";
import { ResultsPrinter } from "./resultsPrinter.js";

/**
 * The simpleResultsPrinter is an object that implements the ResultsPrinter interface.
 * It's responsible for printing the results of test groups.
 *
 * @type {ResultsPrinter}
 */
export const simpleResultsPrinter: ResultsPrinter = {
  /**
   * The run method takes an array of test groups as an argument,
   * prints the name of each test group, the result of each test in the group,
   * and finally the statistics of passed and failed tests.
   *
   * It uses the "chalk" library to color the output based on the status of the tests.
   *
   * @param {TestGroup[]} testGroups - An array of TestGroup.
   */
  run(testGroups: TestGroup[]) {
    let nPassed = 0;
    let nFailed = 0;
    let nTests = 0;
    testGroups.forEach((testGroup) => {
      // Print group name
      console.log(`${testGroup.name}`);

      testGroup.tests.forEach((test) => {
        // Print test result
        const space = " ".repeat(6);
        const status = `${
          test.result?.status === "passed"
            ? chalk.green(test.result?.status)
            : test.result?.status === "failed"
            ? chalk.red(test.result?.status)
            : ""
        }`;
        const message =
          test.result?.message != null
            ? `, message: ${test.result.message}`
            : "";
        const stack =
          test.result?.stack != null ? `, stack: ${test.result.stack}` : "";
        console.log(`${space}${status}: ${test.name}${message}`);

        // Update statistics
        if (test.result?.status === "passed") {
          nPassed += 1;
        } else if (test.result?.status === "failed") {
          nFailed += 1;
        }
        nTests += 1;
      });
    });

    // Print statistics
    console.log(chalk.green(`Total Passed: ${nPassed}/${nTests}`));
    console.log(
      (nFailed > 0 ? chalk.red : chalk.white)(
        `Total Failures: ${nFailed}/${nTests}`
      )
    );
  },
};
