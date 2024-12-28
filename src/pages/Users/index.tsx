import { useState, useMemo } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { userStorage } from '../../lib/storage/userStorage';
import FilterToolbar from '../../components/table/FilterToolbar';
import { filterData } from '../../utils/filterData';

export default function Users() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [users] = useState(() => userStorage.getAll());
  const [filters, setFilters] = useState<Record<string, string>>({});

  const filterOptions = [
    { field: 'fullName', label: 'Name' },
    { field: 'email', label: 'Email' }
  ];

  const filteredUsers = useMemo(() => 
    filterData(users, filters),
    [users, filters]
  );

  const columns: GridColDef[] = [
    { 
      field: 'id', 
      headerName: 'ID', 
      width: 220,
      flex: 1,
      minWidth: 150,
      hide: isMobile 
    },
    { 
      field: 'fullName', 
      headerName: 'Full Name', 
      width: 200,
      flex: 1,
      minWidth: 150 
    },
    { 
      field: 'email', 
      headerName: 'Email', 
      width: 250,
      flex: 1,
      minWidth: 200 
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      width: 200,
      flex: 1,
      minWidth: 150,
      hide: isMobile,
      valueFormatter: (params) => new Date(params.value).toLocaleString(),
    },
  ];

  const handleFilterChange = (field: string, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Box sx={{ 
      height: { xs: 'calc(100vh - 120px)', sm: 600 }, 
      width: '100%', 
      p: { xs: 1, sm: 3 } 
    }}>
      <Typography variant="h5" gutterBottom sx={{ px: { xs: 1, sm: 0 } }}>
        Users
      </Typography>
      <FilterToolbar
        filters={filters}
        filterOptions={filterOptions}
        onFilterChange={handleFilterChange}
      />
      <DataGrid
        rows={filteredUsers}
        columns={columns}
        pageSizeOptions={[10, 25, 50]}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        sx={{
          '& .MuiDataGrid-cell': {
            wordBreak: 'break-word'
          }
        }}
      />
    </Box>
  );
}