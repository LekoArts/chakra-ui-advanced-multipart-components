import { mode, transparentize, getColor, StyleFunctionProps } from "@chakra-ui/theme-tools"

type AccessibleColor = {
  bg?: string
  color?: string
}

/** Accessible color overrides for less accessible colors. */
export const accessibleColorMap: { [key: string]: AccessibleColor } = {
  yellow: {
    bg: "yellow.400",
    color: "black",
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
  },
}

export function variantSolid(props: StyleFunctionProps) {
  const { colorScheme: c } = props

  if (!c) {
    return {}
  }

  if (c === "gray") {
    const bg = mode(`gray.100`, `whiteAlpha.200`)(props)

    return {
      bg,
    }
  }

  const { bg = `${c}.500`, color = "white" } = accessibleColorMap[c] || {}

  const background = mode(bg, `${c}.200`)(props)

  return {
    bg: background,
    color: mode(color, `gray.800`)(props),
  }
}

export function variantGhost(props: StyleFunctionProps) {
  const { colorScheme: c, theme } = props

  if (c === "gray") {
    return {
      color: mode(`inherit`, `whiteAlpha.900`)(props),
      bg: mode(`gray.100`, `whiteAlpha.200`)(props),
    }
  }

  const transparentBgDark = transparentize(`${c}.200`, 0.12)(theme)
  const transparentBgLight = transparentize(`${c}.50`, 0.8)(theme)

  return {
    color: mode(`${c}.600`, `${c}.100`)(props),
    bg: mode(transparentBgLight, transparentBgDark)(props),
  }
}

export function variantGhostOuter(props: StyleFunctionProps) {
  const { colorScheme: c } = props

  if (c === "gray") {
    return {
      color: mode(`inherit`, `whiteAlpha.900`)(props),
      bg: mode(`gray.50`, `whiteAlpha.200`)(props),
    }
  }

  const bg = mode(`${c}.200`, `${c}.900`)(props)

  return {
    color: mode(`${c}.600`, `${c}.200`)(props),
    bg,
  }
}

export function variantGradient(props: StyleFunctionProps) {
  const { colorScheme: c, colorMode, theme } = props
  const isDarkMode = colorMode === "dark"

  if (!c) {
    return {}
  }

  if (c === "gray") {
    const topColor = isDarkMode ? getColor(theme, `${c}.700`) : getColor(theme, `${c}.100`)
    const bottomColor = isDarkMode ? getColor(theme, `${c}.900`) : getColor(theme, `${c}.300`)

    return {
      bg: `linear-gradient(0deg, ${bottomColor} 0%, ${topColor} 100%)`,
    }
  }

  const topColor = isDarkMode ? getColor(theme, `${c}.700`) : getColor(theme, `${c}.100`)
  const bottomColor = isDarkMode ? getColor(theme, `${c}.900`) : getColor(theme, `${c}.300`)

  return {
    bg: `linear-gradient(0deg, ${bottomColor} 0%, ${topColor} 100%)`,
  }
}

export function percentageWidths(divisions: number, part: string, property = "maxW") {
  let result: Record<typeof part, any> = {}

  for (let i = 1; i <= divisions; i++) {
    const name = i === divisions ? "full" : `${i}/${divisions}`
    const w = Number((i / divisions) * 100).toFixed(4)
    result[name] = {
      [part]: {
        [property]: `${+w}%`,
      },
    }
  }

  return result
}
