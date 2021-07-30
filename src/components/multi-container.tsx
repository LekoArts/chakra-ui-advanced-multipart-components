import * as React from "react"
import { useMultiStyleConfig, Box, Container, BoxProps } from "@chakra-ui/react"

interface IMultiContainerProps extends BoxProps {
  variant?: "solid" | "gradient" | "ghost" | undefined
  colorScheme?: string
  size?: "prose" | "1/4" | "2/4" | "3/4" | "full"
}

const MultiContainer: React.FC<IMultiContainerProps> = ({
  variant = undefined,
  colorScheme = undefined,
  size = undefined,
  children,
  ...rest
}) => {
  const styles = useMultiStyleConfig(`CustomContainer`, { variant, colorScheme, size })

  return (
    <Box sx={{ ...styles.outer }} {...rest}>
      <Container sx={{ ...styles.inner }}>{children}</Container>
    </Box>
  )
}

export default MultiContainer
