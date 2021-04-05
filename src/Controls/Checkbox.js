import React from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {default as MuiCheckbox} from "@material-ui/core/Checkbox";


const Checkbox = props => {

    const {checked, onChange, label, margin, value, color, multiline,  ...ctrlProps} = props;

   let styles = {chkRoot: {}, fclRoot: {}};

    if (props.multiline) {

        styles = {
            chkRoot: {
                paddingTop: "2px",
                alignItems: "start"
            },
            fclRoot: {
                alignItems: "flex-start"
            }
        };

    }

    return (
        <FormControlLabel
            className={props.className}
            margin={props.margin}
            style={styles.fclRoot}
            control={
                <MuiCheckbox
                    checked={props.checked}
                    onChange={props.onChange}
                    value={props.value}
                    color={props.color}
                    style={styles.chkRoot}
                />
            }
            label={props.label}
            {...ctrlProps}
        />
    );

};


Checkbox.defaultProps = {
    margin: "normal",
    color: "primary"
};


export default Checkbox;
