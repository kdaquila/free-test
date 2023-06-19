import * as z from "zod";

export const testResultSchema = z.object({
  status: z.enum(["passed", "failed"]).optional(),
  message: z.string().optional(),
  stack: z.string().optional(),
});

export type TestResult = z.infer<typeof testResultSchema>;

export const passingResult: TestResult = { status: "passed" };

export const buildFailedResult = (
  message: string,
  stack?: string
): TestResult => ({
  status: "failed",
  message,
  stack,
});
