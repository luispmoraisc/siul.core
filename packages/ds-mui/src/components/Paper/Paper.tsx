import MUIPaper from '@mui/material/Paper';

export function Paper() {
  return (
    <MUIPaper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
      <h1>Welcome to Paper!</h1>
    </MUIPaper>
  );
}

export default Paper;
