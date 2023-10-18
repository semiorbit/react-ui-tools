import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

var useMobileView = function useMobileView() {
  var breakpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'sm';
  var theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(breakpoint));
};

export { useMobileView as default };
