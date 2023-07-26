import { removeTags } from "../core/parseSummary";

test("p tags", () => {
  expect(removeTags("<p>hello</p>")).toBe("hello");
});

test("no p tags", () => {
  expect(removeTags("hello")).toBe("hello");
});

test("wierd p tags", () => {
  expect(removeTags("hello</p><p>")).toBe("hello");
});
