import { FC, ReactElement, useState, useRef } from 'react'
import { IWord } from './interfaces/IWord'
import { ActionIcon, Anchor, Box, Divider, Flex, List, Space, Stack, Text, Title, useMantineTheme } from '@mantine/core'
import { IconPlayerPlayFilled, IconPlayerPauseFilled, IconExternalLink } from '@tabler/icons-react'

const Word: FC<IWord> = (props): ReactElement => {
  const [play, setPlay] = useState<boolean>(false)
  const ref = useRef<HTMLAudioElement>(null)
  const { word } = props
  const theme = useMantineTheme()
  const audio_src = word.phonetics?.find((item) => item.audio && item.audio.length > 0)?.audio || ''
  const handlePlayPause = () => {
    if (play) {
      ref.current?.pause()
      setPlay(false)
    } else {
      ref.current?.play()
      setPlay(true)
    }
  }
  ref.current?.addEventListener('ended', () => setPlay(false))

  console.log(word)

  return (
    <Box>
      <Flex justify={'space-between'} align={'center'} mb={24}>
        <Stack>
          <Title order={1} size={48} ff={theme.fontFamily}>
            {word.word}
          </Title>
          <Text fz={'xl'} fw={600} color={'grape'}>
            {word.phonetic}
          </Text>
        </Stack>
        <Box>
          <audio src={audio_src} ref={ref} />
          <ActionIcon
            disabled={audio_src === ''}
            onClick={handlePlayPause}
            radius={'xl'}
            variant="light"
            p={7}
            size={56}
            color={theme.colors.grape[8]}
          >
            {!play ? <IconPlayerPlayFilled size={28} /> : <IconPlayerPauseFilled size={28} />}
          </ActionIcon>
        </Box>
      </Flex>
      <Stack mb={12}>
        {word.meanings?.map((item, key) => {
          return (
            <Box key={key} my={12}>
              <Divider
                my="xs"
                label={
                  <>
                    <Title order={2} fs={'italic'} ff={theme.fontFamily}>
                      {item.partOfSpeech}
                    </Title>
                  </>
                }
              />
              <Title order={4} ff={theme.fontFamily} fw={400} color="gray">
                Meaning
              </Title>
              <Space h={18} />
              <Box>
                <List withPadding spacing={'md'}>
                  {item.definitions?.map((def, key) => {
                    return <List.Item key={key}>{def.definition}</List.Item>
                  })}
                </List>
              </Box>
              {item.synonyms && item.synonyms.length > 0 && (
                <>
                  <Space h={18} />
                  <Box>
                    <Title order={4} ff={theme.fontFamily} fw={400} color="gray">
                      Synonyms
                    </Title>
                  </Box>
                  <Space h={18} />
                  <List withPadding>
                    {item.synonyms.map((s, key) => {
                      return <List.Item>{s}</List.Item>
                    })}
                  </List>
                </>
              )}
              {item.antonyms && item.antonyms.length > 0 && (
                <>
                  <Space h={18} />
                  <Box>
                    <Title order={4} ff={theme.fontFamily} fw={400} color="gray">
                      Antonyms
                    </Title>
                  </Box>
                </>
              )}
            </Box>
          )
        })}
      </Stack>
      <Divider size="xs" />
      <Box mt={12}>
        <Text
          fz={18}
          color={theme.colorScheme === 'dark' ? theme.colors.gray[7] : theme.colors.gray[5]}
          display={'flex'}
        >
          Source
          <Anchor
            fz={16}
            fw={600}
            color={theme.colorScheme === 'dark' ? theme.colors.grape[8] : 'dark'}
            sx={{ marginLeft: 24, textDecoration: 'underline' }}
            href={word.sourceUrls ? word.sourceUrls[0] : ''}
          >
            {word.sourceUrls ? word.sourceUrls[0] : ''}
          </Anchor>
          <IconExternalLink />
        </Text>
      </Box>
    </Box>
  )
}

export default Word
