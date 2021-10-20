import { assert } from "https://deno.land/std@0.112.0/testing/asserts.ts";
import { v4 } from "https://deno.land/std@0.112.0/uuid/mod.ts";

import { V4UUID } from "./v4uuid.ts";

Deno.test("Validate generated UUID", () => {
  let passed = true;
  const count = 10_000;

  for (let i = 0; i < count; i++) {
    const uuid: string = new V4UUID().generate();
    const isValid: boolean = v4.validate(uuid);
    if (!isValid) {
      passed = false;
      break;
    }
  }
  assert(passed);
});
