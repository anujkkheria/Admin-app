import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';
import { logStorage } from '../../../lib/storage/logStorage';

export default function RecentLogs() {
  const logs = logStorage.getAll()
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Recent Activity
      </Typography>
      <List>
        {logs.map((log) => (
          <ListItem key={log.id}>
            <ListItemText
              primary={log.action}
              secondary={new Date(log.createdAt).toLocaleString()}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}