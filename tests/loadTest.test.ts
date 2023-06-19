import { expect } from "chai";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { SimpleTestLoader } from "../src/loadingTests/simpleTestLoader.js";
import { TestGroup } from "../src/types/testGroup.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToSimpleTest = join(__dirname, "simpleTest.test.ts");

export const testGroup1: TestGroup = {
  name: "Test Loader",
  tests: [
    {
      name: "Load a test",
      test: () => {
        const testLoader = new SimpleTestLoader(pathToSimpleTest);
        testLoader.run().then((testGroups) => {
          expect(testGroups[0].tests).to.have.lengthOf(1);
        });
      },
    },
  ],
};
