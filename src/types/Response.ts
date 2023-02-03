export type Word = {
  word: string
  phonetic: string
  phonetics?: PhoneticsEntity[] | null
  origin: string
  meanings?: MeaningsEntity[] | null
  sourceUrls?: string | null
}
export type PhoneticsEntity = {
  text: string
  audio?: string
  sourceUrl?: string
  license?: License
}
export type MeaningsEntity = {
  partOfSpeech: string
  definitions?: DefinitionsEntity[] | null
  synonyms?: (string | null)[] | null
  antonyms?: null[] | null
}
export type DefinitionsEntity = {
  definition: string
  synonyms?: null[] | null
  antonyms?: null[] | null
  example?: string | null
}

export type License = {
  name: string
  url: string
}
