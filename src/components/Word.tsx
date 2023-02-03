import { FC, ReactElement, useState, useRef } from 'react'
import { IWord } from './interfaces/IWord'
import { ActionIcon, Box, Flex, Stack, Text, Title, useMantineTheme } from '@mantine/core'
import { IconPlayerPlayFilled, IconPlayerPauseFilled } from '@tabler/icons-react'

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

  return (
    <Box>
      <Flex justify={'space-between'} align={'center'}>
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
      <p>==========================================================================</p>
      <Stack>
        {word.meanings?.map((item, key) => {
          return <div key={key}>{item.partOfSpeech}</div>
        })}
      </Stack>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores expedita voluptatum quis ex dicta maiores
      excepturi soluta ullam eveniet. Reiciendis in, est rerum blanditiis, dolor eum maxime ex ipsa fugiat dolores
      beatae nam culpa incidunt, necessitatibus a nemo corporis asperiores natus cumque excepturi earum ratione amet
      doloribus dolorum. Tempora necessitatibus voluptates consectetur sed consequuntur totam labore et quas facere?
      Recusandae atque, excepturi debitis libero, voluptas fugit officia est, id enim perferendis porro possimus ducimus
      quas. Incidunt adipisci repudiandae beatae numquam, mollitia eligendi porro ullam enim dicta explicabo recusandae
      voluptatibus maiores aut obcaecati. Facere quae possimus ipsam? Esse, nam vitae. Quo eius dolor incidunt
      consequuntur blanditiis labore corporis perferendis, assumenda, explicabo a eveniet nemo! Iure facilis repellendus
      est maxime. Repudiandae saepe, commodi ut officiis non hic obcaecati fugiat facilis odit nobis assumenda ad
      molestias autem enim veniam? Ducimus, voluptas nam necessitatibus voluptate delectus quibusdam deserunt cum magni
      inventore iure animi modi reprehenderit repellat corporis fugit laboriosam magnam numquam ab ea totam asperiores
      libero earum, similique harum. Possimus, quibusdam laborum! Iste ut non est obcaecati repudiandae labore officiis
      optio iure. Atque facere dignissimos velit illum alias reiciendis explicabo eveniet fugit expedita aut nulla animi
      natus sint nihil dolorum, minus saepe debitis repellat.
    </Box>
  )
}

export default Word
