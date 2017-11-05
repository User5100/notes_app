import React from 'react'

const Color = (props) => (
  <div 
    onClick={() => props.handleColorChange(props.name)}
    style={
		Object.assign(
			{},
			styles.container,
			{ border: `4px solid ${props.name}`}
    )
    } >
    <h4>{props.name.toUpperCase()}</h4>
  </div>
)

const styles = {
  container: {
    flex: 1
  }
}

export default Color
