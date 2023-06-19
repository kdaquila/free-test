import { z } from "zod";
import { testResultSchema } from "./testResult.js";

export type SingleTest = z.infer<typeof singleTestSchema>;

export const singleTestSchema = z.object({
  name: z.string(),
  test: z.function().returns(z.void()),
  result: testResultSchema.optional(),
});
