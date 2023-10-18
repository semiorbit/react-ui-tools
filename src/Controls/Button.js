import React from 'react';
import {default as MuiButton} from '@mui/material/Button';
import {Trans} from "react-i18next";

/**
 * @param {} props
 * @param props.fullWidth
 */
const Button = props => {

    return (
        <MuiButton
            classes={{
                root: 'sc-button',
                outlined: 'sc-outlined'
            }}
            {...props}>
            <Trans>{props.children}</Trans>
        </MuiButton>
    );

};

Button.defaultProps = {
    variant: "contained",
    margin: "normal",
    color: "primary",
};

export default Button;
