import { useState, useEffect } from 'react'
import { MantineProvider, MantineTheme, ColorSchemeProvider, ColorScheme, Container, Title, Box } from '@mantine/core'
import { NotificationsProvider, showNotification, updateNotification } from '@mantine/notifications'
import { Font } from './types/Font'
import Header from './components/Header'
import Input from './components/Input'
import { IconCheck, IconX } from '@tabler/icons-react'
import axios from 'axios'
import { Word as State } from './types/Response'
import Word from './components/Word'

const BASE_URL = import.meta.env.VITE_BASE_URL

const App = () => {
  const [font, setFont] = useState<Font>(Font.sansSerif)
  const [state, setState] = useState<State | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
  const toggleColorScheme = () => setColorScheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  const theme: Partial<MantineTheme> = { fontFamily: font, colorScheme, primaryColor: 'grape' }
  const handleClick = () => {
    toggleColorScheme()
    localStorage.setItem('mantineTheme', colorScheme === 'dark' ? 'light' : 'dark')
  }
  const handleSearch = async () => {
    if (!value || value.trim().length === 0) {
      showNotification({
        title: 'Invalid search term',
        message: 'Empty input cannot be searched!, try a non empty search term',
        color: 'red',
        icon: <IconX size={16} />
      })
      return
    }

    try {
      setLoading(true)
      showNotification({
        loading: true,
        id: 'load-data',
        title: 'Please wait...',
        message: 'Searching for the word ' + value,
        color: 'grape',
        disallowClose: true,
        autoClose: false
      })
      const res = await axios.get<State[]>(BASE_URL + value)
      const data = res.data
      setState(() => {
        updateNotification({
          loading: false,
          id: 'load-data',
          color: 'teal',
          title: 'Complete',
          message: 'Search completed successfully!',
          icon: <IconCheck size={16} />,
          autoClose: 3000
        })
        return data[0]
      })
    } catch (error) {
      if (axios.isAxiosError(error)) {
        updateNotification({
          id: 'load-data',
          color: 'red',
          title: error.response?.data.title,
          message: error.response?.data.message,
          icon: <IconX size={16} />,
          autoClose: 3000
        })
      } else {
        updateNotification({
          id: 'load-data',
          color: 'red',
          title: (error as any).message || 'Unknown error',
          message: 'Something went wrong',
          icon: <IconX size={16} />,
          autoClose: 3000
        })
      }
    } finally {
      setLoading(false)
    }
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
        <NotificationsProvider>
          <Container>
            <Header font={font} setFont={setFont} colorScheme={colorScheme} toggleTheme={handleClick} />
            <Input value={value} setValue={setValue} handleSearch={handleSearch} loading={loading} />
            <Box sx={{ marginBlock: 18 }}>
              {!state && (
                <Title order={1} align="center">
                  Search for a word
                </Title>
              )}
              {state && <Word />}
            </Box>
          </Container>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
