import { ActionIcon, Box, TextInput, useMantineTheme } from '@mantine/core'
import { FC, ReactElement } from 'react'
import { IInput } from './interfaces/IInput'
import { IconSearch } from '@tabler/icons-react'

const Input: FC<IInput> = (props): ReactElement => {
  const { value, setValue } = props
  const theme = useMantineTheme()

  return (
    <Box sx={{ marginTop: 6, marginBottom: 12 }}>
      <TextInput
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        radius="lg"
        size="xl"
        variant="filled"
        rightSection={
          <ActionIcon variant="transparent" size="xl" color={theme.colors.grape[9]} p={3}>
            <IconSearch size={24} />
          </ActionIcon>
        }
        rightSectionWidth={72}
        placeholder="Search for a word..."
      />
    </Box>
  )
}

export default Input
