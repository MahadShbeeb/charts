import './App.css'
import { Grid, Paper } from '@mui/material';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import ScatterChart from './components/ScatterChart';
import MixedChart from './components/MixedChart';
import DoughnutChart from './components/DoughnutChart';
import BubbleChart from './components/BubbleChart';


function App() {

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper>
          <LineChart />
          <BarChart />
          <PieChart />
          <ScatterChart />
          <MixedChart />  
          <DoughnutChart />  
          <BubbleChart />   
        </Paper>
      </Grid>
    </Grid>
  )
}

export default App
