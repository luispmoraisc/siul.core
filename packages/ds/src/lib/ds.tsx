import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function SiulCoreDs() {
  return (
    <>
      <Typography variant="h1">Welcome to siul.core!</Typography>
      <Divider />
      <Typography variant="body1">
        This is a design system package using Material-UI components.
      </Typography>
      <Button variant="contained" color="secondary">
        Click Me
      </Button>
    </>
  );
}

export default SiulCoreDs;
