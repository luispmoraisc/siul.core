import { styled, Card as MUICard } from '@mui/material';

// Tokens package
import { SPACING_MD, SPACING_BORDER_RADIUS_MD } from '@luispmoraisc/ds-tokens';

export const Card = styled(MUICard)({
  borderRadius: SPACING_BORDER_RADIUS_MD,
  padding: SPACING_MD,
});
