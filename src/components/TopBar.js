import React from "react";
import Box from '@material-ui/core/Box'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
const TopBar = () => {
  return (
    <Box px={1} py={1} mt={3} mb={1} bgcolor="#cbe8e7">
      <Grid container alignItems="center">
        <Grid item xs>
          <FormControlLabel
            control={<Switch checked={true} />}
            label="Enable"
          />
        </Grid>
        <Grid item>
          <Button size="small" variant="outlined" color="secondary">Serialize JSON to console</Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default TopBar