import React, {useCallback, useEffect, useState} from 'react';
import Snackbar from '@mui/material/Snackbar';
import InlineAlert from "./InlineAlert";
import {isIphoneX} from "@semiorbit/is-iphonex";



const Alert = props => {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(props.open);
    }, [props.open]);


    const handleClose = useCallback( (event, reason) => {
        if (reason === 'clickaway') return;
        setOpen(false);
        props.onClose();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <Snackbar open={open}
                  autoHideDuration={0}
                  onClose={(e, reason) => handleClose}
                  style={isIphoneX() ? {bottom: '28px'} : {}}>
            <InlineAlert onClose={handleClose} severity={props.severity}>
                {props.children}
            </InlineAlert>
        </Snackbar>
    );

};

Alert.defaultProps = {
    open: true,
    severity: "error",
    onClose: () => {}
};

export default Alert;