import { useState, useEffect } from 'react'
import { MantineProvider, MantineTheme, ColorSchemeProvider, ColorScheme, Container } from '@mantine/core'
import { Font } from './types/Font'
import Entry from './components/Entry'
import Header from './components/Header'
import Input from './components/Input'

const App = () => {
  const [font, setFont] = useState<Font>(Font.sansSerif)
  const [value, setValue] = useState<string>('')
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
  const toggleColorScheme = () => {
    setColorScheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }
  const theme: Partial<MantineTheme> = { fontFamily: font, colorScheme, primaryColor: 'grape' }
  const handleClick = () => {
    toggleColorScheme()
    localStorage.setItem('mantineTheme', colorScheme === 'dark' ? 'light' : 'dark')
  }
  const handleSearch = () => {}

  useEffect(() => {
    if (localStorage.getItem('mantineFont') && localStorage.getItem('mantineFont') === Font.monospace) {
      setFont(Font.monospace)
    } else if (localStorage.getItem('mantineFont') && localStorage.getItem('mantineFont') === Font.serif) {
      setFont(Font.serif)
    } else if (localStorage.getItem('mantineFont') && localStorage.getItem('mantineFont') === Font.sansSerif) {
      setFont(Font.sansSerif)
    } else {
      localStorage.setItem('mantineFont', Font.sansSerif)
    }
  }, [])

  useEffect(() => {
    if (
      localStorage.mantineTheme === 'dark' ||
      (!('mantineTheme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setColorScheme('dark')
    } else {
      setColorScheme('light')
    }
  }, [])

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        <Entry>
          <Container>
            <Header font={font} setFont={setFont} colorScheme={colorScheme} toggleTheme={handleClick} />
            <Input value={value} setValue={setValue} handleSearch={handleSearch} />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo placeat, sequi possimus consequuntur nobis
            reprehenderit architecto neque sint quos. Quod magnam harum iure dignissimos architecto magni laborum
            asperiores facere aperiam saepe vitae dolor quo expedita tenetur ratione velit dolores vel consectetur, nemo
            tempore dolorum est ut! Quas est repudiandae magni!
          </Container>
        </Entry>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
