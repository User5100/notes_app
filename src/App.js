import React, { Component } from 'react'
import styled from 'styled-components'
import Controls from './Controls'
import Notes from './Notes'
import SelectedNote from './SelectedNote'
import Edit from './Edit'
import Colors from './Colors'
import {
	getNotes,
	colors } from './helpers'

class App extends Component {
  constructor () {
    super()
    this.state = {
      selectedNote: null,
      notes: [],
      colors: colors
    }

    this.updateNote = this.updateNote.bind(this)
    this.addNote = this.addNote.bind(this)
    this.removeNote = this.removeNote.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
  }

  handleColorChange(color) {
    let { notes, selectedNote } = this.state

    selectedNote = Object.assign(
      {},
      selectedNote,
      { color })
    let { id } = selectedNote

    id = id || 1 // Bug

    notes = [
      ...notes.slice(0, id), 
      selectedNote,
      ...notes.slice(id + 1, notes.length)
    ]

    this.setState({ notes, selectedNote })


  }

  addNote(text) {
    let notes = this.state.notes
    
    notes.push({ 
      id: notes.length,
      text
    })

    this.setState({ notes })
  }

  removeNote() {
    let { notes, selectedNote } = this.state
    let { id } = selectedNote
    id = id || 1 // Bug

    notes = [...notes.slice(0, id), ...notes.slice(id + 1, notes.length)]

    this.setState({ notes, selectedNote: notes[0] })
  }

  updateNote(text) {
    let notes = this.state.notes
    let selectedNote = Object.assign(
      {},
      { text })
    let { id } = selectedNote

    id = id || 1 // Bug

    notes = [
      ...notes.slice(0, id), 
      selectedNote,
      ...notes.slice(id + 1, notes.length)
    ]

    this.setState({ notes, selectedNote })
  }

  componentDidMount () {
    getNotes().then(notes => {
      let selectedNote = notes[0]
      this.setState({ 
        notes,
        selectedNote })
    })
  }

  render () {
    let { notes, colors, selectedNote } = this.state

    return (
      <AppContainer>
        <Controls
          removeNote={this.removeNote}
        />
        <Notes
          notes={notes}
				/>
        <Colors
          handleColorChange={this.handleColorChange}
          colors={colors}
				/>
        <SelectedNote 
          selectedNote={selectedNote}
        />
        <Edit
          addNote={this.addNote} 
          selectedNote={selectedNote}
          updateNote={this.updateNote}
        />
      </AppContainer>
    )
  }
}

const AppContainer = styled.div`
	height: 100vh;
	display: grid;
	grid-gap: 8px;
	grid-template: 
		[ctrls-top] "controls controls controls" 3fr [ctrls-bottom]
		[display-top] "noteslist note colorslist" 4fr [display-bottom]
		[edit-top] "noteslist edit colorslist" 4fr [edit-bottom]
								/4fr 4fr 4fr;

`

export default App
