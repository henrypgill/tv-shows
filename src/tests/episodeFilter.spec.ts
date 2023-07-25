import { searchNameOrSummary } from "../core/episodeFilter";
import episodes from "../data/got-episodes.json";

// Testing specifically game of thrones episodes from local JSON data
// TODO: Update episode data when we move to using fetch

test("test search string found in name", () => {
  const result = episodes.filter(searchNameOrSummary("Kingsroad"));

  expect(result.length).toBe(1);
  expect(result[0].id).toBe(4953);
});

test("test search string found in summary", () => {
  const result = episodes.filter(searchNameOrSummary("Hound"));

  expect(result.length).toBe(2);

  expect(result[0].id).toBe(4976);
  expect(result[1].id).toBe(4984);
});
