import Matter from 'matter-js'
import React from 'react'
import { View } from 'react-native'

const Obstacle = props => {
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

export default (world, label, colour, pos, size) => {
  const initialObstacle = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        {
            label,
            isStatic: true
        }
  ) 
  Matter.World.add(world, initialObstacle)

  return{
    body: initialObstacle,
    colour,
    pos,
    renderer: <Obstacle/>
  }
}

