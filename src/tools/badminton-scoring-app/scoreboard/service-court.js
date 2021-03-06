import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

import { ReactComponent as Shuttlecock } from "./shuttlecock.svg"
import {
  COURT_LINES_COLOUR,
  SCOREBOARD_BG_COLOUR_HIGHLIGHT,
  SERVICE_SITUATION_SERVE,
  SERVICE_SITUATION_RECEIVE,
  SERVICE_SITUATION_INACTIVE,
} from "../constants"

const Container = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  overflow: hidden;

  border: 2px solid ${COURT_LINES_COLOUR};

  text-align: center;

  cursor: pointer;
  user-select: none;
  word-break: break-word;

  @media (orientation: portrait) {
    width: 50%;
  }

  .shuttlecock {
    display: none;
  }

  &.is-${SERVICE_SITUATION_SERVE} {
    color: ${SCOREBOARD_BG_COLOUR_HIGHLIGHT};

    .shuttlecock {
      display: inline-block;
      width: auto;
      height: 0.6em;
      margin-right: 0.2em;
      vertical-align: middle;

      fill: ${SCOREBOARD_BG_COLOUR_HIGHLIGHT};
    }
  }

  &.is-${SERVICE_SITUATION_RECEIVE} {
    background-color: ${SCOREBOARD_BG_COLOUR_HIGHLIGHT};
  }

  &.is-${SERVICE_SITUATION_INACTIVE} {
  }
`

const ServiceCourt = ({
  player: { id: playerdId, name },
  server: { id: serverId },
  receiver: { id: receiverId },
  side,
}) => {
  let is = SERVICE_SITUATION_INACTIVE

  if (playerdId === serverId) {
    is = SERVICE_SITUATION_SERVE
  } else if (playerdId === receiverId) {
    is = SERVICE_SITUATION_RECEIVE
  }

  return (
    <Container className={`is-${is}`}>
      <Shuttlecock className="shuttlecock" /> {name}
    </Container>
  )
}

ServiceCourt.propTypes = {
  player: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    team: PropTypes.string,
  }),
  server: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    team: PropTypes.string,
  }),
  side: PropTypes.string,
  receiver: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    team: PropTypes.string,
  }),
}

ServiceCourt.defaultProps = {
  player: {
    id: null,
    name: null,
    team: null,
  },
  server: {
    id: null,
    name: null,
    team: null,
  },
  receiver: {
    id: null,
    name: null,
    team: null,
  },
}

export default ServiceCourt
