import { globSync } from "glob";
import { pathToFileURL } from "url";
import { TestLoader } from "./test_loader.js";
import { TestGroup, isTestGroup } from "../types/testGroup.js";

/**
 * SimpleTestLoader is a class that implements the TestLoader interface.
 * This class loads test groups from files that match a provided glob pattern.
 *
 * @class
 * @implements {TestLoader}
 */
export class SimpleTestLoader implements TestLoader {
  /**
   * Creates an instance of SimpleTestLoader.
   * @param {string} globPattern - A glob pattern to match files.
   */
  constructor(private globPattern: string) {}

  /**
   * The run method asynchronously reads files that match the provided glob pattern,
   * imports each file as a module, filters out values in the module that are not test groups,
   * and then flattens the resulting array of test groups.
   *
   * It uses the "globSync" function to synchronously find filenames that match the glob pattern,
   * and the "pathToFileURL" function to convert the filename into a URL that can be used with dynamic imports.
   *
   * @returns {Promise<TestGroup[]>} A promise that resolves to an array of TestGroup.
   */
  async run(): Promise<TestGroup[]> {
    const fileNames = globSync(this.globPattern, { absolute: true });
    const allPromises = fileNames.map(async (fileName) => {
      const fileURL = pathToFileURL(fileName).toString();
      const module = await import(fileURL);
      const moduleValues = Object.values(module);
      return moduleValues.filter((value) => isTestGroup(value)) as TestGroup[];
    });
    const testGroups = await Promise.all(allPromises);
    return testGroups.flat();
  }
}
