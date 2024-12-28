import { Box, Grid } from '@mui/material';
import StatsCards from './components/StatsCards';
import UserActivityChart from './components/UserActivityChart';
import RecentLogs from './components/RecentLogs';

export default function Dashboard() {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <StatsCards />
        </Grid>
        <Grid item xs={12} md={8}>
          <UserActivityChart />
        </Grid>
        <Grid item xs={12} md={4}>
          <RecentLogs />
        </Grid>
      </Grid>
    </Box>
  );
}