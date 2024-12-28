import { Box, TextField, MenuItem, useTheme, useMediaQuery } from '@mui/material';

interface FilterOption {
  field: string;
  label: string;
  type?: 'text' | 'select';
  options?: { value: string; label: string; }[];
}

interface FilterToolbarProps {
  filters: Record<string, string>;
  filterOptions: FilterOption[];
  onFilterChange: (field: string, value: string) => void;
}

export default function FilterToolbar({ filters, filterOptions, onFilterChange }: FilterToolbarProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ 
      p: 2, 
      display: 'flex', 
      gap: 2,
      flexDirection: { xs: 'column', sm: 'row' },
      flexWrap: 'wrap'
    }}>
      {filterOptions.map((option) => (
        option.type === 'select' ? (
          <TextField
            key={option.field}
            select
            label={option.label}
            value={filters[option.field] || ''}
            onChange={(e) => onFilterChange(option.field, e.target.value)}
            sx={{ 
              minWidth: { xs: '100%', sm: 200 },
              flex: { xs: '1 1 100%', sm: '0 1 auto' }
            }}
            size="small"
          >
            <MenuItem value="">All</MenuItem>
            {option.options?.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </TextField>
        ) : (
          <TextField
            key={option.field}
            label={option.label}
            value={filters[option.field] || ''}
            onChange={(e) => onFilterChange(option.field, e.target.value)}
            sx={{ 
              minWidth: { xs: '100%', sm: 200 },
              flex: { xs: '1 1 100%', sm: '0 1 auto' }
            }}
            size="small"
          />
        )
      ))}
    </Box>
  );
}