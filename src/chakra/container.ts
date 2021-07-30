import { ComponentStyleConfig } from "@chakra-ui/react"
import { variantSolid, variantGhost } from "./utils"

const variants = {
  solid: variantSolid,
  ghost: variantGhost,
}

const Container: ComponentStyleConfig = {
  baseStyle: {
    w: "100%",
    mx: "auto",
    maxW: "960px",
    px: [4, 6],
    py: [8, 10],
  },
  variants,
  defaultProps: {
    colorScheme: "gray",
  },
}

export default Container
