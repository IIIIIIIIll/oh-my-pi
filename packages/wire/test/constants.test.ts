import { describe, expect, it } from "bun:test";
import { INTENT_FIELD } from "../src";

describe("wire constants", () => {
	it("keeps the intent-tracing parameter key stable", () => {
		expect(INTENT_FIELD).toBe("i");
	});
});
