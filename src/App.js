import React from 'react';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { Editor, Frame, Canvas } from "@craftjs/core";

import ToolBox from './components/ToolBox'
import SettingPanel from './components/SettingPanel'
import TopBar from './components/TopBar'
import Wrapper from './components/Wrapper'
import Buttonja from './components/Button'
import Card, { CardTop, CardBottom } from './components/Card'
import Text from './components/Text'


import './App.css';

function App() {
  return (
    <div className='App'>
      <Typography variant="h5" align="center">A super simple page editor</Typography>
      <Editor resolver={{ Card, Buttonja, Text, Wrapper, CardTop, CardBottom }}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Frame>
              <Canvas is={Wrapper} padding={5} background="#eee">
                <Card />
                <Buttonja size="small" variant="outlined">Click</Buttonja>
                <Text size="small" text="Hi world!" />
                <Canvas is={Wrapper} padding={6} background="#999">
                  <Text size="small" text="It's me again!" />
                </Canvas>
              </Canvas>
            </Frame>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              <ToolBox />
              <SettingPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}

export default App;
