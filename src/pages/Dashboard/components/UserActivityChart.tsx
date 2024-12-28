import { Paper, Typography } from '@mui/material';
import { logStorage } from '../../../lib/storage/logStorage';

export default function UserActivityChart() {
  const logs = logStorage.getAll();
  
  // Group logs by date
  const groupedLogs = logs.reduce((acc, log) => {
    const date = new Date(log.createdAt).toLocaleDateString();
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        User Activity
      </Typography>
      {/* Chart implementation would go here */}
      <Typography color="textSecondary">
        Total Activities: {logs.length}
      </Typography>
    </Paper>
  );
}