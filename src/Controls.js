import React, { Component } from 'react'
import styled from 'styled-components'

class Controls extends Component {
  constructor () {
    super()
  }
  render () {
    return (
      <ControlsContainer>
        <button
          onClick={this.props.removeNote}>Delete Note</button>
      </ControlsContainer>
    )
  }
}

const ControlsContainer = styled.div`
  grid-area: controls;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export default Controls
