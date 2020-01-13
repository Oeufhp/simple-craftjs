import React from "react";
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
const ToolBox = () => {
  return (
    <Box px={2} py={2}>
      <Grid container direction="column"  alignItems="center" justify="center" spacing={1}>
        <Box pb={2}>
          <Typography>Drag to add</Typography>
        </Box>
        <Grid container direction="column" item>
          <Button variant="contained">Button</Button>
        </Grid>
        <Grid container direction="column" item>
          <Button variant="contained">Text</Button>
        </Grid>
        <Grid container direction="column" item>
          <Button variant="contained">Wrapper</Button>
        </Grid>
        <Grid container direction="column" item>
          <Button variant="contained">Card</Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ToolBox