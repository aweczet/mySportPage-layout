import { extendTheme, type ThemeConfig, withDefaultColorScheme } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme(withDefaultColorScheme({colorScheme: "blue"}), {config})

export default theme