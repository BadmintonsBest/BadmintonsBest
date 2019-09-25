import styled from "@emotion/styled"

import { rhythm } from "../../utils/typography"
import { BREAKPOINTS } from "../../constants/css-vars"

const MainContent = styled("main")`
  @media ${BREAKPOINTS.MEDIUM} {
    flex: 1 1 70%;
    padding-left: ${rhythm(1.5)};
  }
`

export default MainContent