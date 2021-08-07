import * as React from "react"
import { Container, useColorMode, Button, Heading, Text, Link, Divider } from "@chakra-ui/react"
import MultiContainer from "./components/multi-container"

function App() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <main>
      <Button position='fixed' right='1rem' top='1rem' onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <Container>
        <Heading as='h1'>Chakra UI: Advanced Multipart Components</Heading>
        <Text sx={{ mt: 3, mb: 3 }}>
          This example page showcases a custom made "Container" component that supports light/dark mode, variants and
          color schemes. It's two parts (Outer and Inner) and thus supports fullbleed layouts, normal constrained ones
          and different styles for both containers.
        </Text>
        <Text sx={{ mb: 3 }}>To learn more about this head to the long in-depth explanation: LINK</Text>
        <Text>
          Created by{" "}
          <Link fontWeight='bold' href='https://www.lekoarts.de'>
            lekoarts.de
          </Link>
          . Read the source code on{" "}
          <Link fontWeight='bold' href='https://www.github.com/LekoArts/chakra-ui-advanced-multipart-components'>
            GitHub
          </Link>
          .
        </Text>
      </Container>
      <Divider />
      <MultiContainer>
        <Heading as='h2'>No Variant / No Color Scheme</Heading>
        <Text sx={{ mt: 3, mb: 3 }}>
          This Container has no variant set and also no color scheme. The size is also not set.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr.
        </Text>
      </MultiContainer>
      <MultiContainer variant='solid'>
        <Heading as='h2'>"Solid" Variant / Default Color Scheme</Heading>
        <Text sx={{ mt: 3, mb: 3 }}>
          This Container has the "solid" variant set and also uses the default color scheme "gray". The size is not set.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr.
        </Text>
      </MultiContainer>
      <MultiContainer variant='solid' colorScheme='purple'>
        <Heading as='h2'>"Solid" Variant / "Purple" Color Scheme</Heading>
        <Text sx={{ mt: 3, mb: 3 }}>
          This Container has the "solid" variant set and also uses the "purple" color scheme. The size is not set.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr.
        </Text>
      </MultiContainer>
      <MultiContainer variant='ghost' colorScheme='blue'>
        <Heading as='h2'>"Ghost" Variant / "Blue" Color Scheme</Heading>
        <Text sx={{ mt: 3, mb: 3 }}>
          This Container has the "ghost" variant set and also uses the "blue" color scheme. The size is not set.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr.
        </Text>
      </MultiContainer>
      <MultiContainer variant='gradient' colorScheme='orange'>
        <Heading as='h2'>"Gradient" Variant / "Orange" Color Scheme</Heading>
        <Text sx={{ mt: 3, mb: 3 }}>
          This Container has the "gradient" variant set and also uses the "Orange" color scheme. The size is not set.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr.
        </Text>
      </MultiContainer>
      <MultiContainer size='prose'>
        <Heading as='h2'>No Variant / No Color Scheme / "Prose" Size</Heading>
        <Text sx={{ mt: 3, mb: 3 }}>
          This Container has no variant set and also no color scheme. The size is set to "prose".
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr.
        </Text>
      </MultiContainer>
      <MultiContainer variant='ghost' size='3/4'>
        <Heading as='h2'>"Ghost" Variant / No Color Scheme / "3/4" Size</Heading>
        <Text sx={{ mt: 3, mb: 3 }}>
          This Container has the "ghost" variant set and also no color scheme. The size is set to "3/4" which equals
          75%.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr.
        </Text>
      </MultiContainer>
    </main>
  )
}

export default App
