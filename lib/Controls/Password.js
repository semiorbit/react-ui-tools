import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { FormHelperText } from '@material-ui/core';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

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

var Password = function Password(props) {
  var className = props.className,
      label = props.label,
      iconLabel = props.iconLabel;
      props.InputLabelProps;
      props.margin;
      props.helperText;
      props.error;
      var inputComponentProps = _objectWithoutProperties(props, ["className", "label", "iconLabel", "InputLabelProps", "margin", "helperText", "error"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showPassword = _useState2[0],
      setShowPassword = _useState2[1];

  var handleClickShowPassword = function handleClickShowPassword() {
    setShowPassword(!showPassword);
  };

  var handleMouseDownPassword = function handleMouseDownPassword(event) {
    event.preventDefault();
  };

  return /*#__PURE__*/React.createElement(FormControl, {
    className: className,
    margin: props.margin,
    classes: {
      root: 'sc-text-field'
    }
  }, /*#__PURE__*/React.createElement(InputLabel, {
    htmlFor: props.id,
    error: props.error,
    classes: {
      root: 'sc-label',
      focused: 'sc-focused',
      shrink: 'sc-shrink',
      disabled: 'sc-disabled'
    }
  }, label), /*#__PURE__*/React.createElement(Input, _extends({
    classes: {
      input: 'sc-input',
      underline: 'sc-underline',
      focused: 'sc-focused',
      disabled: 'sc-disabled'
    },
    endAdornment: /*#__PURE__*/React.createElement(InputAdornment, {
      position: "end"
    }, /*#__PURE__*/React.createElement(IconButton, {
      "aria-label": iconLabel,
      onClick: handleClickShowPassword,
      onMouseDown: handleMouseDownPassword
    }, showPassword ? /*#__PURE__*/React.createElement(Visibility, null) : /*#__PURE__*/React.createElement(VisibilityOff, null))),
    inputProps: {
      spellCheck: false
    }
  }, inputComponentProps, {
    fullWidth: true,
    type: showPassword ? 'text' : 'password',
    error: props.error
  })), /*#__PURE__*/React.createElement(FormHelperText, {
    error: props.error
  }, props.helperText));
};

Password.defaultProps = {
  label: "Password",
  iconLabel: "toggle password visibility",
  margin: "normal"
};

export default Password;
