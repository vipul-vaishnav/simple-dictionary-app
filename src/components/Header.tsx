import { FC, ReactElement } from 'react'
import { Box, Divider, Group, Switch, Select, useMantineTheme } from '@mantine/core'
import { IconBook, IconChevronDown, IconMoonStars, IconSun, IconTypography } from '@tabler/icons-react'
import { IHeader } from './interfaces/IHeader'
import { Font } from '../types/Font'

const Header: FC<IHeader> = (props): ReactElement => {
  const { font, setFont, colorScheme, toggleTheme } = props
  const theme = useMantineTheme()
  const handleChange = (font: Font) => {
    setFont(font)
    localStorage.setItem('mantineFont', font)
  }

  return (
    <Box
      component={'header'}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 0' }}
    >
      <IconBook size={42} color={theme.colors.gray[3]} />
      <Group>
        <Select
          value={font}
          variant="unstyled"
          transition="pop-top-left"
          transitionDuration={80}
          transitionTimingFunction="ease"
          onChange={handleChange}
          icon={<IconTypography size={14} color={theme.colors.grape[7]} />}
          rightSection={<IconChevronDown size={16} color={theme.colors.grape[7]} />}
          rightSectionWidth={32}
          styles={{ rightSection: { pointerEvents: 'none' }, root: { width: 200 } }}
          data={[
            { label: 'Serif', value: Font.serif },
            { label: 'Sans-Serif', value: Font.sansSerif },
            { label: 'Monospace', value: Font.monospace }
          ]}
        />
        <Divider orientation="vertical" />
        <Group position="center">
          <Switch
            size="lg"
            checked={colorScheme === 'dark'}
            onClick={toggleTheme}
            color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
            onLabel={<IconSun size={20} stroke={2.5} color={theme.colors.grape[7]} />}
            offLabel={<IconMoonStars size={20} stroke={2.5} color={theme.colors.grape[5]} />}
          />
        </Group>
      </Group>
    </Box>
  )
}

export default Header
