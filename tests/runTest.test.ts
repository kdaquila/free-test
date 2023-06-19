import { expect } from "chai";
import { TestGroup } from "../src/types/testGroup.js";
import { simpleTestRunner } from "../src/runningTests/simpleTestRunner.js";
import { simpleTestGroup } from "./simpleTest.test.js";

export const testGroup1: TestGroup = {
  name: "Test Loader",
  tests: [
    {
      name: "Run a test",
      test: () => {
        const testResults = simpleTestRunner.run([simpleTestGroup]);
        expect(testResults[0].tests[0].result?.status).to.equal("passed");
      },
    },
  ],
};
