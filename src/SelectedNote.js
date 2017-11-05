import React, { Component } from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'

const SelectedNote = (props) => (
  <SelectedNoteContainer>
    <p>Hey{props.text}</p>
  </SelectedNoteContainer>
)

const SelectedNoteContainer = styled.div`
  grid-area: note;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export default SelectedNote
