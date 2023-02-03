import { ColorScheme } from "@mantine/core";
import { Font } from "../../types/Font";
import { Dispatch, SetStateAction } from "react"

export interface IHeader {
    font: Font
    setFont: Dispatch<SetStateAction<Font>>
    colorScheme: ColorScheme
    toggleTheme: () => void
}