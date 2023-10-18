import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const useMobileView = (breakpoint = 'sm') => {

    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down(breakpoint));

};

export default useMobileView;
