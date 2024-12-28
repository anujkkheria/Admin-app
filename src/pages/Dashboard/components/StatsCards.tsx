import { Grid, Paper, Typography } from '@mui/material';
import { Users, FileText, Activity } from 'lucide-react';
import { userStorage } from '../../../lib/storage/userStorage';
import { logStorage } from '../../../lib/storage/logStorage';

export default function StatsCards() {
  const totalUsers = userStorage.getAll().length;
  const totalLogs = logStorage.getAll().length;
  const activeUsers = userStorage.getAll().filter(user => {
    const userLogs = logStorage.getByUserId(user.id);
    return userLogs.length > 0;
  }).length;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
        <Paper sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Users size={24} />
          <div>
            <Typography variant="h6">{totalUsers}</Typography>
            <Typography color="textSecondary">Total Users</Typography>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
          <FileText size={24} />
          <div>
            <Typography variant="h6">{totalLogs}</Typography>
            <Typography color="textSecondary">Total Logs</Typography>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Activity size={24} />
          <div>
            <Typography variant="h6">{activeUsers}</Typography>
            <Typography color="textSecondary">Active Users</Typography>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}