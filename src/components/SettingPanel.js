import React from 'react'
import Box from '@material-ui/core/Box'
import Chip from '@material-ui/core/Chip'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Slider from '@material-ui/core/Slider'
import { useEditor } from '@craftjs/core'

const SettingPanel = () => {
  const { actions, selected } = useEditor((state, query) => {
    const currentNodeId = state.events.selected
    let selected
    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable()
      }
    }
    return {
      selected
    }
  })
  return selected ? (
    <Box bgcolor="rgba(0, 0, 0, 0.06)" mt={2} px={2} py={2}>
      <Grid container direction="column" spacing={0}>
        <Grid item>
          <Box pb={2}>
            <Grid container alignItems="center">
              <Grid item xs><Typography variant="subtitle1">Selected</Typography></Grid>
              <Grid item><Chip size="small" color="primary" label="Selected" /></Grid>
            </Grid>
          </Box>
        </Grid>
        {
          selected.settings && React.createElement(selected.settings)
        }
        {
          selected.isDeletable ? (
            <Button
              variant="contained"
              color="default"
              onClick={() => actions.delete(selected.id)}
            >
              Delete
            </Button>
          ) : null
        }
      </Grid>
    </Box>
  ) : null
}

export default SettingPanel