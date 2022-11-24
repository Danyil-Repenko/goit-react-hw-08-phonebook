import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1250px',
  '2xl': '1536px',
};

export const theme = extendTheme({
  fonts: {
    body: `"Akshar", sans-serif`,
  },
  breakpoints,
});
