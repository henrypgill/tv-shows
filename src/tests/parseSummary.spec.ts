import { removePTags } from "../core/parseSummary";

test("p tags", () => {
  expect(removePTags("<p>hello</p>")).toBe("hello");
});

test("no p tags", () => {
  expect(removePTags("hello")).toBe("hello");
});

test("wierd p tags", () => {
  expect(removePTags("hello</p><p>")).toBe("hello");
});
