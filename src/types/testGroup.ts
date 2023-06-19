import { z } from "zod";
import { singleTestSchema } from "./singleTest.js";

export const testGroupSchema = z.object({
  name: z.string(),
  tests: z.array(singleTestSchema),
});

export type TestGroup = z.infer<typeof testGroupSchema>;

export const isTestGroup = (x: unknown): x is TestGroup => {
  return testGroupSchema.safeParse(x).success;
};

export const toTestGroupType = (x: unknown): TestGroup | undefined => {
  return isTestGroup(x) ? x : undefined;
};
