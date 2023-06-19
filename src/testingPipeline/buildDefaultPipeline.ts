import { SimpleTestLoader } from "../loadingTests/simpleTestLoader.js";
import { simpleResultsPrinter } from "../printing/simpleResultsPrinter.js";
import { simpleTestRunner } from "../runningTests/simpleTestRunner.js";
import { SimplePipelineRunner } from "./simplePipelineRunner.js";

export function buildDefaultPipeline(globPattern: string) {
  return new SimplePipelineRunner(
    new SimpleTestLoader(globPattern),
    simpleTestRunner,
    simpleResultsPrinter
  );
}
