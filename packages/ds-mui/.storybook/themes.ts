import { createTheme, ThemeOptions } from '@mui/material/styles';
import {
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_DARK_BLUE_MAIN,
  COLOR_LIGHT_BLUE_MAIN,
  COLOR_NEUTRAL_WHITE,
  COLOR_NEUTRAL_GRAY_100,
  COLOR_NEUTRAL_GRAY_500,
  COLOR_NEUTRAL_GRAY_900,
  COLOR_SEMANTIC_SUCCESS,
  COLOR_SEMANTIC_WARNING,
  COLOR_SEMANTIC_ERROR,
  COLOR_SEMANTIC_INFO,
  TYPOGRAPHY_SIZE_TITLE_XL,
  TYPOGRAPHY_SIZE_TITLE_LG,
  TYPOGRAPHY_SIZE_TITLE_MD,
  TYPOGRAPHY_SIZE_TITLE_SM,
  TYPOGRAPHY_SIZE_TITLE_XS,
  TYPOGRAPHY_SIZE_PARAGRAPH_LG,
  TYPOGRAPHY_WEIGHT_BOLD,
  TYPOGRAPHY_WEIGHT_REGULAR,
  TYPOGRAPHY_LINE_HEIGHT_TITLE_XL,
  TYPOGRAPHY_LINE_HEIGHT_TITLE_LG,
  TYPOGRAPHY_LINE_HEIGHT_TITLE_MD,
  TYPOGRAPHY_LINE_HEIGHT_TITLE_SM,
  TYPOGRAPHY_LINE_HEIGHT_TITLE_XS,
  TYPOGRAPHY_LINE_HEIGHT_PARAGRAPH_LG,
  SPACING_SM,
} from '@luispmoraisc/ds-tokens';

// Tema base compartilhado
const baseTheme: ThemeOptions = {
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: TYPOGRAPHY_SIZE_TITLE_XL,
      fontWeight: TYPOGRAPHY_WEIGHT_BOLD,
      lineHeight: TYPOGRAPHY_LINE_HEIGHT_TITLE_XL,
    },
    h2: {
      fontSize: TYPOGRAPHY_SIZE_TITLE_LG,
      fontWeight: TYPOGRAPHY_WEIGHT_BOLD,
      lineHeight: TYPOGRAPHY_LINE_HEIGHT_TITLE_LG,
    },
    h3: {
      fontSize: TYPOGRAPHY_SIZE_TITLE_MD,
      fontWeight: TYPOGRAPHY_WEIGHT_BOLD,
      lineHeight: TYPOGRAPHY_LINE_HEIGHT_TITLE_MD,
    },
    h4: {
      fontSize: TYPOGRAPHY_SIZE_TITLE_SM,
      fontWeight: TYPOGRAPHY_WEIGHT_BOLD,
      lineHeight: TYPOGRAPHY_LINE_HEIGHT_TITLE_SM,
    },
    h5: {
      fontSize: TYPOGRAPHY_SIZE_TITLE_XS,
      fontWeight: TYPOGRAPHY_WEIGHT_BOLD,
      lineHeight: TYPOGRAPHY_LINE_HEIGHT_TITLE_XS,
    },
    h6: {
      fontSize: TYPOGRAPHY_SIZE_PARAGRAPH_LG,
      fontWeight: TYPOGRAPHY_WEIGHT_BOLD,
      lineHeight: TYPOGRAPHY_LINE_HEIGHT_PARAGRAPH_LG,
    },
    body1: {
      fontSize: TYPOGRAPHY_SIZE_PARAGRAPH_LG,
      fontWeight: TYPOGRAPHY_WEIGHT_REGULAR,
      lineHeight: TYPOGRAPHY_LINE_HEIGHT_PARAGRAPH_LG,
    },
  },
  shape: {
    borderRadius: parseInt(SPACING_SM.replace('rem', '')) * 16, // Convert rem to px for MUI
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        title: {
          fontSize: TYPOGRAPHY_SIZE_TITLE_MD,
          fontWeight: TYPOGRAPHY_WEIGHT_BOLD,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: parseInt(SPACING_SM.replace('rem', '')) * 16,
          fontWeight: TYPOGRAPHY_WEIGHT_BOLD,
        },
      },
    },
  },
};

// Tema claro
export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    primary: {
      main: COLOR_PRIMARY,
      dark: COLOR_DARK_BLUE_MAIN,
      light: COLOR_LIGHT_BLUE_MAIN,
    },
    secondary: {
      main: COLOR_SECONDARY,
    },
    background: {
      default: COLOR_NEUTRAL_WHITE,
      paper: COLOR_NEUTRAL_WHITE,
    },
    text: {
      primary: COLOR_NEUTRAL_GRAY_900,
      secondary: COLOR_NEUTRAL_GRAY_500,
    },
    divider: COLOR_NEUTRAL_GRAY_100,
    success: {
      main: COLOR_SEMANTIC_SUCCESS,
    },
    warning: {
      main: COLOR_SEMANTIC_WARNING,
    },
    error: {
      main: COLOR_SEMANTIC_ERROR,
    },
    info: {
      main: COLOR_SEMANTIC_INFO,
    },
  },
});

// Tema escuro
export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: COLOR_LIGHT_BLUE_MAIN,
      dark: COLOR_DARK_BLUE_MAIN,
      light: COLOR_PRIMARY,
    },
    secondary: {
      main: COLOR_SECONDARY,
    },
    background: {
      default: COLOR_NEUTRAL_GRAY_900,
      paper: '#1E1E1E',
    },
    text: {
      primary: COLOR_NEUTRAL_WHITE,
      secondary: COLOR_NEUTRAL_GRAY_100,
    },
    divider: COLOR_NEUTRAL_GRAY_500,
    success: {
      main: COLOR_SEMANTIC_SUCCESS,
    },
    warning: {
      main: COLOR_SEMANTIC_WARNING,
    },
    error: {
      main: COLOR_SEMANTIC_ERROR,
    },
    info: {
      main: COLOR_SEMANTIC_INFO,
    },
  },
});

// Tema padrão (dark)
export const defaultTheme = darkTheme;
