import type { Preview } from '@storybook/react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { lightTheme, darkTheme } from './themes';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'dark',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme === 'light' ? lightTheme : darkTheme;

      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              p: theme.spacing(2),
              minHeight: 'calc(100vh - 48px)',
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
            }}
          >
            <Story />
          </Box>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
