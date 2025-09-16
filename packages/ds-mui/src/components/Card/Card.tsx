import MUICard from '@mui/material/Card';

export function Card() {
  return (
    <div>
      <MUICard elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
        <h1>Welcome to Card!</h1>
      </MUICard>
    </div>
  );
}

export default Card;
