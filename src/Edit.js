import React, { Component } from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'

class Edit extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd(event) {
    event.preventDefault()
    this.props.addNote(this.state.text)
    this.setState({ text: '' })
  }

  handleUpdate(event) {
    event.preventDefault()

    this.props.updateNote(this.state.text)

    //Clear text input on submit
    this.setState({ text: '' })
  }

  handleChange(event) {
    let { value } = event.target
    this.setState({ text: value })
  }

  shouldComponentUpdate(nextProps) {
    if(nextProps !== this.props) {
      this.setState({ text: nextProps.selectedNote.text })
    }
    return true
  }

  render() {

    return (
      <EditContainer>
        <input
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button
          onClick={this.handleAdd}
        >Add Note</button>
        <button
          onClick={this.handleUpdate}>Update Note</button>
      </EditContainer>
    )
  }
}

const EditContainer = styled.div`
  grid-area: edit;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export default Edit
