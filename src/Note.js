import React, { Component } from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'

const Note = (props) => (
  <NoteContainer>
    <div
      className='mouse'
      style={
        Object.assign(
          {},
          styles.note,
          { background: `${props.color}` }
        )} >
    <p>{props.text}</p>
    </div>
  </NoteContainer>
)

const NoteContainer = styled.div`
  border: 1px solid black;
  flex: 1;
`

const styles = {
  note: {
    width: '50%',
    height: '50%'
  }
}

Note.propTypes = {
  text: string
}

export default Note
