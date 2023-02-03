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
            <Input value={value} setValue={setValue} />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus at commodi hic voluptatum non nemo
            molestias inventore impedit tenetur similique velit, ut explicabo nostrum cum deleniti pariatur rerum enim
            suscipit assumenda aliquam quidem ex accusantium est cupiditate. Minima, ullam? Asperiores deserunt qui
            voluptate voluptas, illum ullam, natus rem eveniet sunt odit, corporis itaque perferendis est repellat
            eaque. Error iure sit aliquam at rem vero libero dolore quis explicabo praesentium enim voluptatum eos velit
            obcaecati molestias nostrum eius nesciunt, quam porro. Voluptatibus harum eum nisi sint maxime natus
            eligendi, quam nemo sapiente. Architecto sit perferendis debitis dolor nihil omnis similique, non, ex a
            quidem odio sed harum ea quos minus. Nemo nostrum sequi ipsum obcaecati, aperiam et ullam rem sapiente
            dolorum vel saepe voluptates ratione rerum officiis. Laudantium repudiandae libero obcaecati quis expedita
            quas vel quod quae necessitatibus accusantium, cupiditate eos iusto! Nam, temporibus. Accusamus pariatur
            dolore laborum fugit. Porro sed dolor eaque, corporis, accusantium natus provident, rem amet corrupti
            delectus exercitationem ducimus vitae nisi sit! Laboriosam quia molestiae corporis, fugit modi quibusdam vel
            sint tenetur nisi aliquam officiis nesciunt impedit deserunt dolorum consequuntur numquam illo distinctio
            harum aspernatur provident soluta nobis! Similique, cumque. Voluptas et ratione facere, exercitationem in
            magni.
          </Container>
        </Entry>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
