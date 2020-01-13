import React from 'react'
import Paper from '@material-ui/core/Paper'
import { useNode } from "@craftjs/core"
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Slider from '@material-ui/core/Slider'
import ColorPicker from 'material-ui-color-picker'

const Wrapper = ({background, padding = 0, children}) => {
  const { connectors: {connect, drag} } = useNode()
  return (
    <Paper 
      ref={ref => connect(drag(ref))}
      style={{margin: "5px 0", background, padding: `${padding}px`}}
    >
      {children}
    </Paper>
  )
}

export const WrapperSettings = () => {
  const { background, padding, setProp } = useNode(node => ({
    background: node.data.props.background,
    padding: node.data.props.padding
  }));
  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Background</FormLabel>
        <ColorPicker defaultValue={background || '#000'} onChange={color => {
          setProp(props => props.background = color)
        }} />
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Padding</FormLabel>
        <Slider defaultValue={padding} onChange={(_, value) => setProp(props => props.padding = value)} />
      </FormControl>
    </div>
  )
}
Wrapper.craft = {
  related: {
    settings: WrapperSettings
  }
}

export default Wrapper