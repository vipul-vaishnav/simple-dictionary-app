import { Dispatch, SetStateAction } from 'react'

export interface IInput {
  value: string
  setValue: Dispatch<SetStateAction<string>>
}
