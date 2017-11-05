import React, { Component } from 'react'
import styled from 'styled-components'
import { array } from 'prop-types'
import Note from './Note'

const Notes = (props) => (
  <NotesContainer>
    {props.notes.map((note, i) => (
      <Note
        key={i} 
        {...note}
			/>
		))}
  </NotesContainer>
)

const NotesContainer = styled.div`
  grid-area: noteslist;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

Notes.propTypes = {
  notes: array
}

export default Notes
