'use dom';

import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

type Props = {
  name: string;
  value: number;
  color: 'error' | 'info' | 'success' | 'primary';
};

export default function ProgressBar({ name, value, color }: Props) {
  return (
    <div style={{ width: '100%' }}>
      <Typography variant="body2" component="p">
        {name}
      </Typography>
      <LinearProgress
        value={value}
        variant="determinate"
        color={color}
        sx={{ mt: 0.5 }}
      />
    </div>
  );
}
