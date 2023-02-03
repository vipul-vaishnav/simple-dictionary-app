import { Anchor, Center, Text } from '@mantine/core'

const Footer = () => {
  return (
    <Center>
      <Text>
        &copy;{' '}
        <Anchor href="https://github.com/vipul-vaishnav/" target="_blank" color="grape">
          Vipul Vaishnav
        </Anchor>{' '}
        | {new Date().getFullYear()}
      </Text>
    </Center>
  )
}

export default Footer
