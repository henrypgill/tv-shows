import { getEpisodeCode } from "../core/episodeCode";

test("season number below 10", () => {
  expect(getEpisodeCode(1, 12)).toBe("S01E12");
});

test("episode number below 10", () => {
  expect(getEpisodeCode(10, 3)).toBe("S10E03");
});
