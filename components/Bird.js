import Matter from 'matter-js'
import React from 'react'

const Bird = props => {
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y

    const xBody = props.body.position.x - widthBody /2
    const yBody = props.body.position.y - heightBody /2

    const colour = props.colour;

    return(
        <View style={{
            borderWidth: 1,
            borderColour: colour,
            borderStyle: 'solid',
            position: 'absolute',
            left: xBody,
            top: yBody,
            width: widthBody,
            height: heightBody,
        }}/>
    )
}

export default (world, colour, pos, size) => {
  const initialBird = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        {label: 'Bird'}
  ) 
  Matter.World.add(world, initialBird)

  return{
    body: initialBird,
    colour,
    pos,
    renderer: <Bird/>
  }
}

