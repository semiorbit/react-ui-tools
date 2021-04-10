import React from 'react';
import {default as MuiTextField} from "@material-ui/core/TextField";

/**
 * Text Field
 *
 * @see https://material-ui.com/api/text-field/
 *
 * @param {string} props.label
 * @param {string} props.id
 * @param {name} props.name
 * @param {string} props.defaultValue
 * @param {string} props.value
 * @param {string} props.placeholder
 * @param {string} props.type a valid HTML5 input type.
 * @param {object} props.inputProps Attributes applied to the input element.
 * @param {string} props.autoComplete
 * @param {boolean} props.autoFocus
 * @param {boolean} props.autoComplete
 * @param {boolean} props.disabled
 * @param {boolean} props.error If true, the label will be displayed in an error state.
 * @param {boolean} props.fullWidth
 * @param {node} props.helperText
 * @param {boolean} props.multiline
 * @param {string|number} props.rows
 * @param {string|number} props.rowsMax
 * @param {boolean} props.required If this option is set you must pass the options of the select as children.
 * @param {boolean} props.select  If this option is set you must pass the options of the select as children.
 * @param {'standard'|'outlined'|'filled'} props.variant
 * @param {'none'|'dense'|'normal'} props.margin
 *
 *
 * @param {function} props.onChange
 * @param {function} props.onBlur
 *
 * @param {object} props.className Css styles
 * @param {object} props.FormHelperTextProps
 * @param {object} props.InputLabelProps
 * @param {object} props.InputProps
 * @param {ref} props.inputRef
 * @param {object} props.SelectProps
 * @param props.children
 */

const TextField = props => {

    const {label, InputProps, InputLabelProps, TransOptions, ...fldProps} = props;

    return (
        <MuiTextField
            classes={{
                root: 'sc-text-field',
            }}

            InputLabelProps={{
                classes: {
                    root: 'sc-label',
                    focused: 'sc-focused',
                    shrink: 'sc-shrink',
                    disabled: 'sc-disabled',
                    error: 'sc-error'
                },
                ...InputLabelProps
            }}

            InputProps={{
                classes: {
                    input: 'sc-input',
                    underline: 'sc-underline',
                    focused: 'sc-focused',
                    disabled: 'sc-disabled',
                    error: 'sc-error'
                },
                ...InputProps
            }}

            FormHelperTextProps={{
                classes: {
                    root: 'sc-helper'
                }
            }}

            label={label}

            {...fldProps}
        />
    );

};


TextField.defaultProps = {
  margin: "normal"
};

export default TextField;
