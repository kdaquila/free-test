import { buildDefaultPipeline } from "./src/testingPipeline/buildDefaultPipeline.js";

const pipeline = buildDefaultPipeline("./tests/**/*.test.ts");

pipeline.run();
