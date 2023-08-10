export function getEpisodeCode(season: number, episode: number): string {
  let seasonCode: string;

  if (season < 10) {
    seasonCode = `S0${season}`;
  } else {
    seasonCode = `S${season}`;
  }

  let episodeCode: string;
  if (episode < 10) {
    episodeCode = `E0${episode}`;
  } else {
    episodeCode = `E${episode}`;
  }

  return seasonCode + episodeCode;
}
