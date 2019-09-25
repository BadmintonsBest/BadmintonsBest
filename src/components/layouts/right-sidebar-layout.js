import styled from "@emotion/styled"

import { rhythm } from "../../utils/typography"
import { BREAKPOINTS } from "../../constants/css-vars"

const RightSideBarLayout = styled("div")`
  @media ${BREAKPOINTS.MEDIUM} {
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    margin-left: -${rhythm(1.5)};
  }
`

export default RightSideBarLayout