import { useState } from 'react'
import { MantineProvider, MantineTheme, Button } from '@mantine/core'
import { Font } from './types/Font'
import Entry from './components/Entry'
import CustomFonts from './components/CustomFonts'

const App = () => {
  const [font, setFont] = useState<Font>(Font.sansSerif)

  const theme: Partial<MantineTheme> = { fontFamily: font }

  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <CustomFonts />
      <Entry>
        <Button onClick={() => {
          setFont(Font.serif)
        }}>Change Font to serif</Button>
        <Button onClick={() => {
          setFont(Font.sansSerif)
        }}>Change Font to sans-serif</Button>
        <Button onClick={() => {
          setFont(Font.monospace)
        }}>Change Font to monospace</Button>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit magni unde deleniti fugiat perspiciatis non optio adipisci possimus nisi. Repellat nesciunt sapiente suscipit maxime a cumque exercitationem iusto labore repellendus, ab consequuntur, consectetur error optio architecto corporis! Quasi molestias accusamus sapiente ad inventore tempore provident odit non est doloribus, dolore earum error aspernatur ullam quaerat debitis vero, laboriosam fuga soluta officiis suscipit ab. Ipsam, nemo. Corrupti, cumque delectus excepturi ut dolorem eum at molestiae quidem minus quas aliquam distinctio? Voluptates recusandae quisquam rem maiores illo dolorum amet, dolore itaque repellendus quidem id qui facere non assumenda sapiente provident, quo odit cumque ab pariatur! Rem molestiae eveniet illo, dolor impedit magnam eum, minima deserunt quis quidem nobis illum ducimus provident corrupti quo, accusantium ut eaque officiis sunt voluptatem laboriosam obcaecati. Fugit facere, quidem dolorum at minima distinctio maxime quae voluptas non magni officiis enim delectus temporibus corrupti possimus molestias, error reiciendis? Incidunt eius fuga asperiores, accusamus error vitae fugit odio non tempore dolorum vero voluptatem, voluptatibus quae libero atque architecto assumenda nihil corrupti voluptas eligendi hic officiis qui itaque. Architecto molestias mollitia neque laborum dolore tenetur ipsam voluptates, maxime laudantium, error sunt nobis tempora earum facilis cumque? Odit vel eos ducimus!
      </Entry>
    </MantineProvider>
  )
}

export default App