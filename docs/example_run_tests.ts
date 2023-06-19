import { buildDefaultPipeline } from "../src/testingPipeline/buildDefaultPipeline.js";

// Free Test is a typescript testing library that offers maximum flexibility for those wishing to build their own custom testing system.

// Free test is intentionally API-only, so there are no CLI commands.

// In order to use Free Test, write a script as shown below and then run it with your preferred javascript or typescript engine (node.js, ts-node, tsx, etc.)

const pipeline = buildDefaultPipeline("./tests/**/*.test.ts");

pipeline.run();
