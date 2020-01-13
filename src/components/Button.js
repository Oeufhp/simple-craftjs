import React  from "react";
import Button from "@material-ui/core/Button"
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import { useNode } from "@craftjs/core";
const Buttonja = ({size, variant, primary, children}) => {
  const { connectors: {connect, drag} } = useNode(node => ({
    props: node.data.props
  }))
  return (
    <Button
      ref={ref => connect(drag(ref))}
      size={size} 
      variant={variant} 
      color={primary}
    >
      {children}
    </Button>
  )
}

const ButtonSettings = () => {
  const { setProp, props } = useNode((node) => ({
    props: node.data.props
  }));
  return (
    <div>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Size</FormLabel>
        <RadioGroup defaultValue={props.size} onChange={(e) => setProp(props => props.size = e.target.value )}>
          <FormControlLabel label="Small" value="small" control={<Radio size="small" color="primary" />} />
          <FormControlLabel label="Medium" value="medium" control={<Radio size="small" color="primary" />} />
          <FormControlLabel label="Large" value="large" control={<Radio size="small" color="primary" />} />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Variant</FormLabel>
        <RadioGroup defaultValue={props.variant} onChange={(e) => setProp(props => props.variant = e.target.value )}>
          <FormControlLabel label="Text" value="text" control={<Radio size="small" color="primary" />} />
          <FormControlLabel label="Outlined" value="outlined" control={<Radio size="small" color="primary" />} />
          <FormControlLabel label="Contained" value="contained" control={<Radio size="small" color="primary" />} />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Color</FormLabel>
        <RadioGroup defaultValue={props.color} onChange={(e) => setProp(props => props.color = e.target.value )}>
          <FormControlLabel label="Default" value="default" control={<Radio size="small" color="default" />} />
          <FormControlLabel label="Primary" value="primary" control={<Radio size="small" color="primary" />} />
          <FormControlLabel label="Seconday" value="secondary" control={<Radio size="small" color="primary" />} />
        </RadioGroup>
      </FormControl>
    </div>
  )
};
Buttonja.craft = {
  related: { 
    settings: ButtonSettings
  }
}

export default Buttonja