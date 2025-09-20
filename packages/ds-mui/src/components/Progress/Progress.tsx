import CircularProgress from '@mui/material/CircularProgress';

export function Progress({ value }: { value: number }) {
  return (
    <div>
      <CircularProgress variant="determinate" value={value} />
    </div>
  );
}

export default Progress;
