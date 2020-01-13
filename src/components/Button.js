import React  from "react";
import Button from "@material-ui/core/Button"
import { useNode } from "@craftjs/core";
const Buttonja = ({size, variant, primary, children}) => {
  const { connectors: {connect, drag} } = useNode();
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

export default Buttonja