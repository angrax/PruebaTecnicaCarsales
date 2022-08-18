export * from './character.service';
import { CharacterService } from './character.service';
export * from './episode.service';
import { EpisodeService } from './episode.service';
export const APIS = [CharacterService, EpisodeService];
