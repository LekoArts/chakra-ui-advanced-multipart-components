import { extendTheme, ThemeConfig } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import Container from "./chakra/container"
import CustomContainer from "./chakra/custom-container"

const breakpoints = createBreakpoints({
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
})

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
}

const theme = extendTheme({
  components: {
    Container,
    CustomContainer,
  },
  breakpoints,
  config,
})

export default theme
