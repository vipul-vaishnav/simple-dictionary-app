export type Word = {
  word: string
  phonetic: string
  phonetics?: PhoneticsEntity[] | null
  origin: string
  meanings?: MeaningsEntity[] | null
}
export type PhoneticsEntity = {
  text: string
  audio?: string | null
}
export type MeaningsEntity = {
  partOfSpeech: string
  definitions?: DefinitionsEntity[] | null
}
export type DefinitionsEntity = {
  definition: string
  example: string
  synonyms?: null[] | null
  antonyms?: null[] | null
}
