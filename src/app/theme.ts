"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Noto Sans JP", sans-serif',
    fontSize: 14,
  },
  components: {
    MuiModal: {
      defaultProps: {
        disableScrollLock: true,
      },
    },
  },
});

export default theme;
