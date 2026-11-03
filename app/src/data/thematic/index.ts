import { ThematicTopic, ThematicSentence } from '../../types/thematic';
import { numbersTopic } from './topics/numbers';
import { calendarTopic } from './topics/calendar';
import { animalsTopic } from './topics/animals';
import { jobsTopic } from './topics/jobs';
import { familyTopic } from './topics/family';
import { colorsTopic } from './topics/colors';
import { foodTopic } from './topics/food';
import { placesTopic } from './topics/places';
import { verbsTopic } from './topics/verbs';
import { adjectivesTopic } from './topics/adjectives';
import { countriesTopic } from './topics/countries';

export { generateRandomSentence } from './generator';
export { playlistSections } from './sections';

export const thematicTopics: ThematicTopic[] = [
  numbersTopic,
  calendarTopic,
  animalsTopic,
  jobsTopic,
  familyTopic,
  colorsTopic,
  foodTopic,
  placesTopic,
  verbsTopic,
  adjectivesTopic,
  countriesTopic
];

export const allTypingSentences: ThematicSentence[] = thematicTopics.flatMap(t => t.sampleSentences);
