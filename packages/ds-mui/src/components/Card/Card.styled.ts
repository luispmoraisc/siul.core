import { styled, Card as MUICard } from '@mui/material';

// Tokens package
import { SPACING_MD } from '@luispmoraisc/ds-tokens';

export const Card = styled(MUICard)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  padding: SPACING_MD,
}));
