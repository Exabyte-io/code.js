import { expect } from "chai";
import fs from "fs";
import yaml from "js-yaml";

import { flattenType } from "../../src/utils/yaml";
import { YAML_FLATTEN_FILE } from "../enums";

const flattenSchema = yaml.DEFAULT_SCHEMA.extend([flattenType]);

describe("YAML tag: !flatten", () => {
    const yamlFixture = fs.readFileSync(YAML_FLATTEN_FILE, "utf8");

    it("should convert an array of arrays into a flattened array", () => {
        const parsed = yaml.load(yamlFixture, { schema: flattenSchema });
        const expected = ["a", "b", "c", "d", "e", "f"];
        expect(parsed.case1).to.be.eql(expected);
    });
});
