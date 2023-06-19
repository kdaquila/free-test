import { TestGroup } from "../types/testGroup.js";

export type ResultsPrinter = {
  run: (testGroups: TestGroup[]) => void;
};
