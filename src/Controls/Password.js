import React, {useState} from 'react';
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from '@mui/material/InputLabel';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {FormHelperText} from "@mui/material";

/**
 * Password Field
 *
 * @see https://material-ui.com/components/text-fields/
 *
 * @param {string} props.label
 * @param {string} props.iconLabel
 * @param {string} props.id
 * @param {name} props.name
 * @param {string} props.defaultValue
 * @param {string} props.value
 * @param {string} props.placeholder
 * @param {object} props.inputProps Attributes applied to the input element.
 * @param {string} props.autoComplete
 * @param {boolean} props.autoFocus
 * @param {boolean} props.autoComplete
 * @param {boolean} props.disabled
 * @param {boolean} props.error If true, the input will indicate an error. This is normally obtained via context from FormControl.
 * @param {boolean} props.fullWidth
 * @param {node} props.helperText
 * @param {boolean} props.required If this option is set you must pass the options of the select as children.
 * @param {'standard'|'outlined'|'filled'} props.variant
 * @param {'none'|'dense'} props.margin
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
 */

const Password = props => {

    const {className, label, iconLabel, InputLabelProps, margin, helperText, error, ...inputComponentProps} = props;

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    return (
        <FormControl className={className}
                     margin={props.margin}
                     classes={{
                         root: 'sc-text-field'
                     }}
        >
            <InputLabel htmlFor={props.id}
                        error={props.error}
                        classes={{
                            root: 'sc-label',
                            focused: 'sc-focused',
                            shrink: 'sc-shrink',
                            disabled: 'sc-disabled'
                        }}

            >{label}</InputLabel>
            <Input

                classes={{
                    input: 'sc-input',
                    underline: 'sc-underline',
                    focused: 'sc-focused',
                    disabled: 'sc-disabled'
                }}

                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label={iconLabel}
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                            {showPassword ? <Visibility/> : <VisibilityOff/>}
                        </IconButton>
                    </InputAdornment>
                }

                inputProps={{
                    spellCheck: false
                }}

                {...inputComponentProps}

                fullWidth
                type={showPassword ? 'text' : 'password'}
                error={props.error}
            />
            <FormHelperText
                error={props.error}
            >
                {props.helperText}
            </FormHelperText>
        </FormControl>
    );

};

Password.defaultProps = {
    label: "Password",
    iconLabel: "toggle password visibility",
    margin: "normal"
};

export default Password;
