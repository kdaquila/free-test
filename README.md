## Overview

Free-Test is a Typescript testing library that offers maximum flexibility for those wishing to build their own custom testing system for Typescript.

Want to customize the way test results are printed? No problem.

Want to customize the way tests are loaded? Go ahead!

Out-of-the-box, Free-Test provides building blocks for the following:

- Dynamically loading tests
- Running tests
- Printing the test results to the console

It also provides a `SimplePipelineRunner` which can run tests out-of-the-box with all the default building blocks.

## Library Design

#### Dependency Injection

The library uses the constructor dependency injection pattern. So you can start of using the `SimplePipelineRunner` class, but then customize it by passing different loaders, runners, or printers to its constructor.

#### Javascript Engine

Free-Test gives you complete freedom to run tests using your preferred Javascript engine, like node.js, ts-node, tsx, etc. No global namespace pollution issues or tricky engine configuation issues to worry about.

#### API-only

Free-Test is intentionally API-only, so there are no CLI commands. It's recommended to simply call your top-level test script using `npm run test`

### Getting Started Example

1. Setup a typescript project

   ```
   > npm init -y
   > npm install typescript tsx
   > npm install free-test
   ```

1. Write a minimal, top-level script using `buildDefaultPipeline()`

   ```
   // runTests.ts

   const pipeline = buildDefaultPipeline("./tests/**/*.test.ts")

   pipeline.run();
   ```

1. Write a test using `TestGroup` type

   ```
   // tests/simpleTest.test.ts

   import { expect } from "chai";
   import { TestGroup } from "@kdaquila/free-test";

   export const simpleTestGroup: TestGroup = {
      name: "Simple Test Group",
      tests: [{
         name: "Simple Test",
         test: () => {
            const a = 1;
            expect(a).to.equal(1);
         },
   }]};
   ```

1. Run the script with your preferred Javascript engine (node.js, ts-node, tsx, etc.). For example,

   ```
   > npx tsx runtests.ts
   ```

1. Update `package.json` so you run tests with `npm run test`. For example:

   ```
   // package.json

   "scripts": {
   "test": "tsx runTests.ts"
   },
   ```
