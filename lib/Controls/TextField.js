import React from 'react';
import MuiTextField from '@mui/material/TextField';

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var _excluded = ["label", "InputProps", "InputLabelProps", "TransOptions"];

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

var TextField = function TextField(props) {
  var label = props.label,
    InputProps = props.InputProps,
    InputLabelProps = props.InputLabelProps;
    props.TransOptions;
    var fldProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(MuiTextField, _extends({
    classes: {
      root: 'sc-text-field'
    },
    InputLabelProps: _objectSpread2({
      classes: {
        root: 'sc-label',
        focused: 'sc-focused',
        shrink: 'sc-shrink',
        disabled: 'sc-disabled',
        error: 'sc-error'
      }
    }, InputLabelProps),
    InputProps: _objectSpread2({
      classes: {
        input: 'sc-input',
        underline: 'sc-underline',
        focused: 'sc-focused',
        disabled: 'sc-disabled',
        error: 'sc-error'
      }
    }, InputProps),
    FormHelperTextProps: {
      classes: {
        root: 'sc-helper'
      }
    },
    label: label
  }, fldProps));
};
TextField.defaultProps = {
  margin: "normal"
};

export { TextField as default };
