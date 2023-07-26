import episodes from "../data/got-episodes.json";
import { getEpisodes } from "../core/fetchData";

// Testing specifically game of thrones episodes from local JSON data
// TODO: Update episode data when we move to using fetch

test("test fetch data is correct as of 26/07/2023 at 13:46:48 pm", async () => {
  const fetchedEpisodes = await getEpisodes(82);

  expect(fetchedEpisodes.length).toBe(episodes.length);
  expect(fetchedEpisodes[0]).toEqual(episodes[0]);
});
