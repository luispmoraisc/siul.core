import { styled, Card as MUICard } from '@mui/material';

// Tokens package
import { SPACING_MD } from '@luispmoraisc/ds-tokens';

export const Card = styled(MUICard)({
  borderRadius: '8px',
  padding: SPACING_MD,
});
