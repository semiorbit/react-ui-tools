import {useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useMobileView = (breakpoint = 'sm') => {

    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down(breakpoint));

};

export default useMobileView;
