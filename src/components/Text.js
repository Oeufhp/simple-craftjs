import React, { useState, useEffect } from "react"
import { useNode } from "@craftjs/core"
import ContentEditable from 'react-contenteditable'
import Slider from '@material-ui/core/Slider'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

const Text = ({text, fontSize}) => {
  const { connectors: {connect, drag}, selected, dragged, setProp } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged
  }))

  const [editable, setEditable] = useState(false)
  useEffect(() => {
    !selected && setEditable(false)
  }, [selected])

  return (
      <div 
        ref={ref => connect(drag(ref))}
        onClick={e => setEditable(true)}
      >
        <ContentEditable
          disabled={!editable}
          html={text}
          onChange={e => 
            setProp(props => props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
          }
          tagName="p"
          style={{fontSize: `${fontSize}px`}}
        />
        {
          selected && (
            <FormControl className='text-additional-settings' size="small">
              <FormLabel component="legend">Font Size</FormLabel>
              <Slider
                defaultValue={fontSize}
                step={1}
                min={7}
                max={50}
                valueLabelDisplay="auto"
                onChange={(_, value) => {
                  setProp(props => props.fontSize = value)
                }}
              />
            </FormControl>
          )
        }
      </div>
  )
}

const TextSettings = () => {
  const { setProp, fontSize } = useNode((node) => ({
    fontSize: node.data.props.fontSize
  }));
  return (
    <>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Font size</FormLabel>
        <Slider
          value={fontSize || 7}
          step={7}
          min={1}
          max={50}
          onChange={(_, value) => {
            setProp(props => props.fontSize = value);
          }}
        />
      </FormControl>
    </>
  )
}

Text.craft = {
  rules: {
    canDrag: (node) => node.data.props.text !== "Drag"
  },
  related: {
    settings: TextSettings
  }
}
export default Text

