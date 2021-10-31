import { ComponentStyleConfig } from "@chakra-ui/react"

const Container: ComponentStyleConfig = {
  baseStyle: {
    w: "100%",
    mx: "auto",
    maxW: "960px",
    px: [4, 6],
    py: [8, 10],
  },
  defaultProps: {
    colorScheme: "gray",
  },
}

export default Container
