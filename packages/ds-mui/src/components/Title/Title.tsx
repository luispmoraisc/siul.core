import { Divider, Typography } from '@mui/material';

export function Title() {
  return (
    <div>
      <Divider />
      <Typography variant="h1" color="info">
        Welcome to Title!
      </Typography>
      <Divider />
    </div>
  );
}

export default Title;
