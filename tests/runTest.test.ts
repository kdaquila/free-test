import { expect } from "chai";
import { TestGroup } from "../src/types/testGroup";
import { simpleTestRunner } from "../src/runningTests/simpleTestRunner";
import { simpleTestGroup } from "./simpleTest.test";

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
