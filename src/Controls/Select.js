import React from 'react';
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import {default as MuiSelect} from "@mui/material/Select";
import {FormHelperText} from "@mui/material";

/**
 *
 * Select
 *
 * @param {string} props.optionTitle
 * @param {string} props.optionId
 * @param {'standard'|'outlined'|'filled'} props.variant
 * @param {'none'|'dense'|'normal'} props.margin
 *
 *
 * @param {function} props.onChange
 *
 * @param {object} props.className Css styles
 * @param {object} props.FormHelperTextProps
 * @param {object} props.InputLabelProps
 * @param {object} props.InputProps
 * @param {ref} props.inputRef
 * @param {object} props.SelectProps
 * @param props.children
 *
 */
const Select = props => {

    const {optionId, optionTitle, margin, label, required, helperText, ...selectProps} = props;


    let items = props.children ? props.children :

        ((props.options && props.options.length > 0) ? (
                props.options.map(option => {
                    return (<MenuItem key={option[optionId]} value={option[optionId]}>{option[optionTitle]}</MenuItem>);
                })
            ) :
            (<MenuItem disabled>---</MenuItem>));

    let fHelper = (helperText) ? (<FormHelperText error={props.error}>{helperText}</FormHelperText>) : '';


    return (
        <FormControl className={props.className} margin={margin}>
            <InputLabel id={props.id + "-label"}  error={props.error} required={required}>{label}</InputLabel>
            <MuiSelect
                labelId={props.id + "-label"}
                {...selectProps}
            >
                {items}
            </MuiSelect>
            {fHelper}
        </FormControl>
    );

};

Select.defaultProps = {
    optionId: "id",
    optionTitle: "title",
    margin: "normal",
    required: false
};

export default Select;
