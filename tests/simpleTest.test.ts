import { expect } from "chai";
import { TestGroup } from "../src/types/testGroup";

export const simpleTestGroup: TestGroup = {
  name: "Simple Test",
  tests: [
    {
      name: "Simple Test",
      test: () => {
        const a = 1;
        expect(a).to.equal(1);
      },
    },
  ],
};
