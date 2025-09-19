import MUIPaper from '@mui/material/Paper';
import MUIPaperTitle from '@mui/material/Typography';
import MUIDivider from '@mui/material/Divider';

export function Paper() {
  return (
    <MUIPaper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
      <MUIPaperTitle variant="h3">Welcome to Paper!</MUIPaperTitle>
      <MUIDivider sx={{ my: 2 }} />
    </MUIPaper>
  );
}

export default Paper;
