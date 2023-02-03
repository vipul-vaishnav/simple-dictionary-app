import { ActionIcon, Box, TextInput, useMantineTheme } from '@mantine/core'
import { FC, ReactElement } from 'react'
import { IInput } from './interfaces/IInput'
import { IconSearch } from '@tabler/icons-react'

const Input: FC<IInput> = (props): ReactElement => {
  const { value, setValue, handleSearch, loading } = props
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
          <ActionIcon
            onClick={handleSearch}
            disabled={loading}
            variant="transparent"
            size="xl"
            color={loading ? theme.colors.gray[6] : theme.colors.grape[9]}
            p={3}
          >
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
