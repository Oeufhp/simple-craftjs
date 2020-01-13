import React from "react"
import { useNode, Canvas } from '@craftjs/core'

import Text from "./Text"
import Buttonja from "./Button"
import Wrapper from "./Wrapper"
import {WrapperSettings} from './Wrapper'

export const CardTop = ({ children }) => {
  const { connectors: { connect } } = useNode()
  return (
    <div ref={connect} className='text-only'>
      {children}
    </div>
  )
}

CardTop.craft = {
  rules: {
    canMoveIn: (incomingNode) => incomingNode.data.type === Text
  },
  related: {
    settings: WrapperSettings
  }
}

export const CardBottom = ({ children }) => {
  const { connectors: { connect } } = useNode()
  return (
    <div ref={connect} className='text-only'>
      {children}
    </div>
  )
}

CardBottom.craft = {
  rules: {
    canMoveIn: (incomingNode) => incomingNode.data.type === Buttonja
  },
  related: {
    settings: WrapperSettings
  }
}

const Card = ({ background, padding = 20 }) => {
  return (
    <Wrapper background={background} padding={padding}>
      <Canvas id="text">
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </Canvas>
      <Canvas id="buttons">
        <Buttonja size="small" text="Learn more" variant="contained" color="primary">Button ja</Buttonja>
      </Canvas>
    </Wrapper>
  )
}



export default Card