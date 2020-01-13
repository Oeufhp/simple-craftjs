import React from "react";
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { Canvas, useEditor } from '@craftjs/core'

import Wrapper from '../components/Wrapper'
import Buttonja from '../components/Button'
import Text from '../components/Text'
import Card from '../components/Card'

const ToolBox = () => {
  const { connectors, query } = useEditor();
  return (
    <Box px={2} py={2}>
      <Grid container direction="column"  alignItems="center" justify="center" spacing={1}>
        <Box pb={2}>
          <Typography>Drag to add</Typography>
        </Box>
        <Grid container direction="column" item>
          <Button 
            ref={ref => connectors.create(ref, <Buttonja size="small">Click me</Buttonja>)}
            variant="contained"
          >
            Button
          </Button>
        </Grid>
        <Grid container direction="column" item>
          <Button 
            ref={ref=> connectors.create(ref, <Text text="Hi world" />)}
            variant="contained"
          >
            Text
          </Button>
        </Grid>
        <Grid container direction="column" item>
          <Button
            ref={ref => connectors.create(ref, <Canvas is={Wrapper} padding={20} />)}
            variant="contained"
          >
            Wrapper
          </Button>
        </Grid>
        <Grid container direction="column" item>
          <Button
            ref={ref => connectors.create(ref, <Card/>)}
            variant="contained"
          >
            Card
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ToolBox