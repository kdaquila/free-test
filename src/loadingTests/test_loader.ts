import { TestGroup } from "../types/testGroup.js";

export type TestLoader = {
  run: () => Promise<TestGroup[]>;
};
