import React from 'react'
import styled from 'styled-components'
import Color from './Color'

const Colors = (props) => (
  <ColorsContainer>
    {props.colors.map(color => (
      <Color
				handleColorChange={props.handleColorChange}
        key={color.id}
        {...color}
			/>
		))}
  </ColorsContainer>
)

const ColorsContainer = styled.div`
	grid-area: colorslist;
	border: 1px solid black;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export default Colors
