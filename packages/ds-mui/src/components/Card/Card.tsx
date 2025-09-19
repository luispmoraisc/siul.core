import MUICard from '@mui/material/Card';
import MUICardHeader from '@mui/material/CardHeader';
import MUICardContent from '@mui/material/CardContent';
import MUICardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

export function Card() {
  return (
    <div>
      <MUICard elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
        <MUICardHeader title="Card Title" subheader="Card Subheader" />
        <MUICardContent>
          This is an example of a Card component using Material-UI.
        </MUICardContent>
        <Divider />
        <MUICardActions>
          <Button size="small">Action 1</Button>
          <Button size="small">Action 2</Button>
        </MUICardActions>
      </MUICard>
    </div>
  );
}

export default Card;
