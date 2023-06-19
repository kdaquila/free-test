import { TestLoader } from "../loadingTests/test_loader.js";
import { ResultsPrinter } from "../printing/resultsPrinter.js";
import { TestRunner } from "../runningTests/testRunner.js";
import { PipelineRunner } from "./pipelineRunner.js";

/**
 * SimplePipelineRunner is a class that implements the PipelineRunner interface.
 * This class loads test groups, runs them, and prints the results.
 *
 * @class
 * @implements {PipelineRunner}
 */
export class SimplePipelineRunner implements PipelineRunner {
  /**
   * Creates an instance of SimplePipelineRunner.
   * @param {TestLoader} testLoader - An instance of TestLoader to load the tests.
   * @param {TestRunner} testRunner - An instance of TestRunner to run the tests.
   * @param {ResultsPrinter} resultsPrinter - An instance of ResultsPrinter to print the results.
   */
  constructor(
    private testLoader: TestLoader,
    private testRunner: TestRunner,
    private resultsPrinter: ResultsPrinter
  ) {}

  /**
   * The run method loads test groups using the provided TestLoader,
   * runs the loaded tests using the provided TestRunner,
   * and then prints the results using the provided ResultsPrinter.
   *
   * @returns {Promise<void>} A promise that resolves when all tests have been run and their results have been printed.
   */
  async run() {
    const testGroups = await this.testLoader.run();

    const testGroupsWithResults = this.testRunner.run(testGroups);

    this.resultsPrinter.run(testGroupsWithResults);
  }
}
