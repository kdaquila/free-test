import { TestGroup } from "../types/testGroup.js";

export type TestRunner = {
  run: (testGroups: TestGroup[]) => TestGroup[];
};
