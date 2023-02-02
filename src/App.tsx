import { MantineProvider, Button } from '@mantine/core'
import React from 'react'

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Button>Click</Button>
    </MantineProvider>
  )
}

export default App