import { ReactElement, FC } from 'react'
import { Global } from '@mantine/core'

import Poppins_400 from './../fonts/Poppins/Poppins-Regular.ttf'
import Poppins_500 from './../fonts/Poppins/Poppins-Medium.ttf'
import Poppins_600 from './../fonts/Poppins/Poppins-SemiBold.ttf'
import Poppins_700 from './../fonts/Poppins/Poppins-Bold.ttf'

import Playfair_Display_400 from './../fonts/Playfair_Display/static/PlayfairDisplay-Regular.ttf'
import Playfair_Display_500 from './../fonts/Playfair_Display/static/PlayfairDisplay-Medium.ttf'
import Playfair_Display_600 from './../fonts/Playfair_Display/static/PlayfairDisplay-SemiBold.ttf'
import Playfair_Display_700 from './../fonts/Playfair_Display/static/PlayfairDisplay-Bold.ttf'

import FiraCode_400 from './../fonts/Fira_Code/static/FiraCode-Regular.ttf'
import FiraCode_500 from './../fonts/Fira_Code/static/FiraCode-Medium.ttf'
import FiraCode_600 from './../fonts/Fira_Code/static/FiraCode-SemiBold.ttf'
import FiraCode_700 from './../fonts/Fira_Code/static/FiraCode-Bold.ttf'

const CustomFonts: FC = (): ReactElement => {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: "'Poppins', sans-serif",
            src: `url('${Poppins_700}') format("ttf")`,
            fontWeight: 700,
            fontStyle: 'normal'
          }
        },
        {
          '@font-face': {
            fontFamily: "'Poppins', sans-serif",
            src: `url('${Poppins_600}') format("ttf")`,
            fontWeight: 600,
            fontStyle: 'normal'
          }
        },
        {
          '@font-face': {
            fontFamily: "'Poppins', sans-serif",
            src: `url('${Poppins_500}') format("ttf")`,
            fontWeight: 500,
            fontStyle: 'normal'
          }
        },
        {
          '@font-face': {
            fontFamily: "'Poppins', sans-serif",
            src: `url('${Poppins_400}') format("ttf")`,
            fontWeight: 400,
            fontStyle: 'normal'
          }
        },
        {
          '@font-face': {
            fontFamily: "'Playfair Display', serif",
            src: `url('${Playfair_Display_700}') format("ttf")`,
            fontWeight: 700,
            fontStyle: 'normal'
          }
        },
        {
          '@font-face': {
            fontFamily: "'Playfair Display', serif",
            src: `url('${Playfair_Display_600}') format("ttf")`,
            fontWeight: 600,
            fontStyle: 'normal'
          }
        },
        {
          '@font-face': {
            fontFamily: "'Playfair Display', serif",
            src: `url('${Playfair_Display_500}') format("ttf")`,
            fontWeight: 500,
            fontStyle: 'normal'
          }
        },
        {
          '@font-face': {
            fontFamily: "'Playfair Display', serif",
            src: `url('${Playfair_Display_400}') format("ttf")`,
            fontWeight: 400,
            fontStyle: 'normal'
          }
        },
        {
          '@font-face': {
            fontFamily: "'Fira Code', monospace",
            src: `url('${FiraCode_700}') format("ttf")`,
            fontWeight: 700,
            fontStyle: 'normal'
          }
        },
        {
          '@font-face': {
            fontFamily: "'Fira Code', monospace",
            src: `url('${FiraCode_600}') format("ttf")`,
            fontWeight: 600,
            fontStyle: 'normal'
          }
        },
        {
          '@font-face': {
            fontFamily: "'Fira Code', monospace",
            src: `url('${FiraCode_500}') format("ttf")`,
            fontWeight: 500,
            fontStyle: 'normal'
          }
        },
        {
          '@font-face': {
            fontFamily: "'Fira Code', monospace",
            src: `url('${FiraCode_400}') format("ttf")`,
            fontWeight: 400,
            fontStyle: 'normal'
          }
        }
      ]}
    />
  )
}

export default CustomFonts
