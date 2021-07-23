import { createTheme } from '@material-ui/core';

export const theme = createTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});